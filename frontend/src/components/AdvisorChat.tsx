import { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { Message } from '../types';

const AdvisorChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your portfolio advisor. How can I help you today?",
      sender: 'advisor',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const starterQuestions = [
    "How's my portfolio performing?",
    "Am I too concentrated in tech?",
    "Suggest hedging strategies"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');

    setTimeout(() => {
      const advisorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Based on your portfolio, you're well-diversified with strong positions in technology. Your 5.2% gain reflects solid performance, and your tech allocation at 73.8% is aggressive but suitable for growth-focused investors.",
        sender: 'advisor',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, advisorMessage]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-[calc(100vh-8rem)] sticky top-24">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-6 h-6 text-[#00C853]" />
        <h2 className="text-xl font-semibold text-black">Your Portfolio Advisor</h2>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-lg ${
                message.sender === 'advisor'
                  ? 'bg-[#A5D6A7] text-black'
                  : 'bg-gray-100 text-black'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {starterQuestions.map((question) => (
            <button
              key={question}
              onClick={() => handleQuestionClick(question)}
              className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs rounded-full transition-colors"
            >
              {question}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C853] focus:border-transparent"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#00C853] text-white rounded-lg hover:bg-[#00B347] transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvisorChat;
