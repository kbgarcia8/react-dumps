import {React, useState, useReducer, useEffect} from "react";
import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom';
import { useGlobalProvider } from "../../../context/ContextProvider";
import * as styled from "./DashboardLayout.styles";
import DeleteIcon from "../../atoms/SVG/DeleteIcon";
import EditIcon from "../../atoms/SVG/EditIcon";
import CashIcon from "../../atoms/SVG/CashIcon";
import CardIcon from "../../atoms/SVG/CardIcon";
import GCashIcon from "../../atoms/SVG/GCashIcon";

const initialCart = [];

const transactionTypes = ["Dine-In", "Take-out", "Drive Thru", "Delivery"];

const initialAddressBank = [
    {
        name: "KB Garcia",
        number: "09123456789",
        location: "Metro, Manila",
        editing: false,
        checked: false
    },
    {
        name: "Mark Sylvestre",
        number: "091241246571",
        location: "Muntinlupa, Philippines",
        editing: false,
        checked: false
    },
    {
        name: "Rosie Jackson",
        number: "09658512314",
        location: "Pampanga, Philippines",
        editing: false,
        checked: false
    },
    {
        name: "John Doe",
        number: "09876543210",
        location: "Cebu, Philippines",
        editing: false,
        checked: false
    }
];

const paymentMethods = [
    {
        name: "Cash/COD",
        image: <CashIcon/>
    },
    {
        name: "GCash/E-wallet",
        image: <GCashIcon/>
    },
    {
        name: "Credit/Debit Card",
        image: <CardIcon/>
    },
]

const initialPaymentFieldset = [
    {
        legend: "Address",
        inputs: initialAddressBank.map((addressEntry, index) => ({
            labelText: `${addressEntry.name}\n`,
            additionalInfo: `${addressEntry.number}\n${addressEntry.location}`,
            labelDirection: "column",
            id: `address-entry-${index}`,
            placeholderText: "",
            editable: true, //if editable is true data structure must have an editing key with a boolean value
            mainOnChange: () => {},
            onClickEdit: () => {},
            editIcon: <EditIcon/>,
            onClickDelete: () => {},
            deleteIcon: <DeleteIcon/>,
            type: "radio",
            isRequired: false,
            data: addressEntry,
            dataAttributes: {
                "data-index": index
            }
        })),
        height: "25vh"
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
                dataAttributes: {
                    "data-index": index
                }
        })),
        height: "35vh"
    }
]

function reducer(state, action){
    const {size, price, quantity, index} = action.data || {};
    switch (action.type) {        
        case "addToCart":
        console.log('added to cart')
        return [...state].indexOf(state.find((entry => entry.name === `${action.databaseItem.name}` && entry.size === `${size}` ))) === -1
                ? [...state, {name: `${action.databaseItem.name}`, thumbnail: `${action.databaseItem.image}`, size: `${size}`,price: `${price}`, quantity: 1, total: parseInt(price)}]
                : state.map((entry) => (entry.name === `${action.databaseItem.name}` && entry.size === `${size}`) ? {...entry, quantity: entry.quantity + 1, total: entry.total + parseInt(price)} : entry);
        case "increment":
            return state.map((entry, idx) => idx === parseInt(index) ? {...entry, quantity: entry.quantity + 1, total: parseInt(entry.total) + parseInt(entry.price)} : entry);
        case "decrement":
                if(parseInt(quantity) === 1) {            
                    return state.filter((entry, idx) => idx !== parseInt(index));
                } else {
                    return state.map((entry, idx) => idx === parseInt(index) ? {...entry, quantity: entry.quantity -1, total: parseInt(entry.total) - parseInt(entry.price)} : entry);
                }
        case "remove":
            return state.filter((entry, idx) => idx !== parseInt(index)); 
        case "reset":
            return initialCart;
        default:
            return state;
    }
}

const DashboardLayout = ({header, sidebar}) => {

    const {database} = useGlobalProvider();
    const [state, dispatch] = useReducer(reducer, initialCart);
    const [subtotal, setSubtotal] = useState(0);
    const [addressBank,setAddressBank] = useState(initialAddressBank);
    const [addressBankBackup,setAddressBankBackup] = useState(initialAddressBank);
    const [paymentFieldSet, setPaymentFieldSet] = useState(initialPaymentFieldset);
    const [transactionTypeCount, setTransactionTypeCount] = useState(0)
    const [transactionType, setTransactionType] = useState(transactionTypes[0]);

    useEffect(() => {
        const currentTotal = [];        
        state.map((entry,index) => currentTotal.push(parseInt(entry.total)));
        currentTotal.length !== 0 ? setSubtotal(currentTotal.reduce((total, itemTotal) => total + itemTotal,0)) : setSubtotal(0);        
    }, [state])

    useEffect(() => {
        setPaymentFieldSet((prevPaymentFieldSet) => 
            prevPaymentFieldSet.map((fieldEntry, fieldIndex) => {
                if(fieldEntry.legend === "Address") {
                    return {...fieldEntry, 
                    inputs: addressBank.map((addressEntry, index) => ({
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
                            isRequired: false,
                            data: addressEntry,
                            dataAttributes: {
                                "data-index": index
                            }
                    }))
                };
                }
                return fieldEntry
            })
        )
    }, [addressBank])
    
    useEffect(() => {
        setTransactionType(transactionTypes[transactionTypeCount]);
    }, [transactionTypeCount]); 

    const addToCart = (e) => {
        const {size, price, category, index} = e.currentTarget.dataset;
        const itemInDatabase = database[category][index];
        
        dispatch({ type: "addToCart" , data: {size, price, category, index}, databaseItem: itemInDatabase})
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
        dispatch({ type: "reset" })
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
                ? {...addressInfo, [key]: e.target.value}
                : addressInfo
            ))
        )
        console.dir(addressBank, { depth: null });
    }

    const openEditAddressEntryPanel = (e) => {
        e.preventDefault();
        const { index } = e.currentTarget.dataset;
        setAddressBank((prevAddressBank) => 
            prevAddressBank.map((addressInfo, addressInfoIndex) => (
                (addressInfoIndex == index)
                ? addressInfo['editing'] === false ? {...addressInfo, ['editing']: true} : {...addressInfo, ['editing']: false}
                : {...addressInfo, ['editing']: false}
            ))
        )
    }

    const deleteAddressEntry = (e) => {
        e.preventDefault();
        const { index } = e.currentTarget.dataset;
        setAddressBank((prevAddressBank) => 
            prevAddressBank.filter((entry, idx) => (
                idx !== parseInt(index)
            )
        ))
    }

    const saveAddressEntryEdit = (e) => {
        e.preventDefault();
        setAddressBank((prevAddressBank) =>  prevAddressBank.map((addressInfo) => ({...addressInfo, ['editing']: false})))
        setAddressBankBackup([...addressBank]);
        localStorage.setItem("savedAddressBank", JSON.stringify(addressBank));
        //add a case where there are no address available yet
    }

    const cancelAddressEntryEdit = () => {
        setAddressBank((prevAddressBank) =>  prevAddressBank.map((addressInfo) => ({...addressInfo, ['editing']: false})))
        const retrievedAddressBankData = localStorage.getItem("savedAddressBank");
        const parsedAddressBankData = JSON.parse(retrievedAddressBankData) || addressBankBackup;
        setAddressBank(parsedAddressBankData);
    }

    const checkedAddress = (e) => {
        const { index } = e.currentTarget.dataset;
        setAddressBank((prevAddressBank) => 
            prevAddressBank.map((addressInfo, addressInfoIndex) => (
                (addressInfoIndex == index)
                ? {...addressInfo, ['checked']: true}
                : {...addressInfo, ['checked']: false}
            ))
        )
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
                    transactionType,
                    nextTransactionType,
                    prevTransactionType,
                    subtotal, 
                    addressBank, 
                    paymentFieldSet,
                    handleAddressBankChange
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