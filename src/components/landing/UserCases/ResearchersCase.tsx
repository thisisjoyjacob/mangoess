
import { Brain } from 'lucide-react';
import { UserCase } from '../UseCasesTypes';

interface ResearchersProps {
  data: UserCase;
}

const ResearchersCase = ({ data }: ResearchersProps) => {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
        <Brain className="max-w-full h-auto w-64 mx-auto text-primary" />
        <div className="absolute right-12 top-12 bg-white px-4 py-2 rounded-full text-red-500 font-medium shadow-sm flex items-center">
          <span className="size-3 bg-red-500 rounded-full mr-2"></span>
          Cognitive Functions
        </div>
      </div>
    </div>
  );
};

export default ResearchersCase;
