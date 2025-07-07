'use client'

import React, { useState } from 'react'
import { UsersIcon, AwardIcon, CalendarIcon, BarChart2Icon } from 'lucide-react'
import Link from 'next/link'
import { ThreeDotLoader } from '../pagelayout/ThreeDotLoader'
import { useRouter } from 'next/navigation'

interface Instructor {
  name: string
  term: string
  averageGPA: number
  averageGradeLabel: string
  mostCommonGrade: string
  mostCommonGradePercentage: number
  studentCount: number
  id: string
}

interface InstructorCardProps {
  instructor: Instructor
}

export const InstructorCard = ({ instructor }: InstructorCardProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  // Generate random distribution data for the mini chart
  const generateDistribution = () => {
    const grades = ['F', 'D', 'C', 'B', 'A']
    return grades.map((grade) => {
      let percentage = 0
      if (grade === instructor.mostCommonGrade) {
        percentage = instructor.mostCommonGradePercentage
      } else {
        percentage = Math.floor(
          (Math.random() * (100 - instructor.mostCommonGradePercentage)) / 4,
        )
      }
      return {
        grade,
        percentage,
      }
    })
  }

  const gradeDistribution = generateDistribution()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/instructor/${instructor.id}`);
  }

  return (
    <Link href={`/instructor/${instructor.id}`} className="block" onClick={handleClick}>
      <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex items-center">
        {isLoading && (
          <div className="pl-4 pr-2"><ThreeDotLoader /></div>
        )}
        <div className="flex-1">
      <div className="border-b border-gray-100 bg-gradient-to-r from-[#f8f9fa] to-white p-5">
        <div className="flex items-center gap-3 mb-2">
          <AwardIcon size={22} className="text-[#006570]" />
          <h3 className="text-xl font-semibold text-gray-800">
            {instructor.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-gray-600 ml-9">
          <CalendarIcon size={16} className="text-gray-400" />
          <span>{instructor.term}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#f0f7f7] rounded-lg border border-[#e0eeee]">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#006570] text-white">
                <span className="font-bold">
                  {instructor.averageGradeLabel}
                </span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                  Average GPA
                </div>
                <div className="font-bold text-lg text-gray-800">
                  {instructor.averageGPA.toFixed(3)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-[#f0f7f7] rounded-lg border border-[#e0eeee]">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#006570] text-white">
                <UsersIcon size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                  Total Students
                </div>
                <div className="font-bold text-lg text-gray-800">
                  {instructor.studentCount}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <BarChart2Icon size={18} className="text-[#006570] mr-2" />
              <span className="text-sm font-medium text-gray-600">
                Grade Distribution
              </span>
            </div>
            <div className="flex-1 flex items-end space-x-2 mt-2">
              {gradeDistribution.map((item) => (
                <div
                  key={item.grade}
                  className="flex flex-col items-center flex-1"
                >
                  <div className="w-full bg-gray-100 rounded-t-sm relative">
                    <div
                      className="absolute bottom-0 w-full rounded-t-sm transition-all duration-500"
                      style={{
                        height: `${item.percentage * 1.2}px`,
                        backgroundColor:
                          item.grade === 'A'
                            ? '#005bbb'
                            : item.grade === 'B'
                              ? '#3b82f6'
                              : item.grade === 'C'
                                ? '#60a5fa'
                                : item.grade === 'D'
                                  ? '#93c5fd'
                                  : '#006570',
                      }}
                    />
                  </div>
                  <div className="text-xs font-medium text-gray-600 mt-1">
                    {item.grade}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-center text-gray-500 mt-2">
              <span className="inline-block px-2 py-1 bg-[#f0f7f7] rounded-full">
                Most common: {instructor.mostCommonGrade} (
                {instructor.mostCommonGradePercentage}%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </Link>
  )
} 