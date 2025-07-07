import React from 'react'
import { CourseHeader } from './CourseHeader'
import { CourseSummary } from './CourseSummary'
import { EvaluationScores } from './EvaluationScores'
import { InstructorCard } from './InstructorCard'
import { SearchBar } from '../pagelayout/SearchBar'

export const CourseDetail = () => {
  const instructors = [
    {
      name: 'Bernardo Bianco Prado',
      term: 'Spring 2025',
      averageGPA: 3.695,
      averageGradeLabel: 'A-',
      mostCommonGrade: 'A',
      mostCommonGradePercentage: 74,
      studentCount: 180,
      id: 'bbianco',
    },
    {
      name: 'Shonal Gangopadhyay',
      term: 'Fall 2024',
      averageGPA: 3.508,
      averageGradeLabel: 'A-',
      mostCommonGrade: 'A',
      mostCommonGradePercentage: 57,
      studentCount: 94,
      id: 'sgangopadhyay',
    },
    {
      name: 'Dr. Matthew Hertz',
      term: 'Spring 2024',
      averageGPA: 3.4,
      averageGradeLabel: 'B+',
      mostCommonGrade: 'A-',
      mostCommonGradePercentage: 32,
      studentCount: 125,
      id: 'mhertz',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
      <SearchBar />
      <CourseHeader />
      <div className="mt-12 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-[#005bbb] mb-8 flex items-center">
          <span className="mr-2 px-2 py-1 bg-[#006570] text-white rounded text-sm">
            ALL
          </span>
          Instructors
        </h2>
        <CourseSummary />
        <div className="mt-12 mb-10">
          <EvaluationScores />
        </div>
        <div className="mt-12 space-y-8">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </div>
  )
} 