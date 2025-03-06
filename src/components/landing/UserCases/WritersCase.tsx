
import { UserCase } from '../UseCasesTypes';

interface WritersProps {
  data: UserCase;
}

const WritersCase = ({ data }: WritersProps) => {
  return (
    <div className="max-w-md mx-auto my-12 bg-white rounded-lg p-6 shadow-sm">
      <p className="text-primary uppercase font-medium text-sm mb-4">{data.ctaText}</p>
      <p className="text-xl font-medium mb-4 text-black">Promote our new campaign</p>
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="h-5 w-5 rounded-full border border-gray-200 flex items-center justify-center bg-blue-100">
            <div className="h-3 w-3 rounded-full bg-blue-400"></div>
          </div>
          <p className="ml-3 text-gray-400 line-through">Post ads to instagram</p>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 rounded-full border border-gray-200"></div>
          <p className="ml-3 text-gray-700">Write emails</p>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 rounded-full border border-gray-200"></div>
          <p className="ml-3 text-gray-700">Proof read newsletter copy</p>
        </div>
        <div className="flex items-center">
          <div className="h-5 w-5 rounded-full border border-gray-200"></div>
          <p className="ml-3 text-gray-400">Write drafts for blog post</p>
        </div>
      </div>
    </div>
  );
};

export default WritersCase;
