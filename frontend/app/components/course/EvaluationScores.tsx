import React from 'react'
import { InfoIcon } from 'lucide-react'

export const EvaluationScores = () => {
  const scores = [
    {
      label: 'RECOMMEND',
      score: 4.91,
    },
    {
      label: 'EFFORT',
      score: 4.75,
    },
    {
      label: 'UNDERSTANDING',
      score: 5.37,
    },
    {
      label: 'INTERESTING',
      score: 4.84,
    },
    {
      label: 'ACTIVITIES',
      score: 5.16,
    },
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Evaluation Scores
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {scores.map((item) => (
          <div
            key={item.label}
            className="bg-white p-4 rounded-lg border border-gray-100 transition-all hover:shadow-md"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-black">{item.score}</div>
              <div className="text-xs font-medium text-gray-500 mt-1 flex items-center">
                {item.label}
                <InfoIcon size={14} className="ml-1 text-gray-400" />
                <span className="text-xs text-gray-400 ml-1">/6</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 