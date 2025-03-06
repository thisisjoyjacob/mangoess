
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import CortexTable from '@/components/manage/CortexTable';
import CortexSidebar from '@/components/manage/CortexSidebar';

const ManagePage = () => {
  const showContent = useAnimateIn(false, 300);
  
  return (
    <div className="max-w-full mx-auto h-screen pt-24 pb-6">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="flex h-[calc(100vh-130px)]">
          <CortexSidebar />
          <div className="flex-1 overflow-x-auto">
            <CortexTable />
          </div>
        </div>
      </AnimatedTransition>
    </div>
  );
};

export default ManagePage;
