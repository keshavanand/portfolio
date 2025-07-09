import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  AcademicCapIcon,
  LightBulbIcon 
} from '@heroicons/react/24/outline'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend", 
      items: ["Node.js", "Django", "Express", "PostgreSQL", "Prisma"]
    },
    {
      category: "AI & ML",
      items: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "NLTK"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "Cloudflare", "Firebase"]
    }
  ]

  const highlights = [
    {
      icon: CodeBracketIcon,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies and best practices."
    },
    {
      icon: CpuChipIcon,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems and exploring the potential of artificial intelligence."
    },
    {
      icon: AcademicCapIcon,
      title: "Continuous Learning",
      description: "Currently pursuing Diploma in AI while staying updated with latest tech trends."
    },
    {
      icon: LightBulbIcon,
      title: "Innovation Focus",
      description: "Creating cutting-edge solutions that solve real-world problems effectively."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate Full-Stack Software Engineer currently pursuing a Diploma in 
              Artificial Intelligence. I love building innovative web applications and AI-powered 
              solutions that make a real difference.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My journey in technology is driven by curiosity and a constant desire to learn. 
              I specialize in React, Node.js, and Django, while exploring the fascinating world 
              of artificial intelligence and machine learning.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I believe AI has the potential to transform our world for the better, and I'm 
              excited to be part of this revolution. When I'm not coding, you'll find me 
              working on side projects or learning about the latest tech trends.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6"
            >
              <a
                href="mailto:keshavanandsingh89@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <highlight.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Skills & Technologies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}