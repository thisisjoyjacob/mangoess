
import { Link } from 'react-router-dom';
import { Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import Visualization from '@/components/Visualization';

interface HeroSectionProps {
  showTitle: boolean;
  showSubtitle: boolean;
  showVisualization: boolean;
}

export const HeroSection = ({ showTitle, showSubtitle, showVisualization }: HeroSectionProps) => {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <AnimatedTransition 
          show={showTitle} 
          animation="slide-down"
          className="inline-block"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Brain size={16} className="mr-2" />
            Digital Second Brain
          </div>
        </AnimatedTransition>
        
        <AnimatedTransition show={showTitle} animation="slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Mind, <span className="italic">Extended</span> and <span className="italic">Enhanced</span>
          </h1>
        </AnimatedTransition>
        
        <AnimatedTransition show={showSubtitle} animation="fade">
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
            An AI-powered knowledge repository designed as a seamless extension of your mind—
            intelligent, searchable, interconnected, and visually engaging.
          </p>
        </AnimatedTransition>
        
        <AnimatedTransition show={showSubtitle} animation="slide-up" duration={800}>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <Button size="lg" className="rounded-full text-base px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:translate-y-[-2px]">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base px-8 py-6 shadow-sm hover:shadow-md bg-background/70 backdrop-blur-sm hover:bg-background/90 transition-all duration-300 hover:translate-y-[-2px]">
              See Features
            </Button>
          </div>
        </AnimatedTransition>
      </div>
      
      {/* Visualization */}
      <AnimatedTransition 
        show={showVisualization} 
        animation="scale"
        className="flex-1 relative mt-6 h-[40vh] rounded-xl overflow-hidden border border-border/50 shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none" />
        <Visualization />
      </AnimatedTransition>
    </>
  );
};
