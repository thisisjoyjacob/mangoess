
import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ManageSection } from './ManageSection';
import { DesignSection } from './DesignSection';
import { DeploySection } from './DeploySection';
import { Package, Paintbrush, Rocket } from 'lucide-react';

interface TabsSectionProps {
  show: boolean;
  showManage: boolean;
  showDesign: boolean;
  showDeploy: boolean;
}

export const TabsSection = ({
  show,
  showManage,
  showDesign,
  showDeploy
}: TabsSectionProps) => {
  const [activeTab, setActiveTab] = useState("manage");

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <h2 className="text-4xl font-bold text-primary md:text-6xl">Digital Second Brain</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">
            Your all-in-one knowledge management solution
          </p>
        </div>

        <div className="glass-panel rounded-lg p-6 mb-12">
          <Tabs 
            defaultValue="manage" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="manage" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">Manage</span>
                </TabsTrigger>
                <TabsTrigger value="design" className="flex items-center gap-2">
                  <Paintbrush className="h-4 w-4" />
                  <span className="hidden sm:inline">Design</span>
                </TabsTrigger>
                <TabsTrigger value="deploy" className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span className="hidden sm:inline">Deploy</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="manage" className="focus-visible:outline-none">
              <ManageSection show={showManage} />
            </TabsContent>
            
            <TabsContent value="design" className="focus-visible:outline-none">
              <DesignSection show={showDesign} />
            </TabsContent>
            
            <TabsContent value="deploy" className="focus-visible:outline-none">
              <DeploySection show={showDeploy} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AnimatedTransition>
  );
};
