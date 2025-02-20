import {React, useState, useContext} from "react";
import PropTypes from "prop-types";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import ProductCard from "../../../molecules/ProductCard";
import Divider from "../../../atoms/Divider";
import * as styled from './CartPage.styles'

const CartPage =({}) => {

    const {database} = useGlobalProvider();
    const [filteredMenu, setFilteredMenu] = useState(null)

    let DBKeys = null

    database ? DBKeys = Object.keys(database) : console.warn('Database is still loading')

    console.log(database)

    const keyTranslates = {
        menu: {text: "All"},
        icedDrink: {text: "Iced Drink"},
        hotDrink: {text: "Hot Drink"},
        cakes: {text: "Cakes"},
        pastries: {text: "Pastries"},
        pasta: {text: "Pasta"},
        mains: {text: "Mains"},
        sides: {text: "Sides"}
    }

    const handleMenuFilterButton = (e) => {
        const {key} = e.currentTarget.dataset

        if (!database||Object.keys(database).length === 0) {
            console.warn("Database is still loading!")
            return;
        }
        if (key !== 'menu') {
            const current = database[key]
            setFilteredMenu((prevFilter) => prevFilter==current ? prevFilter : current)
            console.log(filteredMenu)
            console.log(key)
        } else if (key === 'menu') {
            setFilteredMenu('all')
            console.log(filteredMenu)
            console.log(key)
        }
        
    }

    return(
        <styled.CartPageWrapper>
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
            <Divider/>
            <styled.MenuCardContainer>
                {(filteredMenu !== 'all' && filteredMenu !== '' && filteredMenu !== null)
                    ? filteredMenu.map((filteredItem,index) => (
                        /*<div>{filteredItem.name}</div>*/
                            <styled.CartItemCard
                                productImage={filteredItem.image}
                                productTitle={filteredItem.name}
                                productDescription={filteredItem.description}
                                prices={filteredItem.prices}
                            />
                        ))
                    : ''
                }
            </styled.MenuCardContainer>
        </styled.CartPageWrapper>
    )
}

export default CartPage;