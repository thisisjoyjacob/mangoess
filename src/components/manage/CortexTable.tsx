
import React, { useState } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import TableView from './views/TableView';
import GridView from './views/GridView';
import ListView from './views/ListView';
import KanbanView from './views/KanbanView';
import { cortexItems } from './cortex-data';

interface CortexTableProps {
  viewType?: 'table' | 'grid' | 'list' | 'kanban';
}

const CortexTable = ({ viewType = 'table' }: CortexTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter items based on search query
  const filteredItems = searchQuery 
    ? cortexItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.writer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cortexItems;

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
        {viewType === 'table' && <TableView items={filteredItems} />}
        {viewType === 'grid' && <GridView items={filteredItems} />}
        {viewType === 'list' && <ListView items={filteredItems} />}
        {viewType === 'kanban' && <KanbanView items={filteredItems} />}
      </div>
    </div>
  );
};

export default CortexTable;
