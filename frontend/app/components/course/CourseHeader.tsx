import React from 'react'
import { ExternalLinkIcon } from 'lucide-react'

export const CourseHeader = () => {
  return (
    <header className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center">
        <div className="w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#800000] mb-2">
            CSCI 1113: Introduction to C/C++ Programming for Scientists and
            Engineers
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-700 mb-4">
            <span className="bg-[#005bbb] text-white px-3 py-1 rounded-full text-sm font-medium">
              4 Credits
            </span>
          </div>
          <p className="text-gray-700 mb-4">
            Programming for scientists/engineers. C/C++ programming constructs,
            object-oriented programming, software development, fundamental
            numerical techniques. Exercises/examples from various scientific
            fields. prereq: Math 1271 or Math 1371 or Math 1571H or instr
            consent.
          </p>
          <a
            href="https://catalog.buffalo.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#005bbb] hover:text-[#003c7e] transition-colors"
          >
            <span>View on University Catalog</span>
            <ExternalLinkIcon size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </header>
  )
} 