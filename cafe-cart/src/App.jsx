import { useState, useEffect, useContext } from 'react'
import './App.css'
import axios from 'axios';
import Context from './context/ContextProvider';
import ComponentTester from './utils/ComponentTester';
import GenericButton from './components/atoms/Button';
import GenericInput from './components/atoms/Input';
import GenericTextArea from './components/atoms/TextArea';

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
      <div>
        {pastries.map((pastry) => (
          <div key={pastry.pastaId}>{pastry.pastaName}</div>
        ))}
      </div>
      <div>
        <ComponentTester>
          <GenericButton 
            buttonType={"button"}
            processClick={() => console.log("Button clicked")}
            text={"Click me!"}
          />
          <GenericInput
            labelText={"Input"}
            id={"input"}
            placeholderText={"Type something here"}
            onChange={(e) => console.log(e.target.value)}
            value={""}
            type={"text"}
            isRequired={true}
            dataKey={"key"}
            dataIndex={0}
          />
          <GenericTextArea
            labelText={"TextArea"}
            id={"textarea"}
            placeholderText={"Type something here"}
            onChange={(e) => console.log(e.target.value)}
            value={""}
            isRequired={true}
            dataKey={"key"}
            dataIndex={0}
          />
        </ComponentTester>
      </div>
    </>
  )
}

export default App
