import React, { useEffect, useState } from "react";



 const ClicksCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isButtonDisable,setisButtonDisable] = useState<boolean>(true)
  const [status,setstatus] = useState<string>('stop')

 useEffect(() => {
  console.log(`Count updated to ${count}`);
  isButtonDisable? setstatus('start') : setstatus('stop') 
  }, [count ,isButtonDisable]);
   

 return (
   <div className="continer">
    <div className="status">
      <p className="text-status">stop clicked Button</p>
      <button className="button-status" onClick={() => setisButtonDisable(!isButtonDisable)}>
      Click me to {status}
      </button>
    </div>
     <div className="counter">
      <p className="text-counter">You clicked {count} times</p>
      <button className="button-counter" onClick={() => !isButtonDisable && setCount(count + 1)}>Click me</button>
    </div>
   </div>
 );
};

export default ClicksCounter