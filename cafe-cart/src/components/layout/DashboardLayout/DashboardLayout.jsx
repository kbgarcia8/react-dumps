import {React, useState, useReducer, useEffect, useMemo} from "react";
import { useDeepCompareEffect } from 'use-deep-compare';
import PropTypes from "prop-types";
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useGlobal } from "../../../context/GlobalContext.jsx";
import { useAuth } from "../../../context/UserAuthContext.jsx";
import { useTheme } from "../../../context/ThemeContext.jsx";
import * as styled from "./DashboardLayout.styles";
import DeleteIcon from "../../atoms/SVG/DeleteIcon";
import EditIcon from "../../atoms/SVG/EditIcon";
import CashIcon from "../../atoms/SVG/CashIcon";
import CardIcon from "../../atoms/SVG/CardIcon";
import GCashIcon from "../../atoms/SVG/GCashIcon";
import { formatDate } from "../../../utils/utils.js"

const initialCart = [];

const transactionTypes = ["Dine-In", "Take-out", "Drive Thru", "Delivery"];

{/*const initialAddressBank = [
    {
        name: "KB Garcia",
        number: "09123456789",
        location: "Metro, Manila",
        editing: false,
        checked: false
    }
];*/}

const paymentMethods = [
    {
        name: "Cash/COD",
        image: <CashIcon/>,
        checked: false
    },
    {
        name: "GCash/E-wallet",
        image: <GCashIcon/>,
        checked: false
    },
    {
        name: "Credit/Debit Card",
        image: <CardIcon/>,
        checked: false
    },
]

const initialPaymentFieldset = [
    {
        legend: "Address",
        inputs: [],
        height: "47.5%",
        expandable: true
    },
    {
        legend: "Payment Option",
        inputs: paymentMethods.map((method, index) => ({
                labelText: `${method.name}`,
                labelDirection: "row",
                id: `payment-option-${index}`,
                placeholderText: "",
                image: method.image,
                mainOnChange: () => {},
                value: "",
                type: "radio",
                isRequired: false,
                data: method,
                dataAttributes: {
                    "data-index": index
                }
        })),
        height: "35%",
        expandable: false
    }
]

const  reducer = (state, action) => {
    const {size, price, quantity, index} = action.data || {};
    switch (action.type) {        
        case "addToCart":
        return [...state].indexOf(state.find((entry => entry.name === `${action.databaseItem.name}` && entry.size === `${size}` ))) === -1
                ? [...state, {name: `${action.databaseItem.name}`, thumbnail: `${action.databaseItem.image}`, size: `${size}`,price: `${price}`, quantity: 1, total: parseInt(price)}]
                : state.map((entry) => (entry.name === `${action.databaseItem.name}` && entry.size === `${size}`) ? {...entry, quantity: entry.quantity + 1, total: entry.total + parseInt(price)} : entry);
        case "increment":
            return state.map((entry, idx) => idx === parseInt(index) ? {...entry, quantity: entry.quantity + 1, total: parseInt(entry.total) + parseInt(entry.price)} : entry);
        case "decrement":
                if(parseInt(quantity) === 1) {            
                    return state.filter((_, idx) => idx !== parseInt(index));
                } else {
                    return state.map((entry, idx) => idx === parseInt(index) ? {...entry, quantity: entry.quantity -1, total: parseInt(entry.total) - parseInt(entry.price)} : entry);
                }
        case "remove":
            return state.filter((_, idx) => idx !== parseInt(index));
        case "restoreSessionCart":
            return action.payload;
        case "orderAgain":
            return state.concat(action.currentCart)
        case "reset":
            return initialCart;
        default:
            return state;
    }
}

const DashboardLayout = ({header, sidebar}) => {
    //custom hooks/contexts
    const navigate = useNavigate();
    const {database} = useGlobal();
    const { authLoading , saveUserProfile, userProfile } = useAuth();
    const { theme, toggleTheme, retreviedUserPrefferedTheme } = useTheme();
    //reducer
    const [state, dispatch] = useReducer(reducer, initialCart);
    //states
    const [addressBank,setAddressBank] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods)
    const [paymentFieldSet, setPaymentFieldSet] = useState(initialPaymentFieldset);
    const [transactionTypeCount, setTransactionTypeCount] = useState(0);
    const [transactionType, setTransactionType] = useState(transactionTypes[0]);
    const [checkoutDetails, setCheckoutDetails] = useState({});
    const [isPending, setIsPending] = useState(true);
    const [orderHistory, setOrderHistory] = useState([]);
    const [themeSwitchChecked, setThemeSwitchChecked] = useState(false); // store value
    
    //useEffect with no dependecy and onMount only
    //ensure that previously saved data are loaded properly through onSnapshot
    useEffect(() => {
        if (authLoading) return; // Firebase auth still initializing

        if (userProfile?.userAddressBank) setAddressBank(userProfile.userAddressBank);

        if(userProfile?.orderHistoryBank) setOrderHistory(userProfile.orderHistoryBank)

        if (userProfile?.savedCart) {
            dispatch({ type: "restoreSessionCart", payload: userProfile.savedCart });
        }

        if(userProfile?.preferredTheme) {
            retreviedUserPrefferedTheme(userProfile);
            setThemeSwitchChecked(userProfile.preferredTheme === "darkTheme" ? true : false);
        }
    }, [userProfile, authLoading]);

    const handleThemeSwitch = (e) => {
        console.log("Theme switch")
        setThemeSwitchChecked(e.target.checked)
        toggleTheme();
        saveUserProfile({ "preferredTheme": theme.name === "lightTheme" ? "darkTheme" : "lightTheme"  });
    }

    useEffect(() => {
        const persistCart = async()=> {
            try {
                await toast.promise(
                    saveUserProfile({ "savedCart": state}),
                    {
                        loading: 'Saving updated savedCart...',
                        success: 'User savedCart saved successfully',
                        error: (err) => err.message || 'Saving savedCart Failed'
                    }
                );
        
                await new Promise((resolve) => setTimeout(resolve, 500));
                
            } catch (error) {
                console.error(error.message);
            }
        }

        const clearSavedCart = async()=> {
            try {
                await toast.promise(
                    saveUserProfile({ "savedCart": []}),
                    {
                        loading: 'Clearing savedCart...',
                        success: 'savedCart cleared successfully',
                        error: (err) => err.message || 'Clearing savedCart Failed'
                    }
                );                
            } catch (error) {
                console.error(error.message);
            }
        }

        if (state && state.length > 0) {
            persistCart();
        } else if (state.length === 0) {
            clearSavedCart();
        }
    }, [state])

    //Simulation of isPending and checkout reset after checkout
    //This logic should be refactored once there is an admin side that confirms pennding, ready and delivered orders
    useDeepCompareEffect(() => {
        if (Object.keys(checkoutDetails).length === 0) return; // Prevents unnecessary execution
    
        const timeout = setTimeout(async () => {
            setIsPending(false);
            const orderHistoryUpdate = [...orderHistory, checkoutDetails]
            console.dir(orderHistoryUpdate, { depth: null })
            setOrderHistory(orderHistoryUpdate);
            try {
                await toast.promise(
                    saveUserProfile({ "orderHistoryBank": orderHistoryUpdate}),
                    {
                        loading: 'Saving updated orderHistoryBank...',
                        success: 'User orderHistoryBank saved successfully',
                        error: (err) => err.message || 'Saving orderHistoryBank Failed'
                    }
                );
        
                await new Promise((resolve) => setTimeout(resolve, 500));
                
            } catch (error) {
                console.error(error.message);
            }
    
            setTimeout(() => {
                setCheckoutDetails({});
                setIsPending(true);
                dispatch({ type: "restoreSessionCart", payload: [] });
                console.log("Checkout details cleared");
            }, 1000); // 45 seconds after isPending is false
        }, 1000); // 10 seconds timeout for isPending
    
        return () => clearTimeout(timeout);
    }, [checkoutDetails]);

    const subtotal = useMemo(() => {
        return state.length > 0 
            ? state.reduce((total, entry) => total + parseInt(entry.total), 0) 
            : 0;
    }, [state]);

    const checkedAddress = async (e) => {
        const { index } = e.currentTarget.dataset;
        const updatedBank = addressBank.map((addressEntry, idx) => {
            if (idx == index) {
                return addressEntry.checked ? addressEntry : {...addressEntry, checked: true};
            } else {
                return addressEntry.checked ? {...addressEntry, checked: false} : addressEntry;
            }
        })
        try {
            await toast.promise(
                (async () => {
                    const saveUserInfo = await saveUserProfile({ "userAddressBank": updatedBank});
    
                    return saveUserInfo;
                })(),
                {
                    loading: 'Saving updated user userAddressBank...',
                    success: 'User userAddressBank saved successfully',
                    error: (err) => err.message || 'Saving userAddressBank Failed'
                }
            );
    
            await new Promise((resolve) => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error(error.message);
        }  
    }

    const openEditAddressEntryPanel = (e) => {
        e.preventDefault();
        const { index } = e.currentTarget.dataset;
        setAddressBank((prevAddressBank) => 
            prevAddressBank.map((addressInfo, addressInfoIndex) => (
                (addressInfoIndex == index)
                ? {...addressInfo, editing: !addressInfo['editing']} 
                : addressInfo
            ))
        )
    }

    const deleteAddressEntry = async (e) => {
        e.preventDefault();
        const { index } = e.currentTarget.dataset;
        const updatedBank = addressBank.filter((_,idx) => (
            idx !== parseInt(index)
        ))
        try {
            await toast.promise(
                (async () => {
                    const saveUserInfo = await saveUserProfile({ "userAddressBank": updatedBank});
    
                    return saveUserInfo;
                })(),
                {
                    loading: 'Saving updated user userAddressBank...',
                    success: 'User userAddressBank saved successfully',
                    error: (err) => err.message || 'Saving userAddressBank Failed'
                }
            );
    
            await new Promise((resolve) => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error(error.message);
        }
    }

    const saveAddressEntryEdit = async (e) => {
        e.preventDefault();
        const currentFieldset = e.target.closest("fieldset")

        if(currentFieldset) {
            const inputs = currentFieldset.querySelectorAll("div input");
            const noneIsBlank =  Array.from(inputs).every(input => input.value !== "" && input.value !== null && input.value !== undefined)

            if(noneIsBlank) {
                const updatedBank = addressBank.map((addressInfo) => ({...addressInfo, ['editing']: false}))
                setAddressBank(updatedBank)

                    try {
                        await toast.promise(
                            (async () => {
                                const saveUserInfo = await saveUserProfile({ "userAddressBank": updatedBank});
                
                                return saveUserInfo;
                            })(),
                            {
                                loading: 'Saving updated user userAddressBank...',
                                success: 'User userAddressBank saved successfully',
                                error: (err) => err.message || 'Saving userAddressBank Failed'
                            }
                        );
                
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        
                    } catch (error) {
                        console.error(error.message);
                    }                    
            } else {
                inputs.forEach(input => {
                    const {key, index} = input.dataset;
    
                    if(input.value === "" || input.value === null || input.value === undefined) {
                        toast.error(`Please provide ${key.charAt(0).toUpperCase() + key.slice(1)} of Address ${parseInt(index)+1} entry`)
                    }
                });
            }
        }
    }

    const cancelAddressEntryEdit = async () => {
    if (userProfile?.userAddressBank) {
        // Map the addresses and set 'editing' to false
        const updatedAddressBank = userProfile.userAddressBank.map(address => ({
            ...address,
            editing: false
        }));

        // Now set the updated address bank
        await setAddressBank(updatedAddressBank);
    }
};

    const addressFieldInputs = useMemo(()=> {
        return addressBank.map((addressEntry, index) => ({
            labelText: `${addressEntry.name}\n`,
            additionalInfo: `${addressEntry.number}\n${addressEntry.location}`,
            labelDirection: "column",
            id: `address-entry-${index}`,
            placeholderText: "",
            editable: true,
            mainOnChange: checkedAddress,
            onClickEdit: openEditAddressEntryPanel,
            editIcon: <EditIcon/>,
            onClickDelete: deleteAddressEntry,
            deleteIcon: <DeleteIcon/>,
            onClickSave: saveAddressEntryEdit,
            onClickCancel: cancelAddressEntryEdit,
            type: "radio",
            isRequired: true,
            data: addressEntry,
            dataAttributes: {
                "data-index": index
            }
        }))
    }, [addressBank])

    useDeepCompareEffect(() => {
        //console.log("prevPaymentFieldSet before update:", paymentFieldSet);
    
        setPaymentFieldSet((prevPaymentFieldSet) => 
            (Array.isArray(prevPaymentFieldSet) ? prevPaymentFieldSet : []).map((fieldEntry) => //always check first if element to be mapped is an array and provide fallback to prevent error
                fieldEntry.legend === "Address"
                    ? { ...fieldEntry, inputs: addressFieldInputs }
                    : fieldEntry
            )
        );
    }, [addressFieldInputs])

    const checkedPaymentMethod = (e) => {
        const { index } = e.currentTarget.dataset;
        setPaymentMethod((prevPaymentMethod) => 
            prevPaymentMethod.map((method, methodIndex) => {
                if (methodIndex == index) {
                    return method.checked ? method : {...method, ['checked']: true}
                } else {
                    return method.checked ? {...method, ['checked']: false} : method
                }
            })
        )
    }

    const paymentFieldInputs = useMemo(()=> {
        return paymentMethod.map((method, index) => ({
            labelText: `${method.name}`,
            labelDirection: "row",
            id: `payment-option-${index}`,
            placeholderText: "",
            image: method.image,
            mainOnChange: checkedPaymentMethod,
            value: "",
            type: "radio",
            isRequired: false,
            data: method,
            dataAttributes: {
                "data-index": index
            }
        }))
    }, [paymentMethod])

    useDeepCompareEffect(() => {
        //console.log("prevPaymentFieldSet before update:", paymentFieldSet);
    
        setPaymentFieldSet((prevPaymentFieldSet) => 
            (Array.isArray(prevPaymentFieldSet) ? prevPaymentFieldSet : []).map((fieldEntry) =>
                fieldEntry.legend === "Payment Option"
                    ? { ...fieldEntry, inputs: paymentFieldInputs }
                    : fieldEntry
            )
        );
    }, [paymentFieldInputs]);
    
    useEffect(() => {
        setTransactionType(transactionTypes[transactionTypeCount]);
    }, [transactionTypeCount, transactionTypes]); 

    const addToCart = (e) => {
        const {size, price, category, index} = e.currentTarget.dataset;
        const itemInDatabase = database[category][index];
        
        dispatch({ type: "addToCart" , data: {size, price, category, index}, databaseItem: itemInDatabase})
        toast.success("Item successfully added to cart")


    }

    const incrementItem = (e) => {
        const {index} = e.currentTarget.dataset;
        dispatch({ type: "increment" , data: {index}})
    }

    const decrementItem = (e) => {
        const {index,quantity} = e.currentTarget.dataset;
        dispatch({ type: "decrement" , data: {index, quantity}})
    }
    
    const removeFromCart = (e) => {
        const {index} = e.currentTarget.dataset;
        dispatch({ type: "remove" , data: {index}})
    }

    const clearCart = () => {        
        
        if (state.length === 0) {
            dispatch({ type: "reset" });
            toast.warn('Cart was cleared with existing items');
        } else {
            //Can be improved into a modal in the future
            if (window.confirm("Current cart is not empty, confirming will clear all current cart items. Proceed?")) {
                toast.warn('Cart was cleared with existing items');
                dispatch({ type: "reset" })
            } else {
                toast.info("Clear cart was cancelled, items are still in cart");
            }
        }
    }

    const nextTransactionType = () => {
        setTransactionTypeCount((prevTransactionCount) => prevTransactionCount !== 3 ? prevTransactionCount + 1 : 0) 
    }

    const prevTransactionType = () => {
        setTransactionTypeCount((prevTransactionCount) => prevTransactionCount !== 0 ? prevTransactionCount - 1 : 3) 
    }

    const handleAddressBankChange = (e) => {
        const {index, key} = e.currentTarget.dataset;

        setAddressBank((prevAddressBank) => 
            prevAddressBank.map((addressInfo, addressInfoIndex) => (
                addressInfoIndex == index
                ? addressInfo[key] == e.target.value ? addressInfo : {...addressInfo, [key]: e.target.value}
                : addressInfo
            ))
        )
    }

    const addAddressEntry = () => {
        const newAddAddressEntry = {
            name: "",
            number: "",
            location: "",
            editing: true,
            checked: false
        }
        setAddressBank((prevAddressBank) => [
            ...prevAddressBank,
            newAddAddressEntry,
        ]);
    }

    const checkout = (e) => {        
        e.preventDefault();
        const checkedAddress = addressBank.find((address) => address.checked === true);
        const checkedPayment = paymentMethod.find((method) => method.checked === true);
        const currentCart = [...state];
        const currentTransactionType = transactionType;
        const currentSubtotal = subtotal;
        const currentDateAndTime = formatDate(Date.now());

        if(
            ((currentTransactionType === "Delivery" && checkedAddress) && checkedPayment && currentCart.length !== 0)
            ||(currentTransactionType !== "Delivery" && checkedPayment && currentCart.length !== 0)) {
                setCheckoutDetails({
                    address: checkedAddress,
                    payment: checkedPayment.name,
                    cart: currentCart,
                    transactionType: currentTransactionType,
                    subtotal: currentSubtotal,
                    dateAndTime: currentDateAndTime
                })
                toast.success("Thank you for your purchase!")
                dispatch({ type: "reset" })
                navigate("../dashboard/pending")
        } else if(currentCart.length === 0 || checkedAddress === undefined || checkedPayment === undefined) {
            currentCart.length === 0 
                ? toast.error("Please add items to cart first before checking out")
                : addressBank.length ===0
                    ? toast.error("Please provide atleast one address detail before checking out")
                    : (currentTransactionType === "Delivery" && checkedAddress === undefined) 
                        ? toast.error("Please select an address before checking out")
                        : checkedPayment === undefined
                            && toast.error("Please select a payment method before checking out")
        }
    }

    const deleteOrderHistoryEntry = async (e) => {
        const {index} = e.currentTarget.dataset;
        const filteredHistory = orderHistory.filter((_, idx) => idx !== parseInt(index));
        setOrderHistory(filteredHistory);
        try {
            await toast.promise(
                (async () => {
                    const saveUserInfo = await saveUserProfile({ "orderHistoryBank": filteredHistory});
    
                    return saveUserInfo;
                })(),
                {
                    loading: 'Saving updated orderHistoryBank...',
                    success: 'User orderHistoryBank saved successfully',
                    error: (err) => err.message || 'Saving orderHistoryBank Failed'
                }
            );
    
            await new Promise((resolve) => setTimeout(resolve, 500));
            
        } catch (error) {
            console.error(error.message);//custom message for every error.code just like in Sign Up
        }
    }

    const orderAgain = (e) => {
        const {index} = e.currentTarget.dataset
        if (state.length === 0) {
            dispatch({ type: "orderAgain" , currentCart: orderHistory[index]['cart']})
            setPaymentMethod((prevPaymentMethod) => prevPaymentMethod.map((method) => (
                orderHistory[index]['payment'] === method.name ? {...method, checked: true} : method
                ))
            )
            navigate("../dashboard/cart")
        } else {
            //Can be improved into a modal in the future
            if (window.confirm("Current cart is not empty, confirming will replace all current cart items. Proceed?")) {
                console.log("Cart Items replaced!");
                dispatch({ type: "orderAgain" , currentCart: orderHistory[index]['cart']})
                navigate("../dashboard/cart")
            } else {
                toast.info("Order again action and cart replacement canceled");
            }
        }
    }

    return (
        <styled.DashboardLayoutWrapper>
            <styled.DashboardLayoutHeader>{header}</styled.DashboardLayoutHeader>
            <styled.DashboardLayoutSidebar>{sidebar}</styled.DashboardLayoutSidebar>
            <styled.DashboardLayoutContent>
                <Outlet context={{
                    state, 
                    addToCart, 
                    incrementItem, 
                    decrementItem, 
                    removeFromCart, 
                    clearCart,
                    checkout,
                    transactionType,
                    nextTransactionType,
                    prevTransactionType,
                    subtotal,
                    addressBank, 
                    paymentFieldSet,
                    handleAddressBankChange,
                    addAddressEntry,
                    checkoutDetails,
                    isPending,
                    orderHistory,
                    deleteOrderHistoryEntry,
                    orderAgain,
                    themeSwitchChecked,
                    handleThemeSwitch
                }}/>
            </styled.DashboardLayoutContent>
        </styled.DashboardLayoutWrapper>
    )
}

DashboardLayout.propTypes = {
    header: PropTypes.element,
    sidebar: PropTypes.element
}

export default DashboardLayout;