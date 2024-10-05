"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Course {
  id: string;
  title: string;
  chapters: Chapter[];
}

interface Chapter {
  title: string;
  lessons: string[];
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // In a real application, you would fetch this data from your backend
    const fetchCourses = async () => {
      // Simulating an API call
      const mockCourses: Course[] = [
        {
          id: '1',
          title: 'Introduction to React',
          chapters: [
            {
              title: 'Getting Started',
              lessons: ['What is React?', 'Setting up your environment'],
            },
            {
              title: 'React Basics',
              lessons: ['Components', 'Props and State'],
            },
          ],
        },
        // Add more mock courses here
      ];
      setCourses(mockCourses);
    };

    fetchCourses();
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {course.chapters.map((chapter, index) => (
                  <li key={index}>
                    {chapter.title} ({chapter.lessons.length} lessons)
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}