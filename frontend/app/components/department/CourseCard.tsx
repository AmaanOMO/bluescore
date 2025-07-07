'use client'

import React, { useState } from 'react'
import { GradeDistribution } from './GradeDistribution'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { ThreeDotLoader } from '../pagelayout/ThreeDotLoader'
import { useRouter } from 'next/navigation'

interface Course {
  code: string
  title: string
  averageGPA: number
  mostCommonGrade: string
  mostCommonGradePercentage: string
  totalStudents: number
  distribution: number[]
}

interface CourseCardProps {
  course: Course
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  // Convert course code to URL-friendly format
  const courseId = course.code.toLowerCase().replace(/\s+/g, '')

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/course/${course.code.toLowerCase().replace(/\s+/g, '')}`);
  }

  return (
    <Link href={`/course/${course.code.toLowerCase().replace(/\s+/g, '')}`} className="block" onClick={handleClick}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer flex items-center">
        {isLoading && (
          <div className="pl-2 pr-3"><ThreeDotLoader /></div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-[#005bbb]">
              {course.code}
            </h2>
            <ChevronRightIcon size={20} className="text-gray-400" />
          </div>
          <p className="text-gray-700">{course.title}</p>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Average GPA</p>
              <p className="font-semibold">{course.averageGPA}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Most Common</p>
              <p className="font-semibold">
                {course.mostCommonGrade} ({course.mostCommonGradePercentage})
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Students</p>
              <p className="font-semibold">
                {course.totalStudents.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="w-48 h-24">
          <GradeDistribution data={course.distribution} />
        </div>
      </div>
    </Link>
  )
} 