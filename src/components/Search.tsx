
import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';

export const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form 
        onSubmit={handleSearch}
        className={cn(
          "relative flex items-center transition-all duration-300",
          isFocused ? "scale-105" : "scale-100"
        )}
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
            placeholder="Search your second brain..."
            className="w-full bg-transparent border-none outline-none focus:outline-none text-foreground"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </form>
      
      <AnimatedTransition
        show={showResults}
        animation="fade"
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
                  Related to your search on {searchQuery}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 glass-panel rounded-xl">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">AI Assistant</h3>
          <div className="p-3 bg-primary/5 rounded-lg">
            <p className="text-sm">
              Based on your search for "<span className="font-medium">{searchQuery}</span>", 
              I found several relevant notes in your second brain. Would you like me to 
              summarize the key insights?
            </p>
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default Search;
