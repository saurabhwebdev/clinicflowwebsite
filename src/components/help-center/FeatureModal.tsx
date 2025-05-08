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
        
        <ScrollArea className="flex-1 overflow-auto my-4" style={{ maxHeight: 'calc(70vh - 200px)' }}>
          <div className="prose max-w-none p-1">
            {content}
          </div>
        </ScrollArea>
        
        <DialogFooter className="mt-2">
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureModal; 