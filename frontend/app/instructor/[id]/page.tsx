import React from 'react'
import { BookOpenIcon, UsersIcon, TrendingUpIcon } from 'lucide-react'
import { Footer } from '../../components/pagelayout/Footer'
import { SearchBar } from '../../components/pagelayout/SearchBar'

interface InstructorPageProps {
  params: {
    id: string
  }
}

const courseData = [
  {
    code: 'CSE 116',
    name: 'Computer Science II',
    terms: ['Fall 2023', 'Spring 2024'],
    gpa: 3.4,
    // distribution removed
  },
  {
    code: 'CSE 220',
    name: 'Systems Programming',
    terms: ['Spring 2024'],
    gpa: 3.2,
    // distribution removed
  }
]

export default function InstructorPage({ params }: InstructorPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-6 py-8">
        <SearchBar />
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Dr. Sarah Johnson
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-[#005bbb]/10 p-3 rounded-lg">
                <TrendingUpIcon className="w-6 h-6 text-[#005bbb]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Average GPA</p>
                <p className="text-2xl font-bold text-gray-900">3.42</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-[#00a69c]/10 p-3 rounded-lg">
                <BookOpenIcon className="w-6 h-6 text-[#00a69c]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Most Common Grade</p>
                <p className="text-2xl font-bold text-gray-900">A</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-[#2f9fd0]/10 p-3 rounded-lg">
                <UsersIcon className="w-6 h-6 text-[#2f9fd0]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">324</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
          <h3 className="text-xl font-semibold mb-6">
            Overall Grade Distribution
          </h3>
          <div className="h-32 flex items-center justify-center text-gray-400">
            (Grade distribution chart coming soon)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">RateMyProfessor</h3>
            <p className="text-4xl font-bold text-[#005bbb]">
              4.8<span className="text-lg text-gray-500">/5.0</span>
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold mb-2">Course Difficulty</h3>
            <p className="text-4xl font-bold text-[#00a69c]">
              3.2<span className="text-lg text-gray-500">/5.0</span>
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6">Courses Taught</h3>
        <div className="space-y-6">
          {courseData.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold">
                    {course.code}: {course.name}
                  </h4>
                  <p className="text-gray-600 mt-1">
                    {course.terms.join(', ')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Average GPA</p>
                  <p className="text-xl font-bold text-[#005bbb]">
                    {course.gpa}
                  </p>
                </div>
              </div>
              <div className="h-16 flex items-center justify-center text-gray-300">
                (Course grade chart coming soon)
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer color="bg-[#005bbb]" />
    </div>
  )
} 