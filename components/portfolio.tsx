'use client'
import { ReactNode } from 'react';
import Image from 'next/image'
import { Github, Linkedin, Mail, ExternalLink, Award, Code, User, Home, Briefcase, Phone, Server, Shield, Database, GitBranch } from 'lucide-react'


interface NavItemProps {
  icon: ReactNode;
  label: string;
  section: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, section }) => (
  <a href={`#${section}`} className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors">
    {icon}
    <span className="ml-2">{label}</span>
  </a>
)


// const NavItem = ({ icon, label, section }) => (
//   <a href={`#${section}`} className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors">
//     {icon}
//     <span className="ml-2">{label}</span>
//   </a>
// )

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">MM</a>
          <div className="hidden md:flex space-x-4">
            <NavItem icon={<Home size={18} />} label="Home" section="home" />
            <NavItem icon={<User size={18} />} label="About" section="about" />
            <NavItem icon={<Briefcase size={18} />} label="Projects" section="projects" />
            <NavItem icon={<Award size={18} />} label="Certifications" section="certifications" />
            <NavItem icon={<Phone size={18} />} label="Contact" section="contact" />
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">Maxamed Maxamed</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">Aspiring Full Stack Developer & Cybersecurity Enthusiast</p>
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              View My Work
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:pr-8">                
            <Image 
                  src="/mine.jpeg?height=400&width=400" 
                  alt="Maxamed Maxamed"
                  width={300} 
                  height={300}
                  className="rounded-full  shadow-lg object-center "
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-6 text-gray-600">
                  Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University. 
                  AWS Certified Cloud Practitioner and currently pursuing CompTIA Security+. I am passionate about developing secure, 
                  efficient applications and continuously improving my skills in both software development and cybersecurity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Stack Development",
                  icon: <Code size={48} className="text-blue-500" />,
                  skills: ["JavaScript", "Python", "Java", "React", "Node.js", "HTML/CSS"]
                },
                {
                  title: "Cloud Technologies",
                  icon: <Server size={48} className="text-purple-500" />,
                  skills: ["AWS", "Cloud Deployment", "Serverless", "Docker"]
                },
                {
                  title: "Cybersecurity",
                  icon: <Shield size={48} className="text-red-500" />,
                  skills: ["Network Security", "Penetration Testing", "Security Audits"]
                },
                {
                  title: "Database Management",
                  icon: <Database size={48} className="text-green-500" />,
                  skills: ["SQL", "MongoDB", "Firebase", "Data Modeling"]
                },
                {
                  title: "Version Control",
                  icon: <GitBranch size={48} className="text-orange-500" />,
                  skills: ["Git", "GitHub", "GitLab", "Branching Strategies"]
                },
                {
                  title: "API Development",
                  icon: <Server size={48} className="text-indigo-500" />,
                  skills: ["RESTful APIs", "GraphQL", "API Security", "Swagger"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {category.icon}
                      <h3 className="text-xl font-semibold ml-4 text-gray-800">{category.title}</h3>
                    </div>
                    <ul className="list-disc list-inside">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-gray-600">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Hydration Mate",
                  description: "Mobile app to track daily water intake",
                  tech: ["React Native", "Firebase", "Node.js"],
                  image: "/img.png?height=200&width=300"
                },
                {
                  title: "E-commerce Platform",
                  description: "Full-stack online shopping platform",
                  tech: ["React", "Node.js", "MongoDB", "Stripe"],
                  image: "/E-commercePlatform.jpeg?height=200&width=300"
                },
                {
                  title: "Vulnerability Assessment Tool",
                  description: "Automated security scanning tool",
                  tech: ["Python", "Docker", "REST APIs"],
                  image: "/VulnerabilityAssessmentTool.jpeg?height=200&width=300"
                },
                {
                  title: "Movie Web Application",
                  description: "React-based movie browsing and rating app",
                  tech: ["React", "Redux", "TMDB API"],
                  image: "/MovieApp.jpeg?height=200&width=300"
                },
                {
                  title: "Real-Time Chat Application",
                  description: "Secure messaging app with end-to-end encryption",
                  tech: ["Socket.io", "React", "Node.js", "MongoDB"],
                  image: "/Chat.jpeg?height=200&width=300"
                }
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "AWS Certified Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  date: "June 2023",
                  logo: "/aws.png?height=100&width=100"
                },
                {
                  name: "CompTIA Security+ (In Progress)",
                  issuer: "CompTIA",
                  date: "Expected December 2023",
                  logo: "/CompTIA Security+.png?height=100&width=100"
                }
              ].map((cert, index) => (
                <div key={index} className="flex items-center bg-white rounded-lg p-6 shadow-md">
                  <Image src={cert.logo} alt={cert.name} width={100} height={100} className="mr-6" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-gray-500">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Me</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                  </button>
                </div>
              </form>
              <div className="mt-8 flex justify-center space-x-6">
                <a href="https://linkedin.com/in/maxamed-maxamed-a87298151" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Maxamed-Maxamed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <Github size={24} />
                </a>
                <a href="mailto:maxamed@example.com" className="text-gray-400 hover:text-blue-500">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Maxamed Maxamed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}