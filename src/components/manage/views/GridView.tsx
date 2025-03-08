
import React from 'react';
import { Card } from '@/components/ui/card';
import { CortexItem } from '../cortex-data';

interface GridViewProps {
  items: CortexItem[];
}

const GridView = ({ items }: GridViewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <div className="mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium">
                {item.type}
              </span>
              <span className="ml-2 text-sm text-muted-foreground">{item.source}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{item.pitch}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {item.keywords.map((keyword, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded-full bg-secondary/20 text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <a href={item.url} className="text-sm text-blue-500 hover:underline">{item.url}</a>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default GridView;
