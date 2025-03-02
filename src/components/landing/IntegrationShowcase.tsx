
import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';

interface IntegrationShowcaseProps {
  show: boolean;
}

export const IntegrationShowcase = ({ show }: IntegrationShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const integrations = [
    {
      name: "Notion",
      logo: "M20 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v13c0 .28-.22.5-.5.5h-3a.5.5 0 0 1-.5-.5v-13ZM6 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-13ZM13 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v13c0 .28-.22.5-.5.5h-3a.5.5 0 0 1-.5-.5v-13Z",
      color: "bg-gradient-to-br from-neutral-800 to-neutral-600 dark:from-neutral-600 dark:to-neutral-800",
      description: "Seamlessly import and link your Notion pages into your knowledge graph.",
    },
    {
      name: "Evernote",
      logo: "M17.5 14.2c-.17.4-.71.93-1.5.93h-8c-.35 0-.7-.12-.97-.34l-3-2.25h.02A1.52 1.52 0 0 1 4.5 9c0-.53-.21-1.04-.62-1.41l.03-.03 2.5-2a1 1 0 0 1 .62-.21H12c.29 0 .75.14.97.34l.03.03V9l2.03-2.31.24-.23a6.7 6.7 0 0 1 3.35-1.5c-.33.5-.54 1.69-.54 2.74v4c0 .76.08 1.84.4 2.5h-.98Z",
      color: "bg-gradient-to-br from-green-600 to-green-400 dark:from-green-500 dark:to-green-700",
      description: "Convert your Evernote notes into connected knowledge nodes with one click.",
    },
    {
      name: "Google Docs",
      logo: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-4Z M9 13h6 M9 9h6 M9 17h6",
      color: "bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-700",
      description: "Pull content directly from your Google Docs while maintaining formatting and links.",
    },
    {
      name: "Obsidian",
      logo: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 16H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-6.41-4.71L7.7 11.4a.984.984 0 0 1 0-1.4.984.984 0 0 1 1.4 0l1.2 1.2 4.6-4.6a.984.984 0 0 1 1.4 0c.39.39.39 1.01 0 1.4l-5.29 5.29c-.39.39-1.03.39-1.42 0z",
      color: "bg-gradient-to-br from-purple-600 to-purple-400 dark:from-purple-500 dark:to-purple-700",
      description: "Import your Obsidian vault and preserve all internal links in your graph.",
    },
    {
      name: "Roam Research",
      logo: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z",
      color: "bg-gradient-to-br from-gray-600 to-gray-400 dark:from-gray-500 dark:to-gray-700",
      description: "Transform your Roam database into an interactive neural network.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % integrations.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [integrations.length]);

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="mt-24 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <Sparkles size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">Seamless Integrations</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with your favorite tools</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Import your existing knowledge from popular platforms and transform it into an interactive neural network.
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Horizontal Integration Display */}
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className={`transition-all duration-300 ${
                  index === activeIndex ? "scale-110 shadow-lg" : "scale-100 opacity-80"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ${integration.color} shadow-md flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300`}>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-12 h-12 sm:w-14 sm:h-14 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={integration.logo} />
                  </svg>
                </div>
                <p className="text-center mt-2 font-medium text-sm">{integration.name}</p>
              </div>
            ))}
          </div>
          
          {/* Integration Details */}
          <div className="glass-panel p-6 rounded-xl max-w-2xl mx-auto w-full">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-primary">
                {integrations[activeIndex].name}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {integrations[activeIndex].description}
              </p>
            </div>
            
            <div className="flex items-center justify-center mt-6 gap-4">
              <div className="neural-node w-12 h-12 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={integrations[activeIndex].logo} />
                </svg>
              </div>
              <div className="neural-connection h-1 w-24"></div>
              <div className="neural-node w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping"></div>
                <span className="text-primary text-lg font-bold">C</span>
              </div>
            </div>
            
            <Button className="w-full mt-8" variant="outline">
              Explore All Integrations <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};
