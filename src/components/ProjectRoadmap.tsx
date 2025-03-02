
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/lib/types';
import { CheckCircle2, Clock, Edit, ExternalLink, Flag, Lock, Mail, MessageSquare, Plus, Star, ThumbsUp, Users } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const sampleProfile: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  description: 'AI researcher and knowledge management enthusiast. Building a digital second brain to enhance creativity and productivity.',
  links: [
    { title: 'Personal Website', url: 'https://example.com' },
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'Twitter', url: 'https://twitter.com' },
  ],
  projects: [
    { 
      id: '1', 
      title: 'AI Research Database', 
      description: 'A collection of papers and notes on artificial intelligence and machine learning.',
      status: 'active'
    },
    { 
      id: '2', 
      title: 'Knowledge Management System', 
      description: 'A comprehensive system for organizing and retrieving information.',
      status: 'active'
    },
    { 
      id: '3', 
      title: 'Digital Garden', 
      description: 'A collection of interconnected notes and thoughts on various topics.',
      status: 'completed'
    },
  ]
};

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed';
}

interface ProjectWithStage extends Project {
  stage?: 'planning' | 'inProgress' | 'review' | 'completed';
  reviewCount?: number;
  reviewScore?: number;
}

const enhancedProjects: ProjectWithStage[] = [
  { 
    id: '1', 
    title: 'AI Research Database', 
    description: 'A collection of papers and notes on artificial intelligence and machine learning.',
    status: 'active',
    stage: 'inProgress',
    reviewCount: 0,
    reviewScore: 0
  },
  { 
    id: '2', 
    title: 'Knowledge Management System', 
    description: 'A comprehensive system for organizing and retrieving information.',
    status: 'active',
    stage: 'planning',
    reviewCount: 0,
    reviewScore: 0
  },
  { 
    id: '3', 
    title: 'Digital Garden', 
    description: 'A collection of interconnected notes and thoughts on various topics.',
    status: 'completed',
    stage: 'completed',
    reviewCount: 5,
    reviewScore: 4.8
  },
  { 
    id: '4', 
    title: 'Neural Link Explorer', 
    description: 'A tool for visualizing connections between concepts in a knowledge base.',
    status: 'active',
    stage: 'review',
    reviewCount: 3,
    reviewScore: 4.2
  },
];

const ProjectRoadmap: React.FC = () => {
  const [projects, setProjects] = useState<ProjectWithStage[]>(enhancedProjects);
  const [editingProject, setEditingProject] = useState<ProjectWithStage | null>(null);
  const [draggedProject, setDraggedProject] = useState<ProjectWithStage | null>(null);
  
  const addNewProject = () => {
    const newProject: ProjectWithStage = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Click to edit project details',
      status: 'active',
      stage: 'planning',
      reviewCount: 0,
      reviewScore: 0
    };
    
    setProjects([...projects, newProject]);
  };
  
  const moveToNextStage = (projectId: string) => {
    setProjects(projects.map(project => {
      if (project.id === projectId) {
        const stageOrder: ProjectWithStage['stage'][] = ['planning', 'inProgress', 'review', 'completed'];
        const currentIndex = stageOrder.indexOf(project.stage!);
        
        if (currentIndex < stageOrder.length - 1) {
          return { ...project, stage: stageOrder[currentIndex + 1] };
        }
      }
      return project;
    }));
  };
  
  const handleDragStart = (project: ProjectWithStage) => {
    setDraggedProject(project);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  const handleDrop = (targetStage: ProjectWithStage['stage']) => {
    if (draggedProject && draggedProject.stage !== targetStage) {
      setProjects(projects.map(project => 
        project.id === draggedProject.id 
          ? { ...project, stage: targetStage } 
          : project
      ));
      setDraggedProject(null);
    }
  };
  
  const startEditingProject = (project: ProjectWithStage) => {
    setEditingProject({...project});
  };
  
  const saveProjectChanges = () => {
    if (editingProject) {
      setProjects(projects.map(project => 
        project.id === editingProject.id ? editingProject : project
      ));
      setEditingProject(null);
    }
  };
  
  const cancelEditingProject = () => {
    setEditingProject(null);
  };
  
  const renderStageIcon = (stage: ProjectWithStage['stage']) => {
    switch (stage) {
      case 'planning':
        return <Flag className="h-5 w-5 text-blue-500" />;
      case 'inProgress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'review':
        return <MessageSquare className="h-5 w-5 text-purple-500" />;
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };
  
  const renderStageLabel = (stage: ProjectWithStage['stage']) => {
    switch (stage) {
      case 'planning':
        return 'Planning';
      case 'inProgress':
        return 'In Progress';
      case 'review':
        return 'Under Review';
      case 'completed':
        return 'Completed';
      default:
        return '';
    }
  };
  
  const renderStageColor = (stage: ProjectWithStage['stage']) => {
    switch (stage) {
      case 'planning':
        return 'bg-blue-500/10 text-blue-500 border-blue-200';
      case 'inProgress':
        return 'bg-amber-500/10 text-amber-500 border-amber-200';
      case 'review':
        return 'bg-purple-500/10 text-purple-500 border-purple-200';
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-200';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-200';
    }
  };
  
  if (editingProject) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Edit Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectTitle">Project Title</Label>
            <Input 
              id="projectTitle" 
              value={editingProject.title}
              onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Description</Label>
            <Input 
              id="projectDescription" 
              value={editingProject.description}
              onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={cancelEditingProject}>Cancel</Button>
          <Button onClick={saveProjectChanges}>Save Changes</Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-4 gap-4">
        {(['planning', 'inProgress', 'review', 'completed'] as ProjectWithStage['stage'][]).map(stage => (
          <div 
            key={stage} 
            className="space-y-4"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(stage)}
          >
            <div className={`flex items-center justify-between p-3 rounded-lg ${renderStageColor(stage)} border`}>
              <div className="flex items-center gap-2">
                {renderStageIcon(stage)}
                <h3 className="font-medium">{renderStageLabel(stage)}</h3>
              </div>
              
              {stage === 'planning' && (
                <button 
                  onClick={addNewProject}
                  className="p-1 rounded-full hover:bg-background/80"
                >
                  <Plus size={18} />
                </button>
              )}
            </div>
            
            <div className="space-y-3 min-h-[200px]">
              {projects
                .filter(project => project.stage === stage)
                .map(project => (
                  <Card 
                    key={project.id} 
                    className="border transition-all hover:shadow-md cursor-pointer"
                    draggable
                    onDragStart={() => handleDragStart(project)}
                    onClick={() => startEditingProject(project)}
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">{project.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-4 pt-0 pb-2">
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </CardContent>
                    
                    <CardFooter className="p-4 pt-2 flex items-center justify-between">
                      {stage === 'review' && (
                        <div className="flex items-center gap-1">
                          <Users size={14} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{project.reviewCount} reviews</span>
                        </div>
                      )}
                      
                      {stage === 'completed' && project.reviewScore! > 0 && (
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-amber-500 fill-amber-500" />
                          <span className="text-xs text-muted-foreground">{project.reviewScore?.toFixed(1)}</span>
                        </div>
                      )}
                      
                      <div className="ml-auto flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditingProject(project);
                          }}
                          className="text-xs flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-colors"
                        >
                          <Edit size={12} />
                          Edit
                        </button>
                        
                        {stage !== 'completed' && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              moveToNextStage(project.id);
                            }}
                            className="text-xs flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {stage === 'planning' ? 'Start' : stage === 'inProgress' ? 'Submit for Review' : 'Complete'}
                          </button>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectRoadmap;
