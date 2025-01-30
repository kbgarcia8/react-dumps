import { useState, useEffect, useContext } from 'react'
import { useTheme } from './context/ThemeProvider'
import axios from 'axios';
import styled from 'styled-components';
import { v } from './styles/variables'
import { palette, lightTheme, darkTheme } from './styles/theme'
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

const PrimaryButton = styled(GenericButton)`
  background-color: ${({theme}) => theme.backgroundColor1};
  color: ${({theme}) => theme.textColor3};
  border: 2px solid ${({theme}) => theme.borderColor2};
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
  color: ${({theme}) => theme.screenColor};
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

const PrimaryCancel1 = styled(GenericButton)`
  width: 5%;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  & .button-icon-and-text span {
    font-size: ${v.fontSize.small};
    font-weight: ${v.fontWeight.bold};
  }
`;

const PrimaryCancel2 = styled(PrimaryCancel1)`
  background-color: ${palette.primary2};
`;

const PrimaryCancel3 = styled(PrimaryCancel1)`
  background-color: ${palette.primary3};
`;

const SecondaryCancel1 = styled(PrimaryCancel1)`
  background-color: ${palette.secondary1};
`;

const SecondaryCancel2 = styled(SecondaryCancel1)`
  color: ${palette.neutral4};
`;

const SecondaryCancel3 = styled(PrimaryCancel1)`
  background-color: ${palette.secondary2};
  color: ${palette.neutral4};
`;

const NeutralCancel1 = styled(PrimaryCancel1)`
  background-color: ${palette.neutral1};
  color: ${palette.neutral4};
`;

const NeutralCancel2 = styled(NeutralCancel1)`
  background-color: ${palette.neutral3};
`;

const NeutralCancel3 = styled(NeutralCancel1)`
  background-color: ${palette.neutral4};
  color: ${palette.neutral1};
`;

const NeutralCancel4 = styled(NeutralCancel1)`
  color: ${palette.primary1};
`;

const NeutralCancel5 = styled(NeutralCancel1)`
  background-color: ${palette.accent};
  color: ${palette.primary1};
`;

const NeutralCancel6 = styled(NeutralCancel3)`
  color: ${palette.primary1};
`;

const RequiredText = styled.p`
  display: inline;
  font-size: ${v.fontSize.xsmall};
  font-weight: ${v.fontWeight.medium};
  color: ${({theme}) => theme.borderColor1};
`;

const InfoMessage = styled.p`
  font-size: ${v.fontSize.xsmall};
  font-weight: ${v.fontWeight.medium};
  font-style: italic;
`;

const StyledLabel = styled(GenericLabel)`
  font-size: ${v.fontSize.small};
  font-weight: ${v.fontWeight.bold};
`;

const InputWithText = styled(GenericInput)`
  margin: ${v.spacing.xsmall};
  width: 50%;
  position: relative;
  right: 25%;
  border: 2px solid ${({theme}) => theme.backgroundColor1};
  color: ${({theme}) => theme.backgroundColor1};
`;

const InputWithNoText = styled(InputWithText)`
  &::placeholder {
    color: ${({theme}) => theme.backgroundColor1};
    opacity: 0.5;
  }
`;

const DisabledInput = styled(InputWithText)`
  background-color: ${({theme}) => theme.borderColor2};
`;

const InputOnError = styled(InputWithText)`
  border: 2.5px solid ${({theme}) => theme.error};
`;

const ErrorMessage = styled(InfoMessage)`
  color: ${({theme}) => theme.error};
  font-weight: ${v.fontWeight.bold};
  font-size: ${v.fontSize.xsmall};
  font-style: normal;
  position: relative;
  right: 25%;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const RadioButton = styled(GenericInput)`
  appearance: none;
  cursor: pointer;
  position: relative;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border-radius: ${v.borderRadius.circle};
  border: ${v.borderThickness.medium} solid ${({theme}) => theme.borderColor1};
  outline: none;
  &:hover {
    background-color: ${({theme}) => theme.borderColor2};
  }
  &:checked {
    background-color: ${({theme}) => theme.backgroundColor2};
    border: ${v.borderThickness.medium} solid ${({theme}) => theme.backgroundColor1};
  }
  &:checked::after {
    content: "";
    position: absolute;
    transform: translateY(25%);
	  width: 10px;
	  height: 10px;
	  border-radius: 50%;
	  background: white;
  }
`;

const RadioLabel = styled(GenericLabel)`
  margin-left: ${v.spacing.small};
  font-size: ${v.fontSize.xsmall};
  color: ${({theme}) => theme.textColor1};
  font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
  font-weight: ${v.fontWeight.bold};
`;

const SimpleDropdown = styled.select`
  width: 25%;
  padding: ${v.spacing.xsmall};
  margin: ${v.spacing.small};
  border: 2px solid ${({theme}) => theme.backgroundColor1};
  font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
  font-weight: ${v.fontWeight.medium};

  & option:hover {
    appearance: none;
    background-color: red;
    color: ${({theme}) => theme.screenColor};
  }
  `;

function App() {
  const {theme, toggleTheme} = useTheme()
  const [pastries, setPastries] = useState([])
  const {useMediaQuery} = useContext(Context)
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
                <PrimaryCancel1 text='X'/>
                <PrimaryCancel2 text='X'/>
                <PrimaryCancel3 text='X'/>                
            </div>
            <div className="icon-buttons">
                <SecondaryCancel1 text='X'/>
                <SecondaryCancel2 text='X'/>
                <SecondaryCancel3 text='X'/>
            </div>
            <div className="icon-buttons">
                <NeutralCancel1 text='X'/>
                <NeutralCancel2 text='X'/>
                <NeutralCancel3 text='X'/>
            </div>
            <div className="icon-buttons">
                <NeutralCancel4 text='X'/>
                <NeutralCancel5 text='X'/>
                <NeutralCancel6 text='X'/>
            </div>
            <div className="info-messages-and-labels">
              <StyledLabel textLabel={'Password'}/>
              <RequiredText className="required-field">* Required Fields</RequiredText>
              <InfoMessage>Password must contain atleast 1 of each: A-Z, a-z , 0-9 and a special character</InfoMessage>
            </div>
            <div className="input-styles">
              <InputWithText value={"Test Component"}/>
              <InputWithNoText value={""} placeholderText={"Placeholder Only"}/>
              <DisabledInput/>
              <InputOnError/>
              <ErrorMessage>Your Password is incorrect for specified Username</ErrorMessage>
            </div>
            {/*Convert this into form if submit button is needed*/}
            <div className="div-grouped-radio-buttons">
              <RadioButtonContainer>
                <RadioButton type='radio' name='radio1' id='radio1' value='Option1'/>
                <RadioLabel htmlFor={'radio1'} textLabel='Option 1'/>
              </RadioButtonContainer>
              <RadioButtonContainer>
                <RadioButton type='radio' name='radio2' value='Option 2'/>
                <RadioLabel htmlFor={'radio2'} textLabel='Option 2'/>
              </RadioButtonContainer>
              <RadioButtonContainer>
                <RadioButton type='radio' name='radio3' value='Option 3'/>
                <RadioLabel htmlFor={'radio3'} textLabel='Option 3'/>
              </RadioButtonContainer>
            </div>
            <div className="dropdown-space">
              <GenericLabel htmlFor={'simple-dropdown'} textLabel='Simple Dropdown'/>
                <SimpleDropdown id='simple-dropdown'>
                  <option value="fruit">Fruit</option>
                  <option value="vegetable">Vegetable</option>
                  <option value="meat">Meat</option>
                </SimpleDropdown>
                <GenericLabel htmlFor={'simple-dropdown'} textLabel='Customizable Dropdown'/>                             
            </div>
            <div className="divider-space">
              <Divider dividerText={'Divider'}/>
            </div>
            <div className="productcard-space">
              <ProductCard
                productImage={'https://greatfood.ie/wp-content/uploads/2024/08/a-beautifully-presented-tarte-tatin-on-a-rustic-wo-YSDGksR2TmeixgDiHnjwog-LrjC_1BHSU21_qbCJEZc3w.png'}
                productTitle={'Tarte Tatin'}
                productDescription={'Dark and sticky caramel, sweet apples and crisp pastry combine to make this heavenly French dessert.'}
                prices={prices}
              />
              <ProductCard
                productImage={'https://fhahoreca.com/wp-content/uploads/2023/08/Two-croissants-on-a-platter.jpg'}
                productTitle={'Croissant'}
                productDescription={'A laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture.'}
                prices={prices}
                isDarkCard
              />
            </div>
            <div className="stepper-space">
              <Stepper
                count={count}
                increment={incrementCount}
                decrement={decrementCount}
              />
            </div>
            <div className="warn-and-info-cards">
              <div className="error"></div>
              <div className="warning"></div>
              <div className="success"></div>
            </div>
          </div>
        </ComponentTester>
    </>
  )
}

export default App
