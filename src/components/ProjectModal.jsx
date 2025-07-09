import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-200"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            {/* Project Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Project Title Overlay */}
              <div className="absolute bottom-6 left-6 right-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    View Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600/80 backdrop-blur-sm rounded-lg text-white hover:bg-indigo-600 transition-colors duration-200"
                    >
                      <GlobeAltIcon className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Description */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    About This Project
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start text-slate-600 dark:text-slate-300"
                      >
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="space-y-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-800 dark:text-slate-200 font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}