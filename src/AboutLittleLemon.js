import React, {useState} from "react";

const AboutLittleLemon = () => {

    const [count, setCount] = useState(0);

    function handlePlusOne(){
        setCount(count + 1);
    }

    function handleMinusOne(){
        setCount(count - 1);
    }

    function handleReset(){
        setCount(0);
    }
    return(
        <div className="about-page">
            <h1>AboutLittleLemon Page</h1>

            <h3>{count}</h3>

            <button onClick={handlePlusOne}>Plus</button>
            <button onClick={handleMinusOne}>Minus</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default AboutLittleLemon;