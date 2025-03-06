
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

interface DesignSectionProps {
  show: boolean;
}

export const DesignSection = ({
  show
}: DesignSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTemplate, setActiveTemplate] = useState(0);
  const [isTemplateChanging, setIsTemplateChanging] = useState(false);
  
  const templateCategories = [
    {
      title: "Creative Projects",
      templates: ["Course", "Book", "Presentation", "Brainstorming", "Story", "Research Paper", "Blog Post", "Portfolio"]
    }, 
    {
      title: "Business Tools",
      templates: ["Marketing", "Proposal", "Contract", "Product Launch", "Business Plan", "Meeting Notes", "Customer Research", "Sales Deck"]
    }, 
    {
      title: "Research & Strategy",
      templates: ["Research", "Problem Solving", "Content", "Social Media", "Market Analysis", "Competitor Analysis", "User Research", "Product Strategy"]
    },
    {
      title: "Personal Knowledge",
      templates: ["Journal", "Reading Notes", "Learning", "Task Management", "Habit Tracker", "Travel Planner", "Recipe Collection", "Life Goals"]
    }
  ];

  // Cycle through templates automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTemplateChanging(true);
      setTimeout(() => {
        setActiveTemplate(prev => {
          const nextTemplate = (prev + 1) % templateCategories[activeCategory].templates.length;
          return nextTemplate;
        });
        setIsTemplateChanging(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCategory, templateCategories]);

  // Handle category change
  const handleCategoryChange = (index: number) => {
    if (index === activeCategory) return;
    setActiveCategory(index);
    setActiveTemplate(0);
  };

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-primary md:text-8xl">Design</h2>
          <p className="text-foreground max-w-md text-4xl">Choose from over 200+ ready-to-use templates tailored to your needs.</p>
        </div>

        {/* Category Selection */}
        <div className="mb-10 flex flex-wrap gap-3">
          {templateCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Showcase Area */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 mb-10">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-8">{templateCategories[activeCategory].title}</h3>
            
            <div className="relative w-full max-w-lg h-64 glass-panel rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <AnimatedTransition 
                show={!isTemplateChanging} 
                animation="scale-in" 
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-4 text-primary">
                    {templateCategories[activeCategory].templates[activeTemplate]}
                  </div>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Create and organize your {templateCategories[activeCategory].templates[activeTemplate].toLowerCase()} 
                    with our intuitive template.
                  </p>
                </div>
              </AnimatedTransition>
              
              {/* Abstract background elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
            </div>
          </div>
          
          {/* Template Selection Dots */}
          <div className="flex justify-center gap-2">
            {templateCategories[activeCategory].templates.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveTemplate(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTemplate === index 
                    ? 'bg-primary w-4' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Template ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="space-y-10">
          {templateCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.templates.map((template, idx) => (
                  <div 
                    key={idx} 
                    className={`px-6 py-3 rounded-lg font-medium transition-transform duration-300 hover:scale-105 ${
                      activeCategory === index && activeTemplate === idx
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    {template}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
