
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { cn } from '@/lib/utils';

interface FeatureIllustrationProps {
  featureIndex: number | null;
  className?: string;
}

const illustrations = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2000&auto=format&fit=crop"
];

export const FeatureIllustration: React.FC<FeatureIllustrationProps> = ({ featureIndex, className }) => {
  // Show an illustration based on the feature category (we'll cycle through 4 images)
  const imageIndex = featureIndex !== null ? featureIndex % 4 : null;
  
  return (
    <AnimatedTransition 
      show={featureIndex !== null} 
      animation="scale" 
      duration={300}
      className={cn("w-full overflow-hidden rounded-lg shadow-lg mb-12", className)}
    >
      {featureIndex !== null && imageIndex !== null && (
        <div className="relative w-full aspect-video">
          <img 
            src={illustrations[imageIndex]} 
            alt="Feature illustration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}
    </AnimatedTransition>
  );
};
