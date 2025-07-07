import React from 'react'
import { DepartmentHeader } from './DepartmentHeader'
import { CourseCard } from './CourseCard'
import { SearchBar } from '../pagelayout/SearchBar'
import { Footer } from '../pagelayout/Footer'

// Mock data
const courses = [
  {
    code: 'CSCI 1001',
    title: 'Overview of Computer Science',
    averageGPA: 2.721,
    mostCommonGrade: 'A',
    mostCommonGradePercentage: '17%',
    totalStudents: 133,
    distribution: [10, 15, 25, 30, 20],
  },
  {
    code: 'CSCI 1103',
    title: 'Introduction to Computer Programming in Java',
    averageGPA: 2.807,
    mostCommonGrade: 'A',
    mostCommonGradePercentage: '21%',
    totalStudents: 1024,
    distribution: [8, 12, 30, 35, 15],
  },
  {
    code: 'CSCI 1113',
    title: 'Introduction to C/C++ Programming for Scientists and Engineers',
    averageGPA: 3.103,
    mostCommonGrade: 'A',
    mostCommonGradePercentage: '28%',
    totalStudents: 4232,
    distribution: [5, 10, 25, 35, 25],
  },
]

export const DepartmentPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchBar />
        <DepartmentHeader />
        <div className="mt-8 space-y-4">
          {courses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </div>
      <Footer color="bg-[#990000]" />
    </main>
  )
} 