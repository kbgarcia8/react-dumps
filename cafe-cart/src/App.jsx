import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import Context from './context/ContextProvider';
import ComponentTester from './utils/ComponentTester';
import GenericButton from './components/atoms/Button';
import GenericLabel from './components/atoms/Label';
import GenericInput from './components/atoms/Input';
import GenericTextArea from './components/atoms/TextArea';
import Icon from './components/atoms/Icon';
import Divider from './components/atoms/Divider';
import GenericForm from './components/molecules/Form';
import MobileLayout from './components/layout/MobileLayout';

function App() {
  const [pastries, setPastries] = useState([])
  const {useMediaQuery} = useContext(Context)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    axios.get('http://localhost:8000/pasta')
  .then(response => {
    setPastries(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }, []);

  return (
    <>
        <ComponentTester>
          <GenericForm/>
        </ComponentTester>
    </>
  )
}

export default App
