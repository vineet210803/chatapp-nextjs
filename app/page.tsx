"use client";
import Chatform from "@/components/Chatform";
import ChatMessage from "@/components/ChatMessage";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [userName, setUserName] = useState("");

  const handleJoinRoom = () => {
    if (!userName.trim() || !room.trim()) {
      alert("Please enter both username and room name");
      return;
    }
    setJoined(true);
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    const newMessage = { sender: userName, message };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex mt-24 justify-center w-full">
      {!joined ? (

        
        <div className="flex w-full max-w-3xl mx-auto flex-col items-center">
          

          <h1 className="mb-4 text-2xl font-bold">Enter Username and Room Name to Join a Room</h1>

          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
          />

          <input
            type="text"
            placeholder="Enter room name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="w-64 px-4 py-2 mb-4 border-2 rounded-lg"
          />

          <button
            onClick={handleJoinRoom}
            className="px-4 py-2 text-white bg-black"
          >
            Join Room
          </button>

          
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="mb-4 text-2xl font-bold">Room: {room}</h1>

          <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 rounded-lg">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                message={msg.message}
                isOwnMessage={msg.sender === userName}
              />
            ))}
          </div>

          <Chatform onSendMessage={handleSendMessage} />
        </div>
      )}
    </div>
  );
}
