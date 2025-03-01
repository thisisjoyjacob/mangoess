
import React, { useState } from 'react';
import { Search as SearchIcon, SendIcon, User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';
import { Button } from './ui/button';

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [messages, setMessages] = useState<{type: 'user' | 'assistant', content: string}[]>([]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add user message
      setMessages([...messages, {type: 'user', content: searchQuery}]);
      
      // Add AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'assistant', 
          content: `Based on your search for "${searchQuery}", I found several relevant notes in your second brain. Would you like me to summarize the key insights?`
        }]);
      }, 500);
      
      setShowResults(true);
      setSearchQuery('');
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col h-[70vh]">
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto mb-4 rounded-lg glass-panel p-4">
        <AnimatedTransition
          show={messages.length > 0}
          animation="fade"
          className="space-y-4"
        >
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Start a conversation with your digital second brain
              </p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div 
                key={index}
                className={cn(
                  "flex gap-3 p-3 rounded-lg",
                  message.type === 'user' 
                    ? "bg-primary/10 ml-auto max-w-[80%]" 
                    : "bg-secondary/10 mr-auto max-w-[80%]"
                )}
              >
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  message.type === 'user' ? "bg-primary/20" : "bg-secondary/20"
                )}>
                  {message.type === 'user' ? (
                    <User size={16} className="text-primary" />
                  ) : (
                    <Bot size={16} className="text-secondary" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))
          )}
        </AnimatedTransition>
        
        <AnimatedTransition
          show={showResults && messages.length > 0}
          animation="slide-up"
          className="mt-6 space-y-4"
        >
          <div className="p-4 glass-panel rounded-xl space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Suggested Results</h3>
            <div className="space-y-3">
              {['Artificial Intelligence', 'Machine Learning', 'Neural Networks'].map((result, index) => (
                <div 
                  key={index}
                  className="p-3 hover:bg-primary/5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <h4 className="font-medium">{result}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Related to your search query
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedTransition>
      </div>
      
      {/* Input area */}
      <form 
        onSubmit={handleSearch}
        className="relative"
      >
        <div className={cn(
          "w-full glass-panel flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300",
          isFocused ? "ring-2 ring-primary/30" : ""
        )}>
          <SearchIcon 
            size={20} 
            className={cn(
              "text-muted-foreground transition-all duration-300",
              isFocused ? "text-primary" : ""
            )} 
          />
          <input
            type="text"
            placeholder="Ask your second brain anything..."
            className="w-full bg-transparent border-none outline-none focus:outline-none text-foreground"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <Button 
            type="submit"
            size="icon"
            variant="ghost"
            className={cn(
              "text-muted-foreground transition-all duration-300",
              searchQuery.trim() ? "opacity-100" : "opacity-50",
              isFocused && searchQuery.trim() ? "text-primary" : ""
            )}
            disabled={!searchQuery.trim()}
          >
            <SendIcon size={18} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
