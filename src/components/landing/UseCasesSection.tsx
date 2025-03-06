import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Plus, Brain } from 'lucide-react';

interface UseCasesSectionProps {
  show: boolean;
}

type UserType = 'Marketers' | 'Designers' | 'Writers' | 'Researchers' | 'Developers' | 'Everyone';

const UseCasesSection = ({ show }: UseCasesSectionProps) => {
  const [activeUserType, setActiveUserType] = useState<UserType>('Marketers');

  const userCases = {
    Marketers: {
      title: 'Save and find quotes & highlights',
      subtitle: 'that inspire you.',
      description: "nature scene now feels like a stimulation. We are overloaded with digital imagery. The internet has delivered the world to us on a silver platter from the glacial landscapes of Greenland to the cracks lining the Sahara desert. We've seen the deep ocean, microscopic bacteria, the insides of our own bodies.",
      quote: "True change is within.",
      background: 'bg-[#ff4d3c]',
      textColor: 'text-white',
      ctaText: 'SAVE TO MY MIND',
    },
    Designers: {
      title: 'Create instant, boundless',
      subtitle: 'visual moodboards.',
      description: '',
      quote: '',
      background: 'bg-[#d8ede7]',
      textColor: 'text-black',
      ctaText: '',
      showImageGrid: true
    },
    Writers: {
      title: 'Write without',
      subtitle: 'distractions.',
      description: '',
      quote: '',
      background: 'bg-[#f7c2d2]',
      textColor: 'text-black',
      ctaText: 'ADD NEW NOTE',
      showNotepad: true
    },
    Researchers: {
      title: 'Collect all your research &',
      subtitle: 'references in one place.',
      description: '',
      quote: '',
      background: 'bg-[#e8f4f8]', 
      textColor: 'text-black',
      ctaText: '',
      showBrain: true
    },
    Developers: {
      title: 'Your private',
      subtitle: 'resource & reference hub.',
      description: '',
      quote: '',
      background: 'bg-[#1a1f2c]',
      textColor: 'text-white',
      ctaText: '',
      showDevTools: true
    },
    Everyone: {
      title: 'A place for everything',
      subtitle: 'you want to remember.',
      description: '',
      quote: '',
      background: 'bg-[#e8ecf0]',
      textColor: 'text-black',
      ctaText: '',
      showTags: true
    }
  };

  const currentCase = userCases[activeUserType];

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
            For visual minds of all kinds.
          </h2>
          
          <div className="flex justify-center space-x-8 mb-10">
            {Object.keys(userCases).map((type) => (
              <button
                key={type}
                className={`relative pb-1 ${activeUserType === type ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground transition-colors'}`}
                onClick={() => setActiveUserType(type as UserType)}
              >
                {type}
                {activeUserType === type && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
          
          <div className={`rounded-xl overflow-hidden transition-all duration-500 ${currentCase.background} ${currentCase.textColor}`}>
            <div className="p-10 md:p-16">
              <div className="text-center mb-4">
                <p className="uppercase tracking-wide text-sm font-medium mb-6">Made for {activeUserType}</p>
                <h3 className="text-4xl md:text-5xl font-medium mb-2">
                  {currentCase.title} 
                  <span className="block italic font-light">{currentCase.subtitle}</span>
                </h3>
              </div>
              
              {activeUserType === 'Marketers' && (
                <div className="max-w-3xl mx-auto my-12">
                  <p className="text-lg mb-8">{currentCase.description}</p>
                  <div className="bg-yellow-200 text-black p-6 rounded mb-8 max-w-md mx-auto">
                    <p className="text-4xl italic font-light">"{currentCase.quote}"</p>
                  </div>
                  <div className="flex justify-end">
                    <Button className="rounded-full bg-white text-black hover:bg-white/90">
                      <Plus className="mr-2 h-4 w-4" />
                      {currentCase.ctaText}
                    </Button>
                  </div>
                </div>
              )}
              
              {activeUserType === 'Designers' && (
                <div className="grid grid-cols-3 gap-4 my-10">
                  <div className="col-span-1 aspect-square bg-[url('/lovable-uploads/e9b4097a-d906-451f-8476-e60aa00e3b44.png')] bg-cover rounded-lg"></div>
                  <div className="col-span-2 aspect-video bg-[url('/lovable-uploads/fdcdb8ad-4473-4fcb-981f-b6697318306a.png')] bg-cover rounded-lg"></div>
                  <div className="col-span-1 aspect-square bg-[url('/lovable-uploads/dbe4697c-1ebb-4e1c-adf1-75bffdf12d36.png')] bg-cover rounded-lg"></div>
                  <div className="col-span-1 aspect-square bg-[url('/lovable-uploads/e1444c90-aa39-471b-bb58-8958fd86426f.png')] bg-cover rounded-lg"></div>
                  <div className="col-span-1 aspect-square bg-[url('/lovable-uploads/7704384c-5fe5-46ba-8c72-ca477b964153.png')] bg-cover rounded-lg"></div>
                </div>
              )}
              
              {activeUserType === 'Writers' && (
                <div className="max-w-md mx-auto my-12 bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-primary uppercase font-medium text-sm mb-4">{currentCase.ctaText}</p>
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
              )}
              
              {activeUserType === 'Researchers' && (
                <div className="flex flex-col items-center justify-center my-12">
                  <div className="size-16 rounded-full bg-black flex items-center justify-center mb-10">
                    <div className="text-white">▶</div>
                  </div>
                  <div className="relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
                    <Brain className="max-w-full h-auto w-64 mx-auto text-primary" />
                    <div className="absolute right-12 top-12 bg-white px-4 py-2 rounded-full text-red-500 font-medium shadow-sm flex items-center">
                      <span className="size-3 bg-red-500 rounded-full mr-2"></span>
                      Cognitive Functions
                    </div>
                  </div>
                </div>
              )}
              
              {activeUserType === 'Developers' && (
                <div className="max-w-3xl mx-auto my-12">
                  <div className="bg-[#121416] text-gray-300 rounded-lg p-4 mt-4">
                    <div className="flex items-center border-b border-gray-700 pb-3 mb-3">
                      <div className="text-gray-400 italic flex-1">Search my mind...</div>
                      <div className="text-gray-400">⌘K</div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-[#1c1e20] rounded p-3">
                        <div className="flex items-center mb-2">
                          <div className="size-4 rounded-full bg-gray-600 mr-2"></div>
                          <span className="text-sm">GitHub</span>
                        </div>
                        <p className="text-xs text-gray-400">Tailwind Labs</p>
                      </div>
                      <div className="bg-[#1c1e20] rounded p-3">
                        <p className="bg-gray-700 text-xs inline-block px-1 rounded mb-1">$5999</p>
                        <div className="h-12 bg-gradient-to-b from-blue-900 to-blue-950 rounded"></div>
                      </div>
                      <div className="bg-[#1c1e20] rounded p-3">
                        <div className="size-10 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeUserType === 'Everyone' && (
                <div className="flex justify-center my-12">
                  <div className="flex flex-wrap gap-8 max-w-3xl">
                    <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">
                      #readlater
                    </div>
                    <div className="w-64 h-64 bg-[url('/lovable-uploads/e9b4097a-d906-451f-8476-e60aa00e3b44.png')] bg-cover bg-center rounded-xl shadow-md"></div>
                    <div className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700">
                      #apartmentdecor
                    </div>
                    <div className="w-64 h-64 bg-[url('/lovable-uploads/e1444c90-aa39-471b-bb58-8958fd86426f.png')] bg-cover bg-center rounded-xl shadow-md"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default UseCasesSection;
