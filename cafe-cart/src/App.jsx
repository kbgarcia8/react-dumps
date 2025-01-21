import { useState, useEffect, useContext } from 'react'
import { useTheme } from './context/ThemeProvider'
import axios from 'axios';
import styled from 'styled-components';
import { v } from './styles/variables'
import Context from './context/ContextProvider';
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
import MobileLayout from './components/layout/MobileLayout';

const ToggleButton = styled(GenericButton)`
  background-color: gray;
`;

function App() {
  const {theme, toggleTheme} = useTheme()
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
  "solo": 160,
  "share": 220
}

const PrimaryButton = styled(GenericButton)`
  background-color: ${({theme}) => theme.backgroundColor1};
  color: ${({theme}) => theme.textColor2};
  border: 2px solid ${({theme}) => theme.textColor2};
  width: 30%;
  border-radius: ${v.spacing.xxsmall};
`;

const PrimaryButtonHover = styled(PrimaryButton)`
  background-color: ${({theme}) => theme.backgroundColor2};
`;

const PrimaryButtonDisabled = styled(PrimaryButton)`
  background-color: ${({theme}) => theme.textColor3};
  color: ${({theme}) => theme.borderColor2};
  border: 2px solid ${({theme}) => theme.borderColor2};
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: ${({theme}) => theme.backgroundColor3};
  color: ${({theme}) => theme.textColor1};
  border: 2px solid ${({theme}) => theme.textColor1};
`;

const SecondaryButtonHover = styled(SecondaryButton)`
  background-color: ${({theme}) => theme.backgroundColor4};
`;

const SecondaryButtonDisabled = styled(PrimaryButtonDisabled)``;

const FlatButton = styled(PrimaryButton)`
  background-color: transparent;
  color: ${({theme}) => theme.backgroundColor1};
  border: none;
  `
const FlatButtonHover = styled(FlatButton)`
  background-color: ${({theme}) => theme.borderColor2};
  border: 2px solid ${({theme}) => theme.backgroundColor1};
`;

const FlatButtonDisabled = styled(PrimaryButtonDisabled)`
  background-color: transparent;
  color: ${({theme}) => theme.borderColor2};
  border: none;
`;

const GhostButton = styled(PrimaryButton)`
  background-color: transparent;
  color: ${({theme}) => theme.backgroundColor1};
  border: 2px solid ${({theme}) => theme.backgroundColor1};
`;

const GhostButtonHover = styled(PrimaryButtonHover)``;

const GhostButtonDisabled = styled(FlatButtonDisabled)`
  color: ${({theme}) => theme.borderColor2};
  border: 2px solid ${({theme}) => theme.borderColor2};
`;

  return (
    <>
        <ComponentTester>
          <div className="toggle-button-container">
            <ToggleButton
              text={'Toggle Theme'}
              onClick={toggleTheme}
            />
          </div>
          <div className="design-system-card">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>This is a test to show paragraph normal text preview</p>
            <p className='bold-text'><b>This is a test to show paragraph bold text preview</b></p>
            <p className='bolder-text'>This is a test to show paragraph bolder text preview</p>
            <p className='italic-text'><em>This is a test to show paragraph italic text preview</em></p>
            <p className='italic-bold'><b><em>This is a test to show paragraph italic bold text preview</em></b></p>
            <div className="button-entry">
              <PrimaryButton text='Primary Button'/>
              <PrimaryButtonHover text='Primary Hover' />
              <PrimaryButtonHover text='Primary Active'/>
              <PrimaryButtonDisabled text='Primary Disable'/>
            </div>
            <div className="button-entry">
              <SecondaryButton text='Secondary Button'/>
              <SecondaryButtonHover text='Secondary Hover'/>
              <SecondaryButtonHover text='Secondary Active'/>
              <SecondaryButtonDisabled text='Secondary Disable'/>
            </div>
            <div className="button-entry">
              <FlatButton text='Flat Button'/>
              <FlatButtonHover text='Flat Hover'/>
              <FlatButtonHover text='Flat Active'/>
              <FlatButtonDisabled text='Flat Disable'/>
            </div>
            <div className="button-entry">
              <GhostButton text='Ghost Button'/>
              <GhostButtonHover text='Ghost Hover'/>
              <GhostButtonHover text='Ghost Active'/>
              <GhostButtonDisabled text='Ghost Disable'/>
            </div>
            <div className="icon-buttons">

            </div>
            {/*<GenericInput/>*/}
            {/*<ProductCard/>*/}
            
          </div>
        </ComponentTester>
    </>
  )
}

export default App
