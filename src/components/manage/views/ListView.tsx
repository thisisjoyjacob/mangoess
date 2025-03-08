
import React from 'react';
import { CortexItem } from '../cortex-data';

interface ListViewProps {
  items: CortexItem[];
}

const ListView = ({ items }: ListViewProps) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      {items.map((item) => (
        <div key={item.id} className="flex border-b border-border/50 pb-3">
          <div className="flex-1">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <div className="flex items-center gap-3 mt-1 mb-2">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium">
                {item.type}
              </span>
              <span className="text-sm text-muted-foreground">{item.source}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{item.pitch}</p>
            <div className="flex flex-wrap gap-1">
              {item.keywords.map((keyword, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded-full bg-secondary/20 text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <a href={item.url} className="text-sm text-blue-500 hover:underline">{item.url}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
