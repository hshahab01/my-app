import './App.css';
import {Button, Container} from 'react-bootstrap'
import { PrimaryButton, TestButton } from './Components/Buttons';
import { FormExample } from './Components/Forms';
import CardExample from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Container>
      React App demo
      <TestButton buttonname = {"Login"}/>
      <TestButton buttonname = {"Sign up"}/>
      <PrimaryButton></PrimaryButton>
      <FormExample></FormExample>
      <CardExample></CardExample>
      </Container>
      
    </div>
  );
}

export default App;
