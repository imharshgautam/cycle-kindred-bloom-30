
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Luna, your menstrual health assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('period') || message.includes('menstrual')) {
      return "I can help you track your period and understand your cycle better. Would you like to know about cycle phases or tracking tips?";
    } else if (message.includes('pain') || message.includes('cramp')) {
      return "Period pain is common. Heat therapy, gentle exercise, and proper nutrition can help. If pain is severe, consider consulting a healthcare provider.";
    } else if (message.includes('track') || message.includes('calendar')) {
      return "Our period tracker can help you monitor your cycle, symptoms, and patterns. You can access it from the main navigation menu.";
    } else if (message.includes('product') || message.includes('shop')) {
      return "We offer a range of period products including organic pads, menstrual cups, and period underwear. Check out our shop section for more details.";
    } else if (message.includes('hello') || message.includes('hi')) {
      return "Hello! I'm here to help with any questions about menstrual health, cycle tracking, or our services. What would you like to know?";
    } else {
      return "That's a great question! For detailed medical advice, I recommend consulting with a healthcare provider. Is there anything specific about menstrual health or our services I can help you with?";
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-brand-pink to-brand-lavender hover:from-brand-lavender hover:to-brand-pink transform hover:scale-110 z-50 animate-pulse-gentle"
        size="icon"
      >
        <div className="relative">
          <MessageCircle className="h-7 w-7 text-white" />
          <Sparkles className="h-3 w-3 text-white absolute -top-1 -right-1 animate-pulse" />
        </div>
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-gradient-to-br from-white via-brand-lavender/5 to-brand-pink/5 rounded-2xl shadow-2xl border-0 z-50 flex flex-col animate-fade-in backdrop-blur-sm overflow-hidden">
      {/* Enhanced Header with gradient */}
      <div className="flex items-center justify-between p-5 border-b-0 bg-gradient-to-r from-brand-pink to-brand-lavender rounded-t-2xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-4 w-8 h-8 bg-white rounded-full"></div>
          <div className="absolute bottom-3 right-6 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute top-1/2 right-12 w-2 h-2 bg-white rounded-full"></div>
        </div>
        
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="font-semibold text-white text-lg">Luna</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-xs">Online</span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          size="icon"
          className="h-10 w-10 text-white hover:bg-white/20 rounded-full transition-all duration-200 relative z-10"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Enhanced Messages Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-transparent to-brand-mint/5">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 bg-gradient-to-br from-brand-pink to-brand-lavender rounded-full flex items-center justify-center mr-3 shadow-lg">
                <Bot className="h-4 w-4 text-white" />
              </div>
            )}
            <div
              className={`max-w-[75%] p-4 rounded-2xl text-sm shadow-lg transition-all duration-200 hover:shadow-xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-brand-teal to-brand-mint text-white rounded-br-md ml-8'
                  : 'bg-white text-gray-800 rounded-bl-md border border-gray-100'
              }`}
            >
              {message.text}
              <div className={`text-xs mt-2 opacity-70 ${message.sender === 'user' ? 'text-white/80' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 bg-gradient-to-br from-brand-teal to-brand-mint rounded-full flex items-center justify-center ml-3 shadow-lg">
                <span className="text-white text-xs font-bold">You</span>
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-pink to-brand-lavender rounded-full flex items-center justify-center mr-3 shadow-lg">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-2xl rounded-bl-md text-sm shadow-lg border border-gray-100">
              <div className="flex space-x-2 items-center">
                <span className="text-gray-500">Luna is typing</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-brand-pink rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-lavender rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-brand-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Enhanced Input Area */}
      <div className="p-5 border-t-0 bg-gradient-to-r from-brand-lavender/10 to-brand-pink/10 rounded-b-2xl">
        <div className="flex gap-3 items-end">
          <div className="flex-1 relative">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="pr-12 h-12 border-2 border-brand-lavender/20 rounded-xl bg-white/80 backdrop-blur-sm focus:border-brand-pink focus:ring-brand-pink/20 transition-all duration-200"
              disabled={isTyping}
            />
            {inputValue && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <Sparkles className="h-4 w-4 text-brand-pink animate-pulse" />
              </div>
            )}
          </div>
          <Button
            onClick={sendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-pink to-brand-lavender hover:from-brand-lavender hover:to-brand-pink disabled:opacity-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            size="icon"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="text-center mt-2">
          <span className="text-xs text-gray-500">Powered by Luna AI ✨</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingChatbot;
