
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import CortexTable from '@/components/manage/CortexTable';
import CortexSidebar from '@/components/manage/CortexSidebar';
import ViewSwitcher from '@/components/manage/ViewSwitcher';
import { TooltipProvider } from '@/components/ui/tooltip';

const ManagePage = () => {
  const showContent = useAnimateIn(false, 300);
  const [viewType, setViewType] = useState<'table' | 'grid' | 'list' | 'kanban'>('table');
  
  return (
    <div className="max-w-full mx-auto h-screen pt-24 pb-6">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="flex h-[calc(100vh-130px)]">
          <CortexSidebar />
          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
              <h2 className="text-xl font-semibold">Cortex Library</h2>
              <TooltipProvider>
                <ViewSwitcher activeView={viewType} onViewChange={setViewType} />
              </TooltipProvider>
            </div>
            <CortexTable viewType={viewType} />
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default ManagePage;
