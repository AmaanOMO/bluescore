import React from 'react'

export function ThreeDotLoader() {
  return (
    <span className="inline-flex items-center space-x-1" aria-label="Loading">
      <span className="w-2 h-2 bg-[#005bbb] rounded-full animate-bounce"></span>
      <span className="w-2 h-2 bg-[#2f9fd0] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
      <span className="w-2 h-2 bg-[#006570] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
    </span>
  )
} 