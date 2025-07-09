import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { EyeIcon, CodeBracketIcon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion'

// Project Card Component
function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
            >
              <EyeIcon className="w-5 h-5" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <CodeBracketIcon className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Project Modal Component
function ProjectModal({ project, onClose }) {
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

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Blog Web Application",
      category: "django",
      description: "A comprehensive blog application built with Django, featuring user authentication, tagging, post recommendations, and full-text search.",
      image: "./blog-django.png",
      technologies: ["Django", "PostgreSQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/keshavanand",
      demo: "#",
      features: [
        "User authentication and authorization",
        "Advanced tagging system with recommendations",
        "Full-text search with PostgreSQL",
        "SEO optimization and responsive design",
        "Robust commenting system"
      ]
    },
    {
      id: 2,
      title: "Spam Detection System",
      category: "ai",
      description: "Machine learning system for detecting spam in social media comments using NLP and classification algorithms.",
      image: "./kattperry_ai_comment.png",
      technologies: ["Python", "NLTK", "Scikit-learn", "Pandas"],
      github: "https://github.com/keshavanand",
      demo: "#",
      features: [
        "Text preprocessing with NLTK",
        "TF-IDF feature extraction",
        "Naive Bayes classification",
        "Real-time spam detection",
        "Cross-validation for model reliability"
      ]
    },
    {
      id: 3,
      title: "Modern Blogging Platform",
      category: "react",
      description: "A modern blogging platform with serverless backend, featuring secure authentication and responsive design.",
      image: "./medium.png",
      technologies: ["React", "Cloudflare Workers", "TypeScript", "Prisma"],
      github: "https://github.com/keshavanand",
      demo: "#",
      features: [
        "Serverless backend with Cloudflare Workers",
        "JWT-based authentication",
        "TypeScript for type safety",
        "Responsive design with Tailwind CSS",
        "Real-time content management"
      ]
    },
    {
      id: 4,
      title: "Social Networking Platform",
      category: "django",
      description: "Dynamic social platform with real-time notifications, image sharing, and social authentication.",
      image: "./social.png",
      technologies: ["Django", "Django Channels", "PostgreSQL", "OAuth"],
      github: "https://github.com/keshavanand",
      demo: "#",
      features: [
        "Real-time notifications with Django Channels",
        "Social authentication with OAuth",
        "Image bookmarking and sharing",
        "User following system",
        "Interactive community features"
      ]
    },
    {
      id: 5,
      title: "Traffic Accident Classifier",
      category: "ai",
      description: "ML model predicting traffic accident severity using environmental data and deployed as a web API.",
      image: "./ksi_ai.png",
      technologies: ["Python", "Flask", "Scikit-learn", "TensorFlow"],
      github: "https://github.com/keshavanand",
      demo: "#",
      features: [
        "Machine learning model for severity prediction",
        "Web API deployment with Flask",
        "Real-time inference capabilities",
        "Data preprocessing and feature engineering",
        "Urban planning insights"
      ]
    },
    {
      id: 6,
      title: "Payment Platform",
      category: "next",
      description: "Comprehensive payment solution with QR codes, bank transfers, and merchant features.",
      image: "./paytm.png",
      technologies: ["Next.js", "Express", "PostgreSQL", "Prisma"],
      github: "https://github.com/keshavanand",
      demo: "#",
      features: [
        "Secure money transfers via phone/QR",
        "Bank webhook integration",
        "Merchant QR code generation",
        "Multi-user role management",
        "Real-time transaction updates"
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'django', label: 'Django' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'react', label: 'React' },
    { id: 'next', label: 'Next.js' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, AI/ML, and full-stack applications
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}