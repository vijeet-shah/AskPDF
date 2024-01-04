"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Dropzone from "react-dropzone";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>Hello Put Somthing</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
