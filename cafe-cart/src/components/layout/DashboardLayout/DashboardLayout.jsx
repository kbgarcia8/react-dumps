import {React, useState, useReducer, useEffect, useMemo} from "react";
import { useDeepCompareEffect } from 'use-deep-compare';
import PropTypes from "prop-types";
import { Outlet, useNavigate } from 'react-router-dom';
import { useGlobalProvider } from "../../../context/ContextProvider";
import * as styled from "./DashboardLayout.styles";
import DeleteIcon from "../../atoms/SVG/DeleteIcon";
import EditIcon from "../../atoms/SVG/EditIcon";
import CashIcon from "../../atoms/SVG/CashIcon";
import CardIcon from "../../atoms/SVG/CardIcon";
import GCashIcon from "../../atoms/SVG/GCashIcon";
import { formatDate } from "../../../utils/utils.js"

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
            onClickSave: () => {},
            onClickCancel: () => {},
            type: "radio",
            isRequired: true,
            data: addressEntry,
            dataAttributes: {
                "data-index": index
            }
        })),
        height: "47.5%",
        expandable: true //indicates if fieldset entry can be added that will add inputs
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
        case "orderAgain":
            return state.concat(action.currentCart)
        case "reset":
            return initialCart;
        default:
            return state;
    }
}

const DashboardLayout = ({header, sidebar}) => {
    const navigate = useNavigate();
    const {database} = useGlobalProvider();
    const [state, dispatch] = useReducer(reducer, initialCart);
    const [subtotal, setSubtotal] = useState(0);
    const [addressBank,setAddressBank] = useState(initialAddressBank);
    const [addressBankBackup,setAddressBankBackup] = useState(initialAddressBank);
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods)
    const [paymentFieldSet, setPaymentFieldSet] = useState(initialPaymentFieldset);
    const [transactionTypeCount, setTransactionTypeCount] = useState(0)
    const [transactionType, setTransactionType] = useState(transactionTypes[0]);
    const [checkoutDetails, setCheckoutDetails] = useState({});

     const [isPending, setIsPending] = useState(true);
     const [orderHistory, setOrderHistory] = useState([]);
    //useEffect for console.log
    useEffect(() => {
        console.log(orderHistory)
    }, [orderHistory]);
    //useEffect with no dependecy and onMount only
    //ensure that previously saved data are loaded prope rly or a preset data is provided if no saved info
    useEffect(() => {
        if(localStorage.getItem("savedAddressBank") === null) {
            localStorage.setItem("savedAddressBank", JSON.stringify(addressBank)); //just change addressBank to [] in useState to remove presets
        } else if(localStorage.getItem("savedAddressBank") !== null) {
            const retrievedAddressBankData = localStorage.getItem("savedAddressBank");
            const parsedAddressBankData = JSON.parse(retrievedAddressBankData);
            setAddressBank(parsedAddressBankData);
        }
    },[])

    //Simulation of isPending and checkout reset after checkout
    useDeepCompareEffect(() => {
        if (Object.keys(checkoutDetails).length === 0) return; // Prevents unnecessary execution
    
        const timeout = setTimeout(() => {
            setIsPending(false);
            setOrderHistory((prevHistory) => [...prevHistory, checkoutDetails]);
    
            setTimeout(() => {
                setCheckoutDetails({});
                setIsPending(true);
                console.log("Checkout details cleared");
            }, 45000); // 45 seconds after isPending is false
        }, 10000); // 10 seconds timeout for isPending
    
        return () => clearTimeout(timeout);
    }, [checkoutDetails]);

    const subtotalMemo = useMemo(() => {
        if (state.length === 0) return 0;
        return state.reduce((total, entry) => total + parseInt(entry.total), 0);
    }, [state]);

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
        setPaymentFieldSet((prevPaymentFieldSet) => 
            prevPaymentFieldSet.map((fieldEntry) => {
                fieldEntry.legend === "Address"
                    ? {...fieldEntry, inputs: addressFieldInputs}
                    : fieldEntry
            })
        )
    }, [addressFieldInputs])

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
        setPaymentFieldSet((prevPaymentFieldSet) => 
            prevPaymentFieldSet.map((fieldEntry) => {
                fieldEntry.legend === "Payment Option"
                ?  {...fieldEntry, inputs: paymentFieldInputs}
                : fieldEntry
            })
        )
    }, [paymentFieldInputs])
    
    useEffect(() => {
        setTransactionType(transactionTypes[transactionTypeCount]);
    }, [transactionTypeCount, transactionTypes]); 

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
                ? addressInfo[key] == e.target.value ? addressInfo : {...addressInfo, [key]: e.target.value}
                : addressInfo
            ))
        )
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
            prevAddressBank.filter((_, idx) => (
                idx !== parseInt(index)
            )
        ))
    }

    const saveAddressEntryEdit = (e) => {
        e.preventDefault();
        const currentFieldset = e.target.closest("fieldset")

        if(currentFieldset) {
            const inputs = currentFieldset.querySelectorAll("div input");
            console.log(inputs)     
            const noneIsBlank =  Array.from(inputs).every(input => input.value !== "" && input.value !== null && input.value !== undefined)

            if(noneIsBlank) {
                setAddressBank((prevAddressBank) =>  {
                    const updatedBank = prevAddressBank.map((addressInfo) => ({...addressInfo, ['editing']: false}))
        
                    localStorage.setItem("savedAddressBank", JSON.stringify(updatedBank));
        
                    return updatedBank;
                })
                    
                setAddressBankBackup([...addressBank]);
            } else {
                inputs.forEach(input => {
                    const {key, index} = input.dataset;
    
                    if(input.value === "" || input.value === null || input.value === undefined) {
                        alert(`Please provide ${key.charAt(0).toUpperCase() + key.slice(1)} of Address ${parseInt(index)+1} entry`)
                    }
                });
            }
        }
    }

    const cancelAddressEntryEdit = () => {
        setAddressBank((prevAddressBank) =>  prevAddressBank.map((addressInfo) => ({...addressInfo, ['editing']: false})))
        const retrievedAddressBankData = localStorage.getItem("savedAddressBank");
        const parsedAddressBankData = JSON.parse(retrievedAddressBankData) || addressBankBackup;
        setAddressBank(parsedAddressBankData);
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

    const checkedAddress = (e) => {
        const { index } = e.currentTarget.dataset;
        setAddressBank((prevAddressBank) =>
            prevAddressBank.map((addressInfo, addressInfoIndex) => {
                if (addressInfoIndex == index) {
                    return addressInfo.checked ? addressInfo : { ...addressInfo, checked: true }; 
                } else {
                    return addressInfo.checked ? { ...addressInfo, checked: false } : addressInfo;
                }
            })
        );
    }

    const checkedPaymentMethod = (e) => {
        const { index } = e.currentTarget.dataset;
        console.log(index)
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

    const checkout = (e) => {
        e.preventDefault();
        const checkedAddress = addressBank.find((address) => address.checked === true);
        const checkedPayment = paymentMethod.find((method) => method.checked === true);
        const currentCart = [...state];
        const currentTransactionType = transactionType;
        const currentSubtotal = subtotal;
        const currentDateAndTime = formatDate(Date.now())

        if(
            ((currentTransactionType === "Delivery" && checkedAddress) && checkedPayment && currentCart.length !== 0)
            ||((currentTransactionType !== "Delivery" && checkedAddress === undefined) && checkedPayment && currentCart.length !== 0)) {
            setCheckoutDetails({
                address: checkedAddress,
                payment: checkedPayment,
                cart: currentCart,
                transactionType: currentTransactionType,
                subtotal: currentSubtotal,
                dateAndTime: currentDateAndTime
            })
            alert("Thank you for your purchase!")
            dispatch({ type: "reset" })
            navigate("../dashboard/pending")
        } else if(currentCart.length === 0 || checkedAddress === undefined || checkedPayment === undefined) {
            currentCart.length === 0 
                ? alert("Please add items to cart first before checking out")
                : addressBank.length ===0
                    ? alert("Please provide atleast one address detail before checking out")
                    : (currentTransactionType === "Delivery" && checkedAddress === undefined) 
                        ? alert("Please select an address before checking out")
                        : checkedPayment === undefined
                            && alert("Please select a payment method before checking out")
        }
    }

    const deleteOrderHistoryEntry = (e) => {
        const {index} = e.currentTarget.dataset
        setOrderHistory((prevHistory) => prevHistory.filter((_, idx) => idx !== parseInt(index)))
    }

    const orderAgain = (e) => {
        const {index} = e.currentTarget.dataset
        if (state.length === 0) {
            dispatch({ type: "orderAgain" , currentCart: orderHistory[index]['cart']})
            navigate("../dashboard/cart")
        } else {
            //Can be improved into a modal in the future
            if (window.confirm("Current cart is not empty, confirming will replace all current cart items. Proceed?")) {
                console.log("Cart Items replaced!");
                dispatch({ type: "orderAgain" , currentCart: orderHistory[index]['cart']})
                navigate("../dashboard/cart")
            } else {
                console.log("Order again action and cart replacement canceled");
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
                    orderAgain
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