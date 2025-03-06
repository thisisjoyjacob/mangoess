
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState, useEffect } from 'react';

interface DesignSectionProps {
  show: boolean;
}

export const DesignSection = ({
  show
}: DesignSectionProps) => {
  const templateCategories = [
    {
      title: "Creative Projects",
      templates: ["Course Creator", "Book Notes", "Interactive Presentation", "Brainstorming Session", "Video Script", "Podcast Planning", "Design Portfolio", "Creative Writing"]
    }, 
    {
      title: "Business Tools",
      templates: ["Marketing Campaign", "Business Proposal", "Contract Template", "Product Launch", "Sales Dashboard", "Client Management", "Meeting Notes", "Business Plan"]
    }, 
    {
      title: "Research & Strategy",
      templates: ["Research Paper", "Problem Solving Framework", "Content Calendar", "Social Media Strategy", "Academic Notes", "Literature Review", "Competitor Analysis", "Market Research"]
    },
    {
      title: "Personal Growth",
      templates: ["Habit Tracker", "Goal Setting", "Learning Journal", "Reading List", "Travel Planner", "Fitness Tracker", "Productivity System", "Reflection Journal"]
    }
  ];
  
  const [currentTemplates, setCurrentTemplates] = useState<string[]>([]);
  const [category, setCategory] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCategory((prev) => (prev + 1) % templateCategories.length);
        setCurrentTemplates(
          templateCategories[(category + 1) % templateCategories.length].templates
            .sort(() => Math.random() - 0.5)
            .slice(0, 8)
        );
        setAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [category]);

  useEffect(() => {
    setCurrentTemplates(
      templateCategories[0].templates
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)
    );
  }, []);

  const changeCategory = (index: number) => {
    if (category === index || animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCategory(index);
      setCurrentTemplates(
        templateCategories[index].templates
          .sort(() => Math.random() - 0.5)
          .slice(0, 8)
      );
      setAnimating(false);
    }, 500);
  };

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-start gap-2 mb-12">
          <h2 className="text-4xl font-bold text-primary md:text-8xl">Design</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2 whitespace-nowrap">Choose from over 200+ ready-to-use templates tailored to your needs.</p>
        </div>

        <div className="flex justify-center space-x-2 mb-12">
          {templateCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => changeCategory(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                category === idx 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={cat.title}
            />
          ))}
        </div>

        <AnimatedTransition 
          show={!animating} 
          animation="fade" 
          duration={500}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-black">
            {templateCategories[category].title}
          </h3>
        </AnimatedTransition>

        <div className="relative">
          <AnimatedTransition 
            show={!animating} 
            animation="fade" 
            duration={500}
          >
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {currentTemplates.map((template, idx) => (
                <button
                  key={idx}
                  className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer"
                >
                  {template}
                </button>
              ))}
            </div>
          </AnimatedTransition>
        </div>

        <div className="flex justify-center mt-10">
          <Button size="lg" className="group">
            View All Templates
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </AnimatedTransition>
  );
};
