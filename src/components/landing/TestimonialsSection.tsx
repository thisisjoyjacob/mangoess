import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Card } from '@/components/ui/card';
interface TestimonialsSectionProps {
  showTestimonials: boolean;
}
export const TestimonialsSection = ({
  showTestimonials
}: TestimonialsSectionProps) => {
  const testimonials = [
    {
      quote: "A game-changer in how I manage my projects!",
      name: "Sarah P.",
      role: "Product Manager"
    }, {
      quote: "The AI integrations have saved me countless hours.",
      name: "James L.",
      role: "Software Developer"
    }, {
      quote: "I finally have a way to organize my ideas and execute them seamlessly.",
      name: "Amanda T.",
      role: "Content Creator"
    }, {
      quote: "The template library is a lifesaver for my research and presentations.",
      name: "Dr. Michael R.",
      role: "Researcher"
    }, {
      quote: "I can collaborate with my team like never before. It's so intuitive!",
      name: "Emma A.",
      role: "Marketing Lead"
    }, {
      quote: "The search function is incredible. I can find anything in seconds.",
      name: "Laura M.",
      role: "Data Analyst"
    }, {
      quote: "It's like having an AI-powered assistant that works exactly the way I want.",
      name: "Rafael O.",
      role: "Startup Founder"
    }, {
      quote: "The visualization tools have transformed how I present complex data.",
      name: "David K.",
      role: "Data Scientist"
    }, {
      quote: "I've never been more organized. Everything is just a click away.",
      name: "Nicole F.",
      role: "Executive Assistant"
    }, {
      quote: "The AI recommendations are surprisingly accurate and helpful.",
      name: "Thomas J.",
      role: "Researcher"
    }, {
      quote: "My productivity has doubled since I started using this platform.",
      name: "Sophia R.",
      role: "Project Manager"
    }, {
      quote: "The integration with other tools makes my workflow seamless.",
      name: "Alex C.",
      role: "Product Designer"
    }
  ];
  
  return <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary md:text-7xl">
            What our users are saying
          </h2>
          <p className="text-foreground max-w-xl text-xl md:text-2xl mt-2">
            Discover how our platform transforms the way people work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border border-border/50 p-6 rounded-lg shadow-sm h-full">
              <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
              <div className="mt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>)}
        </div>
      </div>
    </AnimatedTransition>;
};
