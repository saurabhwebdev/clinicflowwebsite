import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

type FeatureModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  iconBgClass: string;
  iconColorClass: string;
};

const FeatureModal = ({ 
  isOpen, 
  onClose, 
  title, 
  icon, 
  content,
  iconBgClass,
  iconColorClass
}: FeatureModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center mb-4">
            <div className={`${iconBgClass} w-10 h-10 rounded-lg flex items-center justify-center mr-3`}>
              <div className={iconColorClass}>
                {icon}
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          </div>
          <DialogDescription className="sr-only">
            Detailed information about {title}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto my-4 relative" style={{ maxHeight: 'calc(70vh - 200px)' }}>
          <div className="overflow-y-auto pr-4 h-full custom-scrollbar" style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(156, 163, 175, 0.5) transparent' 
          }}>
            <div className="prose max-w-none p-1">
              {content}
            </div>
          </div>
          {/* Visible scrollbar indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-gray-100 rounded-full">
            <div className="absolute top-0 right-0 w-2 bg-gray-400 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                style={{ 
                  height: '30%', // This will vary based on content
                }}></div>
          </div>
        </div>
        
        <DialogFooter className="mt-2">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Add custom scrollbar styles
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.7);
    border-radius: 10px;
    border: 2px solid transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.9);
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}

export default FeatureModal; 