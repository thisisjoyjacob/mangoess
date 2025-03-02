
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
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
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
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
