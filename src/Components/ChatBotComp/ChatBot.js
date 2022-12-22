import React, { useState } from "react";
import "./index.css";
import botImage from "./Assets/bot-image.jpg";
import { FaDotCircle } from "react-icons/fa";
import {MdSend} from "react-icons/md";

const chatData = [
  {
    id: "1",
    user: "bot",
    text: "Hello There, How can i help you?",
  },
  {
    id: "2",
    user: "user",
    text: "I would like to talk to the customer care executive",
  },
  {
    id: "3",
    user: "bot",
    text: "Kindly contact +91 ********** to talk to customer care",
  },
  {
    id: "4",
    user: "user",
    text: "Thank you so much",
  },
  {
    id: "5",
    user: "bot",
    text: "would you like to know anything else",
  },
];

const botText = (item) => {
  return <p className="bot-message" key={item.id}>{item.text}</p>;
};
const userText = (item) => {
  return <p className="user-message"  key={item.id}>{item.text}</p>;
};

function ChatBot() {
  const [chat, setChat] = useState(chatData);
  const [textInput, setUserText] = useState("");

  const handleChangeText = (e) => {
    setUserText(e.target.value);
  }

  const handleSubmit = () =>{

   let newChat = [...chat,{
        id:"20",
        user : "user",
        text : textInput,
    }];
    setChat(newChat);
    console.log(newChat)
  }

  let chatConvo = chat.map((item) => {
    if(item.user === "bot"){
        return botText(item)
    }else{
        return userText(item);
    }
  });

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <img src={botImage} alt="botImage" className="bot-image" />
        <div>
          <p className="chatbot-title">Chat Bot</p>
          <div className="status-block">
            <FaDotCircle size={12} color="green" />
            <p className="online-status">Online</p>
          </div>
        </div>
      </div>
      <div className="chatbot-text-area">
        {chatConvo}
      </div>
      <div className="chatbot-footer">
        <input type="text" value={textInput} placeholder="Type your question here" className="chatbot-input-box" onChange={(e)=>handleChangeText(e)}/>
        {/* <button className="chatbot-submit-button" onClick={handleSubmit}>Submit</button> */}
        <MdSend className="chat-bot-submit-icon" />
      </div>
    </div>
  );
}

export default ChatBot;
