
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
  
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-primary md:text-8xl">Design</h2>
          <p className="text-foreground max-w-md text-4xl">Choose from over 200+ ready-to-use templates tailored to your needs.</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 mb-8">
          {templateCategories.map((category, index) => (
            <Button 
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              onClick={() => setActiveCategory(index)}
              className="transition-all duration-300"
            >
              {category.title}
            </Button>
          ))}
        </div>

        <div className="space-y-10">
          {templateCategories.map((category, index) => (
            <AnimatedTransition 
              key={index} 
              show={activeCategory === index} 
              animation="fade" 
              duration={400}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {category.templates.map((template, idx) => (
                  <div 
                    key={idx} 
                    className="bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-medium hover:bg-primary transition-colors duration-300 hover:shadow-lg cursor-pointer"
                  >
                    {template}
                  </div>
                ))}
              </div>
            </AnimatedTransition>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
