
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CallToAction = () => {
  return (
    <div className="mt-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-3xl blur-3xl"></div>
      
      <div className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-10 border shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to transform your digital knowledge?</h3>
        <p className="text-muted-foreground mb-8">
          Join thousands of researchers, students, and professionals who've upgraded their thinking with our digital second brain.
        </p>
        <Link to="/import">
          <Button size="lg" className="rounded-full text-base px-10 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
            Start Building Your Brain <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
