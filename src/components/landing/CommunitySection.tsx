import { Users, Sparkles, GitBranch, MessageSquare } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';
interface CommunitySectionProps {
  show: boolean;
}
export const CommunitySection = ({
  show
}: CommunitySectionProps) => {
  const communityMembers = [{
    name: "Alex Thompson",
    role: "Data Scientist",
    avatar: `https://source.unsplash.com/random/100x100?face-1`,
    contribution: "Knowledge Graph Algorithms"
  }, {
    name: "Mira Chen",
    role: "Professor",
    avatar: `https://source.unsplash.com/random/100x100?face-2`,
    contribution: "Educational Templates"
  }, {
    name: "Jason Wright",
    role: "Product Designer",
    avatar: `https://source.unsplash.com/random/100x100?face-3`,
    contribution: "UI Components"
  }, {
    name: "Sophia Kim",
    role: "Researcher",
    avatar: `https://source.unsplash.com/random/100x100?face-4`,
    contribution: "Citation System"
  }, {
    name: "Marcus Jones",
    role: "Student",
    avatar: `https://source.unsplash.com/random/100x100?face-5`,
    contribution: "Study Guides"
  }];
  const forums = [{
    title: "Research Methodology Templates",
    replies: 42,
    views: 1256,
    category: "Templates"
  }, {
    title: "Best practices for literature notes",
    replies: 36,
    views: 982,
    category: "Workflows"
  }, {
    title: "Automated tagging strategies",
    replies: 28,
    views: 874,
    category: "Automation"
  }];
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="mt-24 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <Users size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">Our Community</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join thousands of brilliant minds</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Connect with fellow users, share templates, and learn new ways to expand your second brain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel rounded-xl p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Sparkles size={20} className="text-primary mr-2" />
              Top Contributors
            </h3>
            
            <div className="space-y-4">
              {communityMembers.map((member, idx) => <div key={idx} className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover shadow-md" />
                  <div className="ml-3 flex-grow">
                    <div className="font-medium text-sm">{member.name}</div>
                    <div className="text-xs text-muted-foreground">{member.role}</div>
                  </div>
                  <div className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                    {member.contribution}
                  </div>
                </div>)}
            </div>
            
            <Button variant="outline" className="mt-6 self-center">
              View All Contributors
            </Button>
          </div>
          
          <div className="glass-panel rounded-xl p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <GitBranch size={20} className="text-primary mr-2" />
              Community Resources
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="font-medium mb-1">Templates</div>
                <div className="text-3xl font-bold">328</div>
                <div className="text-xs text-muted-foreground mt-1">Shared resources</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="font-medium mb-1">Plugins</div>
                <div className="text-3xl font-bold">92</div>
                <div className="text-xs text-muted-foreground mt-1">Community extensions</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="font-medium mb-1">Workflows</div>
                <div className="text-3xl font-bold">156</div>
                <div className="text-xs text-muted-foreground mt-1">Productivity systems</div>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="font-medium mb-1">Tutorials</div>
                <div className="text-3xl font-bold">214</div>
                <div className="text-xs text-muted-foreground mt-1">Learning resources</div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <MessageSquare size={18} className="text-primary mr-2" />
              Active Discussions
            </h3>
            
            <div className="space-y-3 mb-4">
              {forums.map((forum, idx) => <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <div className="font-medium text-sm">{forum.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {forum.replies} replies • {forum.views} views
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-md">
                    {forum.category}
                  </span>
                </div>)}
            </div>
            
            <Button variant="outline" className="mt-auto self-center">
              Join the Forum
            </Button>
          </div>
        </div>
        
        
      </div>
    </AnimatedTransition>;
};