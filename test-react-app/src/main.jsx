import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {Greeting} from "./Greeting.jsx";
import {Convert} from "./Convert.jsx";
import {ListApp} from "./List.jsx"
import {Keys} from "./Keys.jsx"
import {Props} from "./Props.jsx"
import {State, Gallery, Form} from "./State.jsx"
import { Clock } from "./Clock.jsx"
import ClassInput from './ClassComponent.jsx';
import './index.css'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <Convert />
    <ListApp />
    <Keys />
    <Props />
    <State />
    <Gallery />
    <Form />
    <Clock />
  </StrictMode>,
)*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassInput />
  </StrictMode>,
)