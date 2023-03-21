import { Button } from 'react-bootstrap';
import './style.css';


export const TestButton = ({buttonname}) => {
    return (
        <div className= "TestButton">
      <Button>{buttonname}</Button>
    </div>
        );
}

export const PrimaryButton = () => {
    return (
        <div className= "PrimaryButton">
      <Button variant = "Primary"> Primary </Button>{' '}
    </div>
        );
}

