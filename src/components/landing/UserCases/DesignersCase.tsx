
import { UserCase } from '../UseCasesTypes';

interface DesignersProps {
  data: UserCase;
}

const DesignersCase = ({ data }: DesignersProps) => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="relative p-4 md:p-8 bg-white/10 backdrop-blur-sm rounded-xl">
        <div className="flex gap-4 mb-4">
          <div className="w-1/3 aspect-[4/5] bg-white/20 rounded-lg shadow-md overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <img src="/lovable-uploads/5c0593c5-5471-45ee-a093-349209e3b4f5.png" alt="Inspiration" className="w-full h-full object-cover" />
          </div>
          <div className="w-2/3 aspect-[3/2] bg-white/20 rounded-lg shadow-md overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <img src="/lovable-uploads/fdcdb8ad-4473-4fcb-981f-b6697318306a.png" alt="Design" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex gap-4 relative">
          <div className="w-1/2 aspect-[3/2] bg-white/20 rounded-lg shadow-md overflow-hidden transform translate-y-0 hover:-translate-y-1 transition-transform duration-300">
            <img src="/lovable-uploads/dbe4697c-1ebb-4e1c-adf1-75bffdf12d36.png" alt="Concept" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/4 aspect-square bg-white/20 rounded-lg shadow-md overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <img src="/lovable-uploads/e1444c90-aa39-471b-bb58-8958fd86426f.png" alt="Color palette" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/4 bg-white/20 rounded-lg p-4 shadow-md">
            <p className="text-white font-medium text-lg mb-2">Color inspiration</p>
            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-6 rounded-full bg-[#FF9F7F]"></div>
              <div className="h-6 w-6 rounded-full bg-[#FFD7A8]"></div>
              <div className="h-6 w-6 rounded-full bg-[#E8F0F8]"></div>
              <div className="h-6 w-6 rounded-full bg-[#C6DCF6]"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute right-8 top-1/3 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
          <p className="text-sm text-white font-medium">Design system</p>
        </div>
        
        <div className="absolute left-1/4 bottom-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center z-10">
          <span className="h-2 w-2 bg-blue-300 rounded-full mr-2"></span>
          <span className="text-xs text-white font-medium">Interior mood</span>
        </div>
      </div>
    </div>
  );
};

export default DesignersCase;
