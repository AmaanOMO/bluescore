import React from 'react'
import { CourseDetail } from '../../components/course/CourseDetail'
import { Footer } from '../../components/pagelayout/Footer'

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full">
        <CourseDetail />
      </main>
      <Footer color="bg-[#005bbb]" />
    </div>
  )
} 