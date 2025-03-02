import { useState } from 'react';
import { LightbulbIcon, BookOpen, Briefcase, Microscope, Code, GraduationCap, Sparkles } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
interface UseCasesSectionProps {
  show: boolean;
}
interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  connections: string[];
  color: string;
}
export const UseCasesSection = ({
  show
}: UseCasesSectionProps) => {
  const [activeCase, setActiveCase] = useState(0);
  const useCases: UseCase[] = [{
    icon: <Microscope size={24} />,
    title: "Researchers",
    description: "Collect research papers, annotate findings, and visualize connections between different studies and concepts. Discover hidden patterns in your research data.",
    connections: ["Literature Reviews", "Study Notes", "Data Analysis", "Hypotheses", "Citations"],
    color: "from-blue-500 to-cyan-500"
  }, {
    icon: <GraduationCap size={24} />,
    title: "Students",
    description: "Transform your course notes into an interactive knowledge network. Link concepts across different subjects and create a comprehensive study guide for exams.",
    connections: ["Course Notes", "Assignments", "Study Groups", "Exam Prep", "Projects"],
    color: "from-purple-500 to-indigo-500"
  }, {
    icon: <Briefcase size={24} />,
    title: "Professionals",
    description: "Keep track of projects, client information, and industry insights. Quickly retrieve relevant information during meetings and decision-making processes.",
    connections: ["Client Notes", "Projects", "Meeting Notes", "Industry News", "Contacts"],
    color: "from-amber-500 to-orange-500"
  }, {
    icon: <BookOpen size={24} />,
    title: "Writers",
    description: "Organize ideas, research, character profiles, and plot structures. Connect themes and motifs across your writing projects to maintain consistency.",
    connections: ["Plot Ideas", "Characters", "Research", "Worldbuilding", "Outlines"],
    color: "from-emerald-500 to-green-500"
  }, {
    icon: <Code size={24} />,
    title: "Developers",
    description: "Store code snippets, documentation references, and project architectures. Link related components and track dependencies visually.",
    connections: ["Code Snippets", "Documentation", "Bug Reports", "Feature Ideas", "Architecture"],
    color: "from-rose-500 to-pink-500"
  }];
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="mt-24 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <LightbulbIcon size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">Use Cases</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect for every kind of thinker</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            See how different professionals use Cortex to amplify their cognitive capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {useCases.map((useCase, idx) => <div key={idx} onClick={() => setActiveCase(idx)} className={cn("glass-panel rounded-xl p-4 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-md", activeCase === idx ? "ring-2 ring-primary shadow-md" : "")}>
              
              <h3 className="font-semibold">{useCase.title}</h3>
            </div>)}
        </div>
        
        <div className="glass-panel rounded-xl p-6 md:p-8 relative overflow-hidden">
          <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${useCases[activeCase].color}`}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCases[activeCase].color} flex items-center justify-center mr-4 shadow-lg`}>
                  {useCases[activeCase].icon}
                </div>
                <h3 className="text-2xl font-bold">{useCases[activeCase].title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {useCases[activeCase].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {useCases[activeCase].connections.map((connection, idx) => <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${useCases[activeCase].color} bg-opacity-10 text-primary`}>
                    {connection}
                  </span>)}
              </div>
            </div>
            
            <div className="relative h-[300px] flex items-center justify-center">
              <div className="neural-node w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <Sparkles className="text-primary" size={28} />
              </div>
              
              {useCases[activeCase].connections.map((connection, idx) => {
              const angle = idx * (360 / useCases[activeCase].connections.length) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return <div key={idx} className="absolute" style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}>
                    <div className="neural-connection absolute" style={{
                  width: `${radius}px`,
                  height: '2px',
                  transformOrigin: '0 0',
                  transform: `rotate(${Math.atan2(y, x) * (180 / Math.PI)}deg)`,
                  left: 0,
                  top: 0
                }}></div>
                    <div className="neural-node w-12 h-12 flex items-center justify-center animate-float">
                      <span className="text-xs font-medium">{connection}</span>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
        
        
      </div>
    </AnimatedTransition>;
};