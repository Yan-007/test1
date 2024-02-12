import React, {useState} from "react";
import "./App.css";

function App() {
  const [clicks1, setClicks1] = useState(0);
  const [clicks2, setClicks2] = useState(0);
  return (
    <div className="App">
       <div class="chat-notification">
      <div class="chat-notification-logo-wrapper">
        <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
      </div>
      <div class="chat-notification-content">
        <h4 class="chat-notification-title">ChitChat</h4>
        <p class="chat-notification-message">У вас новое сообщение!</p>
      </div>
    </div>
      <div>
      <div>
          <button className="m-5" onClick={()=>{setClicks1(clicks1 + 1)}}>+</button>
          <button className="" onClick={()=>{setClicks1(clicks1 - 1)}}>-</button>
          <button className="" onClick={()=>{setClicks1(0)}}>0</button>
          <button className="" onClick={()=>{setClicks1(clicks1 * 10)}}>x10</button>
          <button className="" onClick={()=>{setClicks1(clicks1 / 10)}}>/10</button>
          <p>
            {clicks1}
          </p>
        </div>
        <div>
          <button onClick={()=>{setClicks2(clicks2 + 1)}}>+</button>
          <button onClick={()=>{setClicks2(clicks2 - 1)}}>-</button>
          <button onClick={()=>{setClicks2(0)}}>0</button>
          <button onClick={()=>{setClicks2(clicks2 * 10)}}>x10</button>
          <button onClick={()=>{setClicks2(clicks2 / 10)}}>/10</button>
          <p>
            {clicks2}
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
