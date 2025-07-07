import React from 'react'
import { DepartmentPage } from '../../components/department/DepartmentPage'

interface DepartmentPageProps {
  params: {
    id: string
  }
}

export default function DepartmentDetailPage({ params }: DepartmentPageProps) {
  return <DepartmentPage />
} 