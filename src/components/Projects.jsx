import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

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