"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

export default function UploadCourse() {
  const [selectedFolder, setSelectedFolder] = useState<FileList | null>(null);

  const handleFolderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFolder(files);
    }
  };

  const handleUpload = async () => {
    if (!selectedFolder) {
      toast({
        title: "No folder selected",
        description: "Please select a course folder to upload.",
        variant: "destructive",
      });
      return;
    }

    // Here you would implement the logic to process the selected folder
    // and upload the course structure to your backend
    console.log('Processing folder:', selectedFolder);

    // Simulating an upload process
    toast({
      title: "Course upload started",
      description: "Your course is being processed and uploaded.",
    });

    // In a real application, you would send the data to your backend
    // and handle the response accordingly
    setTimeout(() => {
      toast({
        title: "Course uploaded successfully",
        description: "Your course has been added to your library.",
      });
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Upload New Course</h2>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="course-folder">Course Folder</Label>
        <Input
          id="course-folder"
          type="file"
          webkitdirectory="true"
          onChange={handleFolderSelect}
        />
      </div>
      <Button onClick={handleUpload}>Upload Course</Button>
    </div>
  );
}