import React, { useEffect, useState } from "react";


const Level = (props) => {
  const { sentence, setLevel,GIVENTIME } = props;
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setCount(0);
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    const timeOut = setTimeout(() => {
      clearInterval(timer);
    }, GIVENTIME * 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeOut);
    };
  }, [sentence]);

  const compareInput = () => {
    console.log(inputValue, sentence);
    if (inputValue === sentence) {
      console.log(`successfull`);
      setLevel((prev) => prev + 1);
    } else {
      console.log(`unsuccessfull attempt`);
    }
  };

  return (
    <>
      {sentence}
      <br />
      {count}
      <div>
        <input
          disabled={count === GIVENTIME}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      {inputValue.length} / {sentence.length}
      <br />
      <br />
      {(inputValue.length === sentence.length || count === GIVENTIME ) && <button onClick={compareInput}> Submit </button>}
      <br />
      
      <br />
      <button onClick={() => window.location.reload()}> Restart Test </button>
    </>
  );
};

export default Level;
