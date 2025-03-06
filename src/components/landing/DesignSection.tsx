import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
interface DesignSectionProps {
  show: boolean;
}
export const DesignSection = ({
  show
}: DesignSectionProps) => {
  const templateCategories = [{
    title: "Creative Projects",
    templates: ["Course", "Book", "Presentation", "Brainstorming"]
  }, {
    title: "Business Tools",
    templates: ["Marketing", "Proposal", "Contract", "Product Launch"]
  }, {
    title: "Research & Strategy",
    templates: ["Research", "Problem Solving", "Content", "Social Media"]
  }];
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-primary md:text-8xl">Design</h2>
          <p className="text-foreground max-w-md text-4xl">Choose from over 200+ ready-to-use templates tailored to your needs.</p>
        </div>

        <div className="space-y-10">
          {templateCategories.map((category, index) => <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.templates.map((template, idx) => <div key={idx} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
                    {template}
                  </div>)}
              </div>
            </div>)}
        </div>

        
      </div>
    </AnimatedTransition>;
};