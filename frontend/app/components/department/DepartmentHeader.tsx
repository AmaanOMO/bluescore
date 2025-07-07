import React from 'react'
import { GradeDistribution } from './GradeDistribution'

export const DepartmentHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h1 className="text-3xl font-bold text-[#990000] mb-2">
        CSCI: Computer Science
      </h1>
      <div className="h-64 mb-6">
        <GradeDistribution
          data={[8, 15, 25, 32, 20]}
          showTotal
          totalStudents={115072}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">Average GPA</p>
          <p className="text-2xl font-bold text-[#005bbb]">3.369</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Most Common Grade</p>
          <p className="text-2xl font-bold text-[#005bbb]">A (38%)</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Students</p>
          <p className="text-2xl font-bold text-[#005bbb]">115,072</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Courses</p>
          <p className="text-2xl font-bold text-[#005bbb]">42</p>
        </div>
      </div>
    </div>
  )
} 