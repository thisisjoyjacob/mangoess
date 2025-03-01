
import { useState, useEffect } from 'react';
import Visualization from '@/components/Visualization';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { Brain } from 'lucide-react';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const showTitle = useAnimateIn(false, 300);
  const showSubtitle = useAnimateIn(false, 600);
  const showVisualization = useAnimateIn(false, 900);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin-slow w-12 h-12 text-primary">
          <Brain size={48} />
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <div className="min-h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <AnimatedTransition 
            show={showTitle} 
            animation="slide-down"
            className="inline-block"
          >
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Brain size={16} className="mr-2" />
              Digital Second Brain
            </div>
          </AnimatedTransition>
          
          <AnimatedTransition show={showTitle} animation="slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              Your Mind, Extended
            </h1>
          </AnimatedTransition>
          
          <AnimatedTransition show={showSubtitle} animation="fade">
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-balance">
              An AI-powered knowledge repository designed as a seamless extension of your mind—intelligent, 
              searchable, interconnected, and visually engaging.
            </p>
          </AnimatedTransition>
        </div>
        
        {/* Visualization */}
        <AnimatedTransition 
          show={showVisualization} 
          animation="scale"
          className="flex-1 min-h-[60vh] relative"
        >
          <Visualization />
        </AnimatedTransition>
      </div>
    </div>
  );
};

export default Index;
