
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  showFAQs?: boolean;
}

export const FAQSection = ({ showFAQs = true }: FAQSectionProps) => {
  const [openItem, setOpenItem] = useState<string | null>("item-1");
  
  const faqs = [
    {
      id: "item-1",
      question: "What is a Digital Second Brain?",
      answer: "A Digital Second Brain is an AI-powered knowledge repository that acts as an extension of your mind. It helps you organize, connect, and retrieve information efficiently, enabling better thinking and creativity."
    },
    {
      id: "item-2",
      question: "How does Cortex differ from regular note-taking apps?",
      answer: "Unlike traditional note-taking apps, Cortex uses AI to automatically connect related concepts, visualize knowledge networks, and surface relevant information when you need it. It's designed to mimic how your brain naturally connects ideas."
    },
    {
      id: "item-3",
      question: "Is my data secure and private?",
      answer: "Yes, we take data security and privacy very seriously. All your information is encrypted, and we never share your personal data with third parties. You maintain full ownership of your content."
    },
    {
      id: "item-4",
      question: "Can I import data from other tools?",
      answer: "Absolutely! Cortex supports importing from popular tools like Notion, Evernote, Roam Research, and more. Our import process preserves your existing structure while enhancing it with AI-powered connections."
    },
    {
      id: "item-5",
      question: "Is there a mobile app available?",
      answer: "Yes, we offer mobile apps for both iOS and Android, allowing you to access and update your digital brain on the go. All changes sync seamlessly across your devices."
    }
  ];
  
  return (
    <AnimatedTransition show={showFAQs} animation="slide-up" duration={600}>
      <div className="mt-32 mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-1.5 bg-muted rounded-xl mb-4">
            <div className="bg-background px-4 py-2 rounded-lg shadow-sm">
              <HelpCircle size={22} className="inline-block mr-2 text-primary" />
              <span className="font-semibold">Frequently Asked Questions</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to know</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Learn all about your digital second brain and how it can transform your workflow
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300">
            <Accordion 
              type="single" 
              collapsible 
              value={openItem} 
              onValueChange={(value) => setOpenItem(value)}
              className="space-y-2"
            >
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border rounded-lg px-4 shadow-sm data-[state=open]:shadow-md data-[state=open]:bg-muted/20 transition-all"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};
