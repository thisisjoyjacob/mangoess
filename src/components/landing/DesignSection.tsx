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
  const templateCategories = [{
    title: "Creative Projects",
    templates: ["Course", "Book", "Presentation", "Brainstorming", "Story", "Research Paper", "Blog Post", "Portfolio"]
  }, {
    title: "Business Tools",
    templates: ["Marketing", "Proposal", "Contract", "Product Launch", "Business Plan", "Meeting Notes", "Customer Research", "Sales Deck"]
  }, {
    title: "Research & Strategy",
    templates: ["Research", "Problem Solving", "Content", "Social Media", "Market Analysis", "Competitor Analysis", "User Research", "Product Strategy"]
  }, {
    title: "Personal Knowledge",
    templates: ["Journal", "Reading Notes", "Learning", "Task Management", "Habit Tracker", "Travel Planner", "Recipe Collection", "Life Goals"]
  }];

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
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-primary md:text-8xl">Design</h2>
          <p className="text-foreground max-w-md text-4xl">Choose from over 200+ ready-to-use templates tailored to your needs.</p>
        </div>

        {/* Category Selection */}
        

        {/* Showcase Area */}
        

        {/* Templates Grid */}
        <div className="space-y-10">
          {templateCategories.map((category, index) => <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.templates.map((template, idx) => <div key={idx} className={`px-6 py-3 rounded-lg font-medium transition-transform duration-300 hover:scale-105 ${activeCategory === index && activeTemplate === idx ? 'bg-primary text-primary-foreground shadow-md' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                    {template}
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </AnimatedTransition>;
};