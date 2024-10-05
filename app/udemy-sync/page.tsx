"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

export default function UdemySync() {
  const [udemyEmail, setUdemyEmail] = useState('');
  const [udemyPassword, setUdemyPassword] = useState('');

  const handleSync = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the logic to connect to Udemy and sync courses
    // This is a placeholder for the actual implementation
    console.log('Syncing with Udemy:', { udemyEmail, udemyPassword });

    toast({
      title: "Udemy Sync Started",
      description: "We're connecting to your Udemy account and syncing your courses.",
    });

    // Simulating a sync process
    setTimeout(() => {
      toast({
        title: "Udemy Sync Completed",
        description: "Your Udemy courses have been added to your local library.",
      });
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Sync with Udemy</h1>
      <form onSubmit={handleSync} className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="udemy-email">Udemy Email</Label>
          <Input
            id="udemy-email"
            type="email"
            value={udemyEmail}
            onChange={(e) => setUdemyEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="udemy-password">Udemy Password</Label>
          <Input
            id="udemy-password"
            type="password"
            value={udemyPassword}
            onChange={(e) => setUdemyPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Sync Udemy Courses</Button>
      </form>
    </div>
  );
}