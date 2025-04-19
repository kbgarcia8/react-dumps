import {React, useState, useEffect, Fragment} from "react";
import { useOutletContext } from "react-router-dom";
import { useGlobal } from "../../../../context/GlobalContext.jsx"
import * as styled from './MenuPage.styles.js'

const MenuPage =({}) => {

    const {database} = useGlobal();
    const [DBKeys, setDBKeys] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState(null)
    const [filteredMenuHeader, setFilteredMenuHeader] = useState('All')
    const {addToCart} = useOutletContext();

    useEffect(() => {
        if (database) {
            setDBKeys(Object.keys(database));
            setFilteredMenu(database);
        }
    }, [database])

    const keyTranslates = {
        menu: {text: "All"},
        icedDrink: {text: "Iced Drink"},
        hotDrink: {text: "Hot Drink"},
        cakes: {text: "Cakes"},
        pastries: {text: "Pastries"},
        pasta: {text: "Pasta"},
        mains: {text: "Mains"},
        sides: {text: "Sides"}
    };

    const handleMenuFilterButton = (e) => {
        const {key} = e.currentTarget.dataset;

        if (!database||Object.keys(database).length === 0) {
            console.warn("Database is still loading!");
            return;
        }
        if (key !== 'menu') {
            const currentHeader = `${e.currentTarget.textContent}`;
            const currentData = database[key];
            setFilteredMenu((prevFilter) => prevFilter==currentData ? prevFilter : currentData)
            setFilteredMenuHeader((prevHeader) => prevHeader==currentHeader ? prevHeader : currentHeader)
        } else if (key === 'menu') {
            setFilteredMenu(database);
            setFilteredMenuHeader('All');
        }
    }

    return(
        <styled.MenuPageWrapper>
            <styled.MenuFilterButtonsSpace>
                <styled.MenuFilterButton 
                        dataAttributes={{"data-key": "menu"}}
                        text={'All'}
                        onClick={handleMenuFilterButton}
                        disabled={!database}
                />
                {DBKeys !== null && DBKeys.map((DBKey,index) => (
                    <styled.MenuFilterButton 
                        key={`${DBKey}-${index}`}
                        dataAttributes={{"data-key": DBKey}}
                        text={`${keyTranslates[DBKey]['text']}`}
                        onClick={handleMenuFilterButton}
                        disabled={!database}
                    />
                ))}
            </styled.MenuFilterButtonsSpace>                        
                {(filteredMenu !== database && filteredMenu !== '' && filteredMenu !== null && filteredMenuHeader !== 'All')
                    ? <>
                    <styled.StyledDivider dividerText={filteredMenuHeader}/>
                    <styled.MenuCardContainer>                        
                        {Array.isArray(filteredMenu) && filteredMenu.map((filteredItem,index) => (
                            <styled.CartItemCard
                                key={`${filteredItem.name}-${index}`}
                                productImage={filteredItem.image}
                                productTitle={filteredItem.name}
                                productDescription={filteredItem.description}
                                prices={filteredItem.prices}
                                dataCategory={Object.keys(keyTranslates).find((key) => keyTranslates[key]['text']===filteredMenuHeader)}
                                dataIndex={index}
                                handleAddToCartButton={addToCart}
                            />
                        ))}            
                    </styled.MenuCardContainer>
                    </>
                    : <styled.MenuCardContainerAll> 
                    {DBKeys !== null && DBKeys.map((DBKey,index) => (
                        <Fragment key={`${DBKey}-fragment`}>
                        <styled.StyledDivider2 key={`${DBKey}-divider`} dividerText={keyTranslates[DBKey]['text']}/>
                        <styled.MenuCardContainer2 key={`${DBKey}-${index}-container`}>
                        {Array.isArray(filteredMenu[DBKey]) && filteredMenu[DBKey].map((filteredItem, index) => (
                            <styled.CartItemCard
                                key={`${filteredItem.name}-${index}`}
                                productImage={filteredItem.image}
                                productTitle={filteredItem.name}
                                productDescription={filteredItem.description}
                                prices={filteredItem.prices}
                                dataCategory={DBKey}
                                dataIndex={index}
                                handleAddToCartButton={addToCart}
                            />
                        ))}
                        </styled.MenuCardContainer2>
                        </Fragment>
                    ))}
                    </styled.MenuCardContainerAll>
                }
        </styled.MenuPageWrapper>
    )
}

export default MenuPage;