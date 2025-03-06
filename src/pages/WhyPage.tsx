
import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';

const WhyPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text">
            Why Choose Our Second Brain
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your potential with a tool designed to extend your cognitive capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Smart Integration</h3>
            <p className="text-foreground/80">Our AI technology seamlessly integrates with your existing knowledge and workflows, enhancing rather than replacing your thought process.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Personalized Experience</h3>
            <p className="text-foreground/80">The more you use it, the more it adapts to your unique thinking patterns, creating a truly personalized knowledge management system.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Privacy First</h3>
            <p className="text-foreground/80">Your data remains your own. We prioritize security and privacy, ensuring your intellectual property stays protected.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Cross-Platform</h3>
            <p className="text-foreground/80">Access your second brain anywhere, anytime, across all your devices with perfect synchronization.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Visual Thinking</h3>
            <p className="text-foreground/80">Our unique visualization tools help you see connections between ideas that might otherwise remain hidden.</p>
          </div>
          
          <div className="glass-panel p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Future-Proof</h3>
            <p className="text-foreground/80">Constantly evolving with cutting-edge AI advancements to ensure you're always using the most powerful tool possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
