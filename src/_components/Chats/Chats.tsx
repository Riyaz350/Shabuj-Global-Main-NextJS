'use client'
import React, { useState } from 'react';
import ChatBot from './chatbot/ChatBot';
import WhatsappChat from './WhatsApp/WhatsApp';
import { IoChatboxOutline } from "react-icons/io5";

const Chats = () => {
    const [chatHover, setChatHover] = useState<boolean>(false)
    const [showChat, setShowChat] = useState<boolean>(false);
    return (
        <div className={`cursor-pointer   fixed -bottom-40 -right-40 z-50 ${chatHover? 'w-[300px] h-[300px]':'w-[250px] h-[250px]'} rounded-full' `} onMouseEnter={()=>setChatHover(true)} onMouseLeave={()=>setChatHover(false)}>
            <div className={`${showChat? 'hidden': 'flex'} text-xl w-12 h-12 text-center fixed bottom-10 right-10 z-50 items-center text-white border-2 border-white rounded-full  p-3 bg-black  `}>
                <IoChatboxOutline />
            </div>
            <ChatBot chatHover={chatHover} showChat={showChat} setShowChat={setShowChat}/>
            <WhatsappChat chatHover={chatHover}/>
        </div>
    );
};

export default Chats;