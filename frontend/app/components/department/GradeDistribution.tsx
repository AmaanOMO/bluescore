import React from 'react'

interface GradeDistributionProps {
  data: number[]
  showTotal?: boolean
  totalStudents?: number
}

export const GradeDistribution = ({
  data,
  showTotal = false,
  totalStudents,
}: GradeDistributionProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-gray-400">
      (Grade distribution chart coming soon)
      {showTotal && (
        <p className="text-sm text-gray-500 text-center mt-2">
          {totalStudents?.toLocaleString()} total students
        </p>
      )}
    </div>
  )
} 