
import React from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import ProjectRoadmap from '@/components/ProjectRoadmap';

const Profile = () => {
  const showContent = useAnimateIn(false, 300);
  
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Project Roadmap</h1>
          <p className="text-muted-foreground mt-2">
            Track your project journey from start to completion and collect reviews
          </p>
        </div>
        
        <ProjectRoadmap />
      </AnimatedTransition>
    </div>
  );
};

export default Profile;
