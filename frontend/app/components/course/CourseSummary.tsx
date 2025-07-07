import React from 'react'
import { UsersIcon } from 'lucide-react'

export const CourseSummary = () => {
  const gradeDistribution = [
    {
      grade: 'A',
      percentage: 28,
    },
    {
      grade: 'B',
      percentage: 35,
    },
    {
      grade: 'C',
      percentage: 20,
    },
    {
      grade: 'D',
      percentage: 12,
    },
    {
      grade: 'F',
      percentage: 5,
    },
  ]

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#e0eeff] px-3 py-2 rounded-md">
                  <span className="text-xl font-bold text-[#005bbb]">B</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Average Grade</div>
                  <div className="font-bold text-lg text-black">3.103 GPA</div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#e0eeff] px-3 py-2 rounded-md">
                  <span className="text-xl font-bold text-[#005bbb]">A</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Most Common</div>
                  <div className="font-bold text-lg text-black">
                    28% of grades
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <div className="bg-[#e0eeff] px-3 py-2 rounded-md">
                  <UsersIcon className="text-[#005bbb]" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Total Students</div>
                  <div className="font-bold text-lg text-black">4,232</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            This total also includes data from semesters with unknown
            instructors.
          </div>
        </div>
        <div className="col-span-1">
          <div className="h-8 w-full flex rounded-md overflow-hidden">
            {gradeDistribution.map((item, index) => (
              <div
                key={item.grade}
                className={`h-full flex items-center justify-center text-xs font-medium text-white`}
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor:
                    item.grade === 'A'
                      ? '#005bbb'
                      : item.grade === 'B'
                        ? '#3b82f6'
                        : item.grade === 'C'
                          ? '#60a5fa'
                          : item.grade === 'D'
                            ? '#93c5fd'
                            : '#bfdbfe',
                }}
              >
                {item.grade}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>F</span>
            <span>D</span>
            <span>C</span>
            <span>B</span>
            <span>A</span>
          </div>
        </div>
      </div>
    </div>
  )
} 