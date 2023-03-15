import { useState } from "react";
import './Index.css';
import getData from "./api";
import AdviceSlip from "./components/AdviceSlip";
import Button from "./components/Button";

function App(){
    const [advice,setAdvice] = useState({});
    const handleChange = async () => {
        const result = await getData();
        setAdvice(result);
    };
    return (
    <div className="mainContainer">
        <AdviceSlip adviceID={advice.id} advice={advice.advice} />
        <Button onPress={handleChange}/>
    </div>);
}
export default App;