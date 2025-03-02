
import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeatureSection } from '@/components/landing/FeatureSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CallToAction } from '@/components/landing/CallToAction';
import { LoadingScreen } from '@/components/landing/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const showTitle = useAnimateIn(false, 300);
  const showSubtitle = useAnimateIn(false, 600);
  const showVisualization = useAnimateIn(false, 900);
  const showFeatures = useAnimateIn(false, 1200);
  const showPricing = useAnimateIn(false, 1500);
  const showTestimonials = useAnimateIn(false, 1800);
  const showFAQs = useAnimateIn(false, 2100);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="flex flex-col">
          {/* Hero Section */}
          <HeroSection 
            showTitle={showTitle}
            showSubtitle={showSubtitle}
            showVisualization={showVisualization}
          />
          
          {/* Features Section */}
          <FeatureSection showFeatures={showFeatures} />
          
          {/* Pricing Section */}
          <PricingSection showPricing={showPricing} />
          
          {/* Testimonials Section */}
          <TestimonialsSection showTestimonials={showTestimonials} />
          
          {/* FAQ Section */}
          <FAQSection showFAQs={showFAQs} />
          
          {/* Call to Action */}
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Index;
