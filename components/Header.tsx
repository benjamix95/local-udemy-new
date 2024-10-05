"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Local Udemy
        </Link>
        <nav className="space-x-4">
          <Link href="/courses">My Courses</Link>
          <Link href="/udemy-sync">Udemy Sync</Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </nav>
      </div>
    </header>
  );
}