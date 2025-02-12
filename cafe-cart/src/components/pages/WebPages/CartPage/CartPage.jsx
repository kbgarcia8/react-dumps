import {React, useState, useContext} from "react";
import PropTypes from "prop-types";
import { useGlobalProvider } from "../../../../context/ContextProvider";
import * as styled from './CartPage.styles'

const CartPage =({}) => {

    const {database} = useGlobalProvider();
    const [filteredMenu, setFilteredMenu] = useState(database['icedDrink'])

    const DBKeys = Object.keys(database)

    //console.log(database['icedDrink'])
    
    const keyTranslates = {
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
        const current = database[key]
        setFilteredMenu((prevFilter) => prevFilter==current ? prevFilter : current)
        console.log(filteredMenu)
        console.log(key)
    }

    return(
        <styled.CartPageWrapper>
            <styled.MenuFilterSpace>
                {DBKeys.map((DBKey,index) => (
                    <styled.MenuFilterButton 
                        key={`${DBKey}-${index}`}
                        dataKey={DBKey}
                        text={`${keyTranslates[DBKey]['text']}`}
                        onClick={handleMenuFilterButton}
                        disabled={!database}
                    />
                ))}
            </styled.MenuFilterSpace>
            <h1>
                This is the temporary Dashboard Cart Page! 
            </h1>
            <div>
                {filteredMenu.map((filter,index) => (
                    <div>{filter.name}</div>
                ))}
            </div>
        </styled.CartPageWrapper>
    )
}

export default CartPage;