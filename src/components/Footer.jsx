import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/solid'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Keshav Anand Singh
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Full-Stack Software Engineer passionate about creating innovative solutions 
              and exploring the possibilities of AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-slate-800 pt-8"
          >
            <p className="text-slate-400 flex items-center justify-center">
              Built with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-2"
              >
                <HeartIcon className="w-5 h-5 text-red-500" />
              </motion.span>
              using React, Tailwind CSS & Framer Motion
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © {currentYear} Keshav Anand Singh. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}