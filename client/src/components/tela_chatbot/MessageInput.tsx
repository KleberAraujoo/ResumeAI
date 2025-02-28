'use client'
import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSendMessage: () => void;
  handleSendFile: () => void;
    activeFile: number | null;
  files: { name: string; id: number }[];
  className?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ message, setMessage, handleKeyPress, handleSendMessage, handleSendFile, activeFile, files, className }) => {
  const [error, setError] = useState<string | null>(null);
  const [placeholder, setPlaceholder] = useState<string>("Digite sua mensagem...");

  useEffect(() => {
    if (activeFile !== null) {
      const activeFileName = files.find(file => file.id === activeFile)?.name;
      if (activeFileName) {
        setPlaceholder(`Resuma/Analise o arquivo ${activeFileName} para mim.`);
      } else {
        setPlaceholder("Digite sua mensagem...");
      }
    }
  }, [activeFile, files]);

  const validateAndSend = () => {
    if (message.trim() === '') { 
      setError('Por favor, digite uma mensagem ou envie um arquivo.'); 
    } else {
      setError(null); 
      handleSendMessage(); 
    }
  };

  const handleSend = () => {
    if (message.trim() === '') {
      handleSendFile();
    } else {
      validateAndSend();
    }
  };

  return (
    <div className={`${className} flex flex-col space-y-2`}>
      <div className="flex items-center space-x-4">
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError(null); 
          }}
          onKeyDown={handleKeyPress}
          className="w-full p-2 rounded bg-white text-black outline-none focus:ring-0 resize-none"
          placeholder={placeholder}
          style={{ height: '100px' }}
        />
        <button
          onClick={handleSend}
          className="w-12 h-12 bg-gradient-to-r from-[#004BD4] via-[#5331CF] via-[#7726CD] to-[#A219CA] text-white rounded-full transition-all flex items-center justify-center"
          style={{ width: '48px', height: '48px' }}
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
      {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
    </div>
  );
};

export default MessageInput;
