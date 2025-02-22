import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import ProductCard from "../../../molecules/ProductCard";
import Divider from "../../../atoms/Divider";
import * as styled from './MenuPage.styles'

const MenuPage =({}) => {

    const {database} = useGlobalProvider();
    const [DBKeys, setDBKeys] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState(null)
    const [filteredMenuHeader, setFilteredMenuHeader] = useState('All')

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
        console.log(filteredMenu)
        console.log(filteredMenuHeader)
    }

    return(
        <styled.MenuPageWrapper>
            <styled.MenuFilterButtonsSpace>
                <styled.MenuFilterButton 
                        dataKey={'menu'}
                        text={'All'}
                        onClick={handleMenuFilterButton}
                        disabled={!database}
                />
                {DBKeys !== null && DBKeys.map((DBKey,index) => (
                    <styled.MenuFilterButton 
                        key={`${DBKey}-${index}`}
                        dataKey={DBKey}
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
                        {filteredMenu.map((filteredItem,index) => (
                            <styled.CartItemCard
                                key={`${filteredItem.name}-${index}`}
                                productImage={filteredItem.image}
                                productTitle={filteredItem.name}
                                productDescription={filteredItem.description}
                                prices={filteredItem.prices}
                            />
                        ))}            
                    </styled.MenuCardContainer>
                    </>
                    : <styled.MenuCardContainerAll> 
                    {DBKeys !== null && DBKeys.map((DBKey,index) => (
                        <>
                        <styled.StyledDivider2 key={`${DBKey}-${index}`} dividerText={keyTranslates[DBKey]['text']}/>
                        <styled.MenuCardContainer2>
                        {filteredMenu[DBKey].map((filteredItem, index) => (
                            /*<div key={`${DBKey}`}>{filteredItem.name}</div>*/
                            <styled.CartItemCard
                                key={`${filteredItem.name}-${index}`}
                                productImage={filteredItem.image}
                                productTitle={filteredItem.name}
                                productDescription={filteredItem.description}
                                prices={filteredItem.prices}
                            />
                        ))}
                        </styled.MenuCardContainer2>
                        </>
                    ))}
                    </styled.MenuCardContainerAll>
                }
        </styled.MenuPageWrapper>
    )
}

export default MenuPage;