'use client'

import React from 'react'
import { LoadingSpinner } from './LoadingSpinner'

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" text="Loading BlueScore..." />
        <div className="mt-4">
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-[#005bbb] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#2f9fd0] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-[#006570] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
} 