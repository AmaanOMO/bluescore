import React from 'react'
import { GithubIcon, LinkedinIcon, HomeIcon } from 'lucide-react'

interface FooterProps {
  color?: string
}

export function Footer({ color }: FooterProps) {
  return (
    <footer className={`w-full ${color ? color : 'bg-gradient-to-r from-[#005bbb] to-[#2f9fd0]'} border-t border-white/20 py-12 text-white`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 text-center max-w-sm">
              <img
                src="/myImages/amaan.png"
                alt="Amaan Sheikh"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-white/30"
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                Amaan Sheikh
              </h3>
              <p className="text-white/80 mb-4">Founder & Developer</p>
              <div className="flex justify-center space-x-3">
                <a
                  href="https://www.linkedin.com/in/amaansheikh-swe/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href="https://github.com/AmaanOMO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href="https://www.amaans.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <HomeIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-white/20 pt-8">
            <p className="text-white/80 mb-2">
              Not affiliated with the University at Buffalo.
            </p>
            <p className="text-white/80 mb-4">
              Data pending public records request via NY FOIL.
            </p>
            <p className="text-white/90">
              Made by Amaan Sheikh · 2025 · BlueScore.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 