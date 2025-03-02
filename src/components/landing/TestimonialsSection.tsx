
import { useState, useEffect } from 'react';
import { Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedTransition } from '@/components/AnimatedTransition';

interface TestimonialsSectionProps {
  showTestimonials: boolean;
}

export const TestimonialsSection = ({ showTestimonials }: TestimonialsSectionProps) => {
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
    },
    // 5 new testimonials
    {
      name: "Emily Jackson",
      role: "Content Creator",
      company: "Creative Studios",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "As a content creator, keeping track of ideas and inspirations was always challenging. This tool has become my external creative mind that never forgets.",
      stars: 5
    },
    {
      name: "Dr. David Kim",
      role: "Medical Researcher",
      company: "Global Health Institute",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "The interconnected nature of medical research demands a tool that can link complex concepts. This has become essential to my research methodology.",
      stars: 4
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      company: "InnovateTech",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "I store all my code snippets, architecture diagrams, and technical notes here. The AI-powered connections have helped me solve complex problems much faster.",
      stars: 5
    },
    {
      name: "Jennifer Martinez",
      role: "Education Director",
      company: "Learning Futures Academy",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "We've integrated this tool across our curriculum planning. The ability to visualize connections between subjects has revolutionized our teaching approach.",
      stars: 5
    },
    {
      name: "Robert Chen",
      role: "Financial Analyst",
      company: "Global Investments",
      image: "public/lovable-uploads/bfe7dde7-470d-424d-a42d-a7d34e7f8d9f.png",
      quote: "In financial analysis, connecting market trends with data points is critical. This tool has given my team a competitive edge in pattern recognition.",
      stars: 4
    }
  ];

  // State for carousel animation
  const [position, setPosition] = useState(0);
  
  // Auto-scroll effect
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setPosition(prev => (prev + 1) % (testimonials.length * 2)); // Multiply by 2 for smoother looping
    }, 3000); // Move every 3 seconds
    
    return () => clearInterval(scrollInterval);
  }, [testimonials.length]);

  return (
    <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="mt-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <Users size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">What Our Users Say</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by knowledge workers worldwide</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Learn how our digital second brain is transforming workflows around the world
          </p>
        </div>
        
        {/* Testimonial carousel container */}
        <div className="relative overflow-hidden max-w-7xl mx-auto px-4">
          <div 
            className="flex transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(-${(position * (100 / testimonials.length))}%)`,
              width: `${testimonials.length * 100 * 2}%` // Double width for seamless looping
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`} 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 flex-shrink-0"
              >
                <Card className="h-full border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                  <CardContent className="pt-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.stars ? "text-amber-500 fill-amber-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-base italic mb-6 text-foreground/90">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0 ring-2 ring-background">
                        <img 
                          src={`${testimonial.image}`} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Duplicate set for infinite scroll effect */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`} 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 flex-shrink-0"
              >
                <Card className="h-full border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                  <CardContent className="pt-6">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.stars ? "text-amber-500 fill-amber-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-base italic mb-6 text-foreground/90">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0 ring-2 ring-background">
                        <img 
                          src={`${testimonial.image}`} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};
