import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";



const Counter = () => {
    const [nmbr, setNmbr] = useState(0);

    const handleIncrease = () =>{
        setNmbr((prevNmbr) => prevNmbr +1);
    };

    const handleDecrease = () =>{
        if (nmbr > 0) {
            setNmbr((prevNmbr) => prevNmbr -1);
        }  
        };

    const handleReset = () =>{
        setNmbr(0);
    }

  return (
    <>
        <br/>
        <div className="container border border-success">
        <div className="d-flex justify-content-center">
            <h1>{nmbr}</h1>
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-danger"onClick={handleDecrease}>Decrease Number</button>
        <button className="btn btn-secondary" onClick={handleReset}>Reset Number</button>
        <button className="btn btn-primary" onClick={handleIncrease}>Increase Number</button>
        </div>
        <br/>
        </div>
        
    </>
  )
}

export default Counter