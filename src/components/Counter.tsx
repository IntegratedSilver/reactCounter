import "bootstrap/dist/css/bootstrap-utilities.min.css"
import { useState } from "react";



const Counter = () => {
    const [number, setNumber] = useState("0");

    const handleIncrease = () =>{
        setNumber((prevCount) => prevCount +1);
    };

    const handleDecrease = ()

    const handleResetClick = () =>{
        setNumber("0");
        console.log(number)
    }

  return (
    <>
        <div>
            <h1>{number}</h1>
        </div>
        <div>
        <button onClick={handleResetClick}>Reset Number</button>
        </div>
    </>
  )
}

export default Counter