
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Visualization from '@/components/Visualization';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import { 
  Brain, 
  Search, 
  Link as LinkIcon, 
  FileText, 
  Database,
  BrainCircuit, 
  Network, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const showTitle = useAnimateIn(false, 300);
  const showSubtitle = useAnimateIn(false, 600);
  const showVisualization = useAnimateIn(false, 900);
  const showFeatures = useAnimateIn(false, 1200);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: "Neural Connections",
      description: "Build meaningful connections between your notes, files, and ideas with our visual network view.",
      color: "from-blue-400/60 to-blue-600/40"
    },
    {
      icon: <Search size={24} />,
      title: "Smart Search",
      description: "Find anything instantly with our AI-powered semantic search that understands context and meaning.",
      color: "from-purple-400/60 to-purple-600/40"
    },
    {
      icon: <FileText size={24} />,
      title: "Rich Content",
      description: "Store notes, links, files, images, and projects in one unified knowledge system.",
      color: "from-green-400/60 to-green-600/40"
    },
    {
      icon: <LinkIcon size={24} />,
      title: "Automatic Linking",
      description: "Our AI suggests connections between related content to build your knowledge graph organically.",
      color: "from-amber-400/60 to-amber-600/40"
    },
    {
      icon: <Database size={24} />,
      title: "Multi-source Import",
      description: "Import content from various sources including notes apps, bookmarks, and more.",
      color: "from-rose-400/60 to-rose-600/40"
    },
    {
      icon: <Network size={24} />,
      title: "Visual Thinking",
      description: "Visualize your thoughts and connections in an interactive knowledge graph.",
      color: "from-indigo-400/60 to-indigo-600/40"
    }
  ];
  
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
    <div className="max-w-7xl mx-auto px-4 pt-12 pb-24">
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
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Your Mind, <span className="text-primary">Extended</span> and <span className="text-primary">Enhanced</span>
            </h1>
          </AnimatedTransition>
          
          <AnimatedTransition show={showSubtitle} animation="fade">
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              An AI-powered knowledge repository designed as a seamless extension of your mind—
              intelligent, searchable, interconnected, and visually engaging.
            </p>
          </AnimatedTransition>
          
          <AnimatedTransition show={showSubtitle} animation="slide-up" duration={800}>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button size="lg" className="rounded-full text-base px-6">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-6">
                See Features
              </Button>
            </div>
          </AnimatedTransition>
        </div>
        
        {/* Visualization */}
        <AnimatedTransition 
          show={showVisualization} 
          animation="scale"
          className="flex-1 min-h-[60vh] relative mb-12 mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />
          <Visualization />
        </AnimatedTransition>
        
        {/* Features */}
        <AnimatedTransition show={showFeatures} animation="slide-up" duration={600}>
          <div className="mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                <span className="inline-flex items-center">
                  <Sparkles size={24} className="mr-2 text-primary" />
                  Key Features
                </span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Discover how our digital second brain transforms the way you capture, connect, and recall information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`} />
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.color}`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-medium mb-6">Ready to transform your digital knowledge?</h3>
              <Link to="/import">
                <Button size="lg" className="rounded-full text-base px-8">
                  Start Building Your Brain <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedTransition>
      </div>
    </div>
  );
};

export default Index;
