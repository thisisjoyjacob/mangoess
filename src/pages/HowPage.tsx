
import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { Brain, Lightbulb, Search, Upload, Database, Zap } from 'lucide-react';

const HowItWorksStep = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center p-6 glass-panel rounded-lg">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
      <p className="text-center text-foreground/80">{description}</p>
    </div>
  );
};

const HowPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "Import",
      description: "Easily import your notes, PDFs, images, and web links into your second brain."
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Organize",
      description: "Our AI automatically categorizes and tags your content for effortless organization."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Connect",
      description: "Discover hidden connections between your ideas with our neural network visualization."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Retrieve",
      description: "Instantly find exactly what you're looking for with semantic search that understands context."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Generate",
      description: "Get AI-powered insights and suggestions based on your knowledge base."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Execute",
      description: "Turn your ideas into action with project management and collaboration tools."
    }
  ];
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text">
            How It Works
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple yet powerful workflow to augment your thinking and creativity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <HowItWorksStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        
        <div className="mt-20 glass-panel p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">AI Technology</h3>
              <p className="text-foreground/80 mb-4">
                Our platform uses state-of-the-art large language models and vector embeddings to understand the meaning behind your content, not just keywords.
              </p>
              <h3 className="text-xl font-bold mb-3">Data Storage</h3>
              <p className="text-foreground/80">
                All your data is encrypted end-to-end and stored in secure cloud infrastructure with regular backups and disaster recovery.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Integration</h3>
              <p className="text-foreground/80 mb-4">
                Connect with tools you already use like Notion, Evernote, Google Drive, and more through our extensive API.
              </p>
              <h3 className="text-xl font-bold mb-3">Customization</h3>
              <p className="text-foreground/80">
                Tailor the experience to your needs with customizable workflows, templates, and visualization options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowPage;
