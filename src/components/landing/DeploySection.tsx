
import { Activity, TrendingUp, Layout, Maximize } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';

interface DeploySectionProps {
  show: boolean;
}

export const DeploySection = ({
  show
}: DeploySectionProps) => {
  const deployFeatures = [
    {
      icon: <Activity size={32} className="text-primary" />,
      title: "Seamless",
      description: "Publish your work effortlessly across various platforms and devices."
    }, 
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: "Insights",
      description: "Gain insights with built-in analytics to track impact and engagement."
    }, 
    {
      icon: <Layout size={32} className="text-primary" />,
      title: "Optimize",
      description: "Leverage AI to identify areas for improvement and refine your outputs."
    }, 
    {
      icon: <Maximize size={32} className="text-primary" />,
      title: "Scale",
      description: "Adapt and grow your AI solutions as your needs evolve."
    }
  ];

  return (
    <AnimatedTransition show={show} animation="fade" duration={600}>
      <div>
        <h3 className="text-4xl font-bold text-primary text-center mb-6">Deploy</h3>
        <p className="text-foreground max-w-3xl mx-auto text-center text-xl md:text-2xl mb-12">
          Take your AI-driven work to the next level.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {deployFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
