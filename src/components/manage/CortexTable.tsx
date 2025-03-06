
import React, { useState } from 'react';
import { Search, Filter, Plus, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type CortexItem = {
  id: string;
  title: string;
  link: string;
  type: string;
  source: string;
  keywords: string[];
  pitch: string;
};

const CortexTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const cortexItems: CortexItem[] = [
    {
      id: '1',
      title: 'Neural networks fundamentals',
      link: '/cortex/neural-networks',
      type: 'Article',
      source: 'Research Paper',
      keywords: ['AI', 'Machine Learning', 'Deep Learning'],
      pitch: 'Foundational knowledge on neural networks'
    },
    {
      id: '2',
      title: 'Cloud architecture patterns',
      link: '/cortex/cloud-patterns',
      type: 'Guide',
      source: 'Internal Knowledge',
      keywords: ['Cloud', 'Architecture', 'Patterns'],
      pitch: 'Best practices for cloud systems'
    },
    {
      id: '3',
      title: 'UX research methods',
      link: '/cortex/ux-research',
      type: 'Collection',
      source: 'External Website',
      keywords: ['UX', 'Research', 'Design'],
      pitch: 'Comprehensive guide to UX research'
    },
    {
      id: '4',
      title: 'Product strategy',
      link: '/cortex/product-strategy',
      type: 'Template',
      source: 'Team Workshop',
      keywords: ['Product', 'Strategy', 'Management'],
      pitch: 'Framework for product strategy'
    },
    {
      id: '5',
      title: 'JavaScript patterns',
      link: '/cortex/js-patterns',
      type: 'Code',
      source: 'Book',
      keywords: ['JavaScript', 'Patterns', 'Development'],
      pitch: 'Effective JavaScript patterns and practices'
    }
  ];

  const columns = [
    { id: 'title', name: 'Title', sortable: true },
    { id: 'link', name: 'Link', sortable: false },
    { id: 'type', name: 'Type', sortable: true },
    { id: 'source', name: 'Source', sortable: true },
    { id: 'keywords', name: 'Keywords', sortable: false },
    { id: 'pitch', name: 'Pitch', sortable: true },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search cortexes..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus size={16} className="mr-2" />
            New Cortex
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.id} className="py-2">
                  <div className="flex items-center">
                    {column.name}
                    {column.sortable && (
                      <Button variant="ghost" size="sm" className="ml-1 h-6 w-6 p-0">
                        <ArrowUpDown size={14} />
                      </Button>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {cortexItems.map((item) => (
              <TableRow key={item.id} className="hover:bg-muted/30">
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="text-blue-500 hover:underline">
                  <a href={item.link}>{item.link}</a>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium">
                    {item.type}
                  </span>
                </TableCell>
                <TableCell>{item.source}</TableCell>
                <TableCell>
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
                </TableCell>
                <TableCell>{item.pitch}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CortexTable;
