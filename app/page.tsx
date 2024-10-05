import CourseList from '@/components/CourseList';
import UploadCourse from '@/components/UploadCourse';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Welcome to Local Udemy</h1>
      <UploadCourse />
      <CourseList />
    </div>
  );
}