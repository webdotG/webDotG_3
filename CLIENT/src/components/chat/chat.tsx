import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface Message {
  id: number;
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:4000'); // Замените URL на свой сервер Socket.IO
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Отключение от сокета при размонтировании компонента
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('chat message', (message: Message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.off('chat message');
    };
  }, [socket]);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() !== '' && socket) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage.trim(),
      };
      socket.emit('chat message', newMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="chat">
      <div className="chat-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Chat;
