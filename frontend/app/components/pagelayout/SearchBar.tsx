'use client'

import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { ThreeDotLoader } from './ThreeDotLoader'
import { useRouter } from 'next/navigation'

export function SearchBar() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [loadingHref, setLoadingHref] = useState<string | null>(null)
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.length > 0) {
      setIsSearching(true)
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 800)
    } else {
      setIsSearching(false)
      setIsLoading(false)
    }
  }

  const handleResultClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setLoadingHref(href);
    router.push(href);
  }

  return (
    <div className="relative w-full">
      <div className={`transition-all duration-500 ${isSearching ? 'transform -translate-y-8' : ''}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <SearchIcon size={20} className="text-gray-500" />
        </div>
        <input
          type="search"
          className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-[#005bbb] focus:border-[#005bbb] outline-none shadow-sm"
          placeholder="Search courses, instructors, or departments..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {isSearching && (
        <div className="mt-3 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="flex space-x-1 justify-center">
                <ThreeDotLoader />
              </div>
            </div>
          ) : (
            <div className="py-3">
              <div className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
                Classes
              </div>
              <Link href="/course/cse115" className="block" onClick={handleResultClick('/course/cse115')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] border-b border-gray-100 flex items-center gap-2">
                  {loadingHref === '/course/cse115' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">
                  CSE 115 - Introduction to Computer Science
                </div>
                <div className="text-sm text-gray-600">
                  Avg. GPA: 3.2 | Sections: 5
                </div>
              </div>
                </div>
              </Link>
              <Link href="/course/cse116" className="block" onClick={handleResultClick('/course/cse116')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] border-b border-gray-100 flex items-center gap-2">
                  {loadingHref === '/course/cse116' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">
                  CSE 116 - Introduction to Computer Science II
                </div>
                <div className="text-sm text-gray-600">
                  Avg. GPA: 3.0 | Sections: 3
                </div>
              </div>
                </div>
              </Link>
              <Link href="/course/cse220" className="block" onClick={handleResultClick('/course/cse220')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] border-b border-gray-100 flex items-center gap-2">
                  {loadingHref === '/course/cse220' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">
                  CSE 220 - Systems Programming
                </div>
                <div className="text-sm text-gray-600">
                  Avg. GPA: 2.8 | Sections: 2
                </div>
              </div>
                </div>
              </Link>
              <Link href="/course/cse250" className="block" onClick={handleResultClick('/course/cse250')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] flex items-center gap-2">
                  {loadingHref === '/course/cse250' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">
                  CSE 250 - Data Structures
                </div>
                <div className="text-sm text-gray-600">
                  Avg. GPA: 2.9 | Sections: 4
                </div>
              </div>
                </div>
              </Link>
              <hr className="my-2 border-gray-200" />
              <div className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
                Instructors
              </div>
              <Link href="/instructor/john-smith" className="block" onClick={handleResultClick('/instructor/john-smith')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] border-b border-gray-100 flex items-center gap-2">
                  {loadingHref === '/instructor/john-smith' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">Dr. John Smith</div>
                <div className="text-sm text-gray-600">
                  Dept: Computer Science | Avg. GPA: 3.4
                </div>
              </div>
                </div>
              </Link>
              <Link href="/instructor/jane-doe" className="block" onClick={handleResultClick('/instructor/jane-doe')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] flex items-center gap-2">
                  {loadingHref === '/instructor/jane-doe' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">Dr. Jane Doe</div>
                <div className="text-sm text-gray-600">
                  Dept: Computer Science | Avg. GPA: 3.1
                </div>
              </div>
                </div>
              </Link>
              <hr className="my-2 border-gray-200" />
              <div className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50">
                Departments
              </div>
              <Link href="/department/cse" className="block" onClick={handleResultClick('/department/cse')}>
                <div className="px-4 py-3 hover:bg-[#f0f8ff] cursor-pointer transition-all duration-200 hover:scale-[1.01] flex items-center gap-2">
                  {loadingHref === '/department/cse' && <ThreeDotLoader />}
                  <div>
                <div className="text-[#005bbb] font-medium">
                  Computer Science & Engineering
                </div>
                <div className="text-sm text-gray-600">
                  Avg. Dept GPA: 3.2 | Courses: 45
                </div>
              </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
} 