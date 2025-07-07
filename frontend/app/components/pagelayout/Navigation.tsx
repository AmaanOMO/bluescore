import React from 'react'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#005bbb] to-[#2f9fd0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <span className="text-xl font-bold text-[#005bbb]">BlueScore</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#005bbb] transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/department/cse" 
              className="text-gray-700 hover:text-[#005bbb] transition-colors font-medium"
            >
              Departments
            </Link>
            <Link 
              href="/course/cse115" 
              className="text-gray-700 hover:text-[#005bbb] transition-colors font-medium"
            >
              Courses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 