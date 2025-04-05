import { useState, useEffect, useContext } from 'react'
import { useTheme } from './context/ThemeContext'
import axios from 'axios';
import styled from 'styled-components';
import { v } from './styles/variables'
import { palette, lightTheme, darkTheme } from './styles/theme'
import {useGlobal} from './context/GlobalContext';
import ComponentTester from './utils/ComponentTester';
import GenericButton from './components/atoms/Button';
import GenericLabel from './components/atoms/Label';
import GenericInput from './components/atoms/Input';
import GenericTextArea from './components/atoms/TextArea';
import Icon from './components/atoms/Icon';
import Divider from './components/atoms/Divider';
import GenericForm from './components/molecules/Form';
import ProductCard from './components/molecules/ProductCard';
import Stepper from './components/molecules/Stepper';
import NotificationCard from './components/molecules/NotificationCard';
import MobileLayout from './components/layout/MobileLayout';

function App() {
  const {theme, toggleTheme} = useTheme()
  const [pastries, setPastries] = useState([])
  const {useMediaQuery} = useGlobal();
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1)
  }

  useEffect(() => {
    axios.get('http://localhost:8000/pasta')
  .then(response => {
    setPastries(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }, []);

  const FormInputs = [
    {
      labelText: "Name",
      id: "name",
      placeholderText: "Enter your name",
      onChange: () => {},
      value: "",
      type: "text",
      isRequired: true,
      dataKey: "",
      dataIndex: 0
    }, {
      labelText: "Email",
      id: "email",
      placeholderText: "Enter your email",
      onChange: () => {},
      value: "",
      type: "email",
      isRequired: true,
      dataKey: "",
      dataIndex: 1
    }, {
      labelText: "Message",
      id: "message",
      placeholderText: "Enter your message",
      onChange: () => {},
      value: "",
      type: "text",
      isRequired: true,
      dataKey: "",
      dataIndex: 2
    }
]

const prices = {
  "Solo": 160,
  "Share": 220
}

  return (
    <>
        
    </>
  )
}

export default App
