import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart2, 
  Database, 
  GitBranch, 
  LineChart,
  Mail,
  Github,
  Linkedin,
  Book,
  Heart,
  Award,
  X,
  Menu
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.span 
              className="text-white font-bold text-xl cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
            >
              Nithiswaran
            </motion.span>

            {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
              <motion.button
                onClick={() => scrollToSection('home')}
                className="relative text-gray-100 font-medium transition-all duration-300 group hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('skills')}
                className="relative text-gray-100 font-medium transition-all duration-300 group hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                Skills
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('experience')}
                className="relative text-gray-100 font-medium transition-all duration-300 group hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                Careers
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="relative text-gray-100 font-medium transition-all duration-300 group hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </div>


            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-gray-900 rounded-b-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-4 space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-gray-100 hover:text-white py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block w-full text-left text-gray-100 hover:text-white py-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="block w-full text-left text-gray-100 hover:text-white py-2"
                >
                  Careers
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-gray-100 hover:text-white py-2"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <Section>
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800" id="home">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
          </div>
          {/* Rest of the hero section content remains the same */}
          <div className="container mx-auto px-4 text-center z-10">
            <motion.img
              src="src\Nithis Profile.png"
              alt="Your Name"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nithiswaran V
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-100 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Data Analyst
            </motion.p>
            <motion.p 
              className="text-lg text-gray-200 leading-relaxed mb-6 max-w-3xl mx-auto text-center font-eurostile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Passionate about transforming complex data into actionable insights, with over 1 year of experience in data analysis, visualization, and machine learning to drive impactful solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center space-x-4"
            >
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
              <a href="#experience" className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                View Experience
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <div className="py-20 bg-white" id="experience">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Professional Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="timeline-item">
                <h3 className="text-xl font-semibold text-gray-800">Analyst</h3>
                <p className="text-blue-600">Objectways Technologies | 2024 - Present</p>
                <p className="text-gray-600 mt-2">
                  Led a team of analysts in developing predictive models for customer behavior analysis.
                  Increased customer retention by 25% through data-driven insights.
                </p>
              </div>
              <div className="timeline-item">
                <h3 className="text-xl font-semibold text-gray-800">XML Developer</h3>
                <p className="text-blue-600">Octalpoint Technologies | 2022 - 2024</p>
                <p className="text-gray-600 mt-2">
                Skilled in HTML, CSS, XML, and E-pub projects, with expertise in web design, IEEE data conversion, and data analysis to deliver accurate and optimized digital solutions.
                </p>
              </div>
              <div className="timeline-item">
                <h3 className="text-xl font-semibold text-gray-800">INSTITUTION</h3>
                <p className="text-blue-600">SREE SARASWATHI THYAGARAJA COLLEGE | 2018 - 2021</p>
                <p className="text-gray-600 mt-2">
                Focused on software development, data structures, algorithms, database management, and web technologies. Completed projects, including a Gym Management System using SQL, to manage member data, attendance, and payments while optimizing data handling, ensuring accuracy, and enabling efficient report generation.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <div className="py-20 bg-gray-900" id="skills">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Technical Knowledge</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="p-6 bg-gray-800 rounded-xl card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <Database className="w-12 h-12 text-blue-500 mb-4 skill-icon" />
                <h3 className="text-xl font-semibold mb-2 text-white">Data Management</h3>
                <p className="text-gray-400">SQL, PostgreSQL, MongoDB</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-800 rounded-xl card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <BarChart2 className="w-12 h-12 text-blue-500 mb-4 skill-icon" />
                <h3 className="text-xl font-semibold mb-2 text-white">Data Visualization</h3>
                <p className="text-gray-400">Power BI, Microsoft Excel (advanced charting)</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-800 rounded-xl card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <LineChart className="w-12 h-12 text-blue-500 mb-4 skill-icon" />
                <h3 className="text-xl font-semibold mb-2 text-white">Analysis Tools</h3>
                <p className="text-gray-400">Python, R, Excel</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-800 rounded-xl card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <GitBranch className="w-12 h-12 text-blue-500 mb-4 skill-icon" />
                <h3 className="text-xl font-semibold mb-2 text-white">Version Control</h3>
                <p className="text-gray-400">Git, GitHub</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interests & Hobbies Section */}
      <Section>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Beyond the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="p-6 bg-gray-50 rounded-xl text-center card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600">Always exploring new data analysis techniques and tools</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-50 rounded-xl text-center card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Photography</h3>
                <p className="text-gray-600">Capturing moments and analyzing patterns in nature</p>
              </motion.div>
              <motion.div 
                className="p-6 bg-gray-50 rounded-xl text-center card-hover"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Chess</h3>
                <p className="text-gray-600">Strategic thinking and pattern recognition</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="py-20 bg-gray-900" id="contact">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">Get in Touch</h2>
            <div className="max-w-xl mx-auto">
              <div className="flex justify-center space-x-6 mb-8">
                <motion.a 
                  href="nithiswaran018@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://github.com/nithiswaran018" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/nithiswaran-analyst" 
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-100 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Nithiswaran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;