
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CortexItem, columns } from '../cortex-data';

interface TableViewProps {
  items: CortexItem[];
}

const TableView = ({ items }: TableViewProps) => {
  return (
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
        {items.map((item) => (
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
};

export default TableView;
