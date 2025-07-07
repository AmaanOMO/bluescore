'use client'

import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { PartyPopperIcon, TrophyIcon, BrainIcon } from 'lucide-react'

export function Hero() {
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-[#005bbb] to-[#2f9fd0] py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-5 left-10 w-10 h-10 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-10 right-20 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse"
          style={{
            animationDelay: '1s',
          }}
        ></div>
        <div
          className="absolute bottom-5 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-20 animate-pulse"
          style={{
            animationDelay: '2s',
          }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-15 animate-pulse"
          style={{
            animationDelay: '1.5s',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-yellow-200 rounded-full opacity-20 animate-pulse"
          style={{
            animationDelay: '2.5s',
          }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-8 h-8 bg-blue-400 rounded-full opacity-15 animate-pulse"
          style={{
            animationDelay: '0.7s',
          }}
        ></div>
        <div
          className="absolute top-20 left-1/2 w-10 h-10 bg-cyan-300 rounded-full opacity-20 animate-pulse"
          style={{
            animationDelay: '3s',
          }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-6 h-6 bg-indigo-300 rounded-full opacity-25 animate-pulse"
          style={{
            animationDelay: '1.2s',
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div
          className={`flex flex-col items-center justify-center mb-6 transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-shadow">
            BlueScore
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            Your secret weapon for acing classes at UB! 🎓
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full text-xs font-medium">
              #AcademicSuccess
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full text-xs font-medium">
              #UBGrades
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-0.5 rounded-full text-xs font-medium">
              #ClassHacks
            </span>
          </div>
        </div>
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '200ms',
          }}
          id="search-container"
        >
          <SearchBar />
        </div>
        <div
          className={`mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 transform ${animateIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{
            transitionDelay: '400ms',
          }}
          id="features-container"
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#005bbb] to-[#2f9fd0] rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-lg">
              <PartyPopperIcon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Find Easy A's
            </h3>
            <p className="text-white/80 text-sm">
              Discover which courses have the highest success rates!
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2f9fd0] to-[#4dc4ff] rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-lg">
              <TrophyIcon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Compare Professors
            </h3>
            <p className="text-white/80 text-sm">
              Find professors with the most fair grading styles!
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4dc4ff] to-[#006570] rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-lg">
              <BrainIcon size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Study Smarter
            </h3>
            <p className="text-white/80 text-sm">
              Get insights for balanced semesters!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 