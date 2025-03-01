
import React from 'react';
import Search from '@/components/Search';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const SearchPage = () => {
  const showContent = useAnimateIn(false, 300);
  
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Universal Search</h1>
          <p className="text-muted-foreground mt-2">
            Find anything in your second brain with AI-powered search
          </p>
        </div>
        
        <div className="mt-6">
          <Search />
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default SearchPage;
