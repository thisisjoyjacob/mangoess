
import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';

const Profile = () => {
  const showContent = useAnimateIn(false, 300);
  
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
      <AnimatedTransition show={showContent} animation="slide-up">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">User Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your profile, connections, and projects
          </p>
        </div>
        
        <ProfileCard />
      </AnimatedTransition>
    </div>
  );
};

export default Profile;
