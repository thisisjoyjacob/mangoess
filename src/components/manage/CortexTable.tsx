import React, { useState } from 'react';
import { Search, Filter, Plus, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
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
  url: string;
  type: string;
  createdDate: string;
  source: string;
  keywords: string[];
  pitch: string;
  writer: string;
};

interface CortexTableProps {
  viewType?: 'table' | 'grid' | 'list' | 'kanban';
}

const CortexTable = ({ viewType = 'table' }: CortexTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const cortexItems: CortexItem[] = [
    {
      id: '1',
      title: 'Neural networks fundamentals',
      url: '/cortex/neural-networks',
      type: 'Article',
      createdDate: '2023-04-15',
      source: 'Research Paper',
      keywords: ['AI', 'Machine Learning', 'Deep Learning'],
      pitch: 'Foundational knowledge on neural networks',
      writer: 'Alex Johnson'
    },
    {
      id: '2',
      title: 'Cloud architecture patterns',
      url: '/cortex/cloud-patterns',
      type: 'Guide',
      createdDate: '2023-05-22',
      source: 'Internal Knowledge',
      keywords: ['Cloud', 'Architecture', 'Patterns'],
      pitch: 'Best practices for cloud systems',
      writer: 'Sarah Miller'
    },
    {
      id: '3',
      title: 'UX research methods',
      url: '/cortex/ux-research',
      type: 'Collection',
      createdDate: '2023-06-10',
      source: 'External Website',
      keywords: ['UX', 'Research', 'Design'],
      pitch: 'Comprehensive guide to UX research',
      writer: 'David Chen'
    },
    {
      id: '4',
      title: 'Product strategy',
      url: '/cortex/product-strategy',
      type: 'Template',
      createdDate: '2023-07-05',
      source: 'Team Workshop',
      keywords: ['Product', 'Strategy', 'Management'],
      pitch: 'Framework for product strategy',
      writer: 'Emily Rodriguez'
    },
    {
      id: '5',
      title: 'JavaScript patterns',
      url: '/cortex/js-patterns',
      type: 'Code',
      createdDate: '2023-08-18',
      source: 'Book',
      keywords: ['JavaScript', 'Patterns', 'Development'],
      pitch: 'Effective JavaScript patterns and practices',
      writer: 'Michael Park'
    }
  ];

  const columns = [
    { id: 'title', name: 'Title', sortable: true },
    { id: 'url', name: 'URL', sortable: false },
    { id: 'type', name: 'Type', sortable: true },
    { id: 'createdDate', name: 'Created Date', sortable: true },
    { id: 'keywords', name: 'Keywords', sortable: false },
    { id: 'source', name: 'Source', sortable: true },
    { id: 'pitch', name: 'Pitch', sortable: false },
    { id: 'writer', name: 'Writer', sortable: true },
  ];

  const renderTableView = () => (
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
              <a href={item.url}>{item.url}</a>
            </TableCell>
            <TableCell>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-xs font-medium">
                {item.type}
              </span>
            </TableCell>
            <TableCell>{item.createdDate}</TableCell>
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
            <TableCell>{item.source}</TableCell>
            <TableCell>{item.pitch}</TableCell>
            <TableCell>{item.writer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cortexItems.map((item) => (
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

  const renderListView = () => (
    <div className="flex flex-col gap-3 p-4">
      {cortexItems.map((item) => (
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

  const renderKanbanView = () => (
    <div className="flex gap-4 p-4 overflow-x-auto h-full">
      {['To Read', 'In Progress', 'Completed'].map((column) => (
        <div key={column} className="flex-shrink-0 w-72 bg-card rounded-md shadow-sm">
          <div className="p-3 border-b border-border/50">
            <h3 className="font-medium">{column}</h3>
          </div>
          <div className="p-2 flex flex-col gap-2">
            {cortexItems.slice(0, column === 'To Read' ? 3 : column === 'In Progress' ? 1 : 1).map((item) => (
              <Card key={item.id} className="p-3 bg-background hover:shadow-md transition-shadow">
                <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                <div className="mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{item.pitch}</p>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

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
        {viewType === 'table' && renderTableView()}
        {viewType === 'grid' && renderGridView()}
        {viewType === 'list' && renderListView()}
        {viewType === 'kanban' && renderKanbanView()}
      </div>
    </div>
  );
};

export default CortexTable;
