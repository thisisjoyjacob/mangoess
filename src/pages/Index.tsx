
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
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  Star,
  ShieldCheck,
  BadgeDollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const showTitle = useAnimateIn(false, 300);
  const showSubtitle = useAnimateIn(false, 600);
  const showVisualization = useAnimateIn(false, 900);
  const showFeatures = useAnimateIn(false, 1200);
  const showPricing = useAnimateIn(false, 1500);
  const showTestimonials = useAnimateIn(false, 1800);
  
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

  const pricingPlans = [
    {
      name: "Basic",
      price: "$0",
      description: "Perfect for getting started with your second brain journey",
      features: [
        "Up to 1,000 notes and connections",
        "Basic AI suggestions",
        "Core visualization features",
        "Standard search capabilities",
        "Community support"
      ],
      icon: <Brain size={24} />,
      color: "from-blue-400/60 to-blue-600/40",
      buttonText: "Start Free",
      buttonVariant: "outline"
    },
    {
      name: "Pro",
      price: "$12",
      period: "/month",
      description: "For serious knowledge workers and researchers",
      features: [
        "Unlimited notes and connections",
        "Advanced AI connections",
        "Full visualization capabilities",
        "Semantic search and context awareness",
        "Priority support",
        "Multiple knowledge graphs"
      ],
      icon: <BadgeDollarSign size={24} />,
      color: "from-purple-400/60 to-purple-600/40",
      buttonText: "Upgrade to Pro",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations managing collective knowledge",
      features: [
        "Everything in Pro plan",
        "Team collaboration features",
        "Admin controls and audit logs",
        "Custom integrations",
        "Dedicated support manager",
        "Employee training sessions"
      ],
      icon: <Building size={24} />,
      color: "from-indigo-400/60 to-indigo-600/40",
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "PhD Researcher",
      company: "Stanford University",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "This digital second brain has completely transformed my research workflow. I can connect concepts across disciplines that I never would have linked together manually.",
      stars: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Acme Tech",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "Managing complex product roadmaps and customer feedback has never been easier. The neural connections help me spot patterns I would have missed.",
      stars: 5
    },
    {
      name: "TechCorp Solutions",
      role: "Enterprise Customer",
      company: "Technology",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "We've deployed this across our innovation team and have seen a 40% increase in ideation efficiency and knowledge transfer between departments.",
      stars: 4
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
      <div className="flex flex-col">
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
        
        {/* Visualization - reduced height to minimize spacing */}
        <AnimatedTransition 
          show={showVisualization} 
          animation="scale"
          className="flex-1 min-h-[40vh] relative mt-8 mb-4"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />
          <Visualization />
        </AnimatedTransition>
        
        {/* Features - moved closer to visualization */}
        <AnimatedTransition show={showFeatures} animation="slide-up" duration={600}>
          <div className="mt-4">
            <div className="text-center mb-10">
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
          </div>
        </AnimatedTransition>
        
        {/* Pricing Plans - New Section */}
        <AnimatedTransition show={showPricing} animation="slide-up" duration={600}>
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                <span className="inline-flex items-center">
                  <BadgeDollarSign size={24} className="mr-2 text-primary" />
                  Pricing Plans
                </span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Choose the perfect plan to power your second brain journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`border relative ${plan.popular ? 'shadow-lg ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 inset-x-0 flex justify-center">
                      <div className="px-4 py-1 bg-primary rounded-full text-xs font-medium text-white">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`} />
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${plan.color} mb-4`}>
                      {plan.icon}
                    </div>
                    <CardTitle className="flex items-end gap-2">
                      <span>{plan.name}</span>
                    </CardTitle>
                    <div className="mt-2 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                    </div>
                    <CardDescription className="mt-3">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.buttonVariant as "default" | "outline"}>
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedTransition>
        
        {/* Testimonials - New Section */}
        <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                <span className="inline-flex items-center">
                  <Users size={24} className="mr-2 text-primary" />
                  What Our Users Say
                </span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Learn how our digital second brain is transforming workflows around the world
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
                        <img 
                          src={`${testimonial.image}`} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>
                          {testimonial.role} at {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < testimonial.stars ? "text-amber-500 fill-amber-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-sm italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedTransition>
        
        {/* Call to Action - at bottom of page */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-medium mb-6">Ready to transform your digital knowledge?</h3>
          <Link to="/import">
            <Button size="lg" className="rounded-full text-base px-8">
              Start Building Your Brain <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
