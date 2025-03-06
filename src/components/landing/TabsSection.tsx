
import { useState } from 'react';
import { ManageSection } from './ManageSection';
import { DesignSection } from './DesignSection';
import { DeploySection } from './DeploySection';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Brain, Palette, Rocket } from 'lucide-react';

interface TabsSectionProps {
  show: boolean;
}

export const TabsSection = ({
  show
}: TabsSectionProps) => {
  const [activeTab, setActiveTab] = useState("manage");

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-primary md:text-8xl">Second Brain</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">
            Manage, design, and deploy your digital knowledge with ease.
          </p>
        </div>

        <div className="glass-panel rounded-lg overflow-hidden">
          <Tabs defaultValue="manage" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row">
              {/* Sidebar Tabs */}
              <div className="md:w-64 bg-muted/40 backdrop-blur-sm">
                <TabsList className="flex flex-row md:flex-col h-auto w-full rounded-none bg-transparent p-0">
                  <TabsTrigger 
                    value="manage" 
                    className="flex items-center justify-start gap-3 w-full rounded-none py-3 px-4 data-[state=active]:bg-background data-[state=active]:shadow-none text-base"
                  >
                    <Brain className="h-5 w-5" />
                    <span>Manage</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="design" 
                    className="flex items-center justify-start gap-3 w-full rounded-none py-3 px-4 data-[state=active]:bg-background data-[state=active]:shadow-none text-base"
                  >
                    <Palette className="h-5 w-5" />
                    <span>Design</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="deploy" 
                    className="flex items-center justify-start gap-3 w-full rounded-none py-3 px-4 data-[state=active]:bg-background data-[state=active]:shadow-none text-base"
                  >
                    <Rocket className="h-5 w-5" />
                    <span>Deploy</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-4 md:p-6 bg-background">
                <TabsContent value="manage" className="m-0 p-0 border-none">
                  <ManageSection show={activeTab === "manage"} />
                </TabsContent>
                <TabsContent value="design" className="m-0 p-0 border-none">
                  <DesignSection show={activeTab === "design"} />
                </TabsContent>
                <TabsContent value="deploy" className="m-0 p-0 border-none">
                  <DeploySection show={activeTab === "deploy"} />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </AnimatedTransition>
  );
};
