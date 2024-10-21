'use client'
import { ReactNode } from 'react';
import Image from 'next/image'

import { Github, Linkedin, Mail, ExternalLink, Award, Code, User, Home, Briefcase, Phone, Server, Shield, Database, GitBranch, Layers, Cloud } from 'lucide-react';

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




export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">Maxamed Maxamed</a>
          
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">MM</h1>
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

       



<section id="skills" className="py-20  bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Soft Skills",
              icon: <User size={48} className="text-blue-500" />,
              skills: ["Team Collaboration & Communication", "Time Management & Prioritization", "Problem-solving & Critical Thinking"]
            },
            {
              title: "Programming Languages",
              icon: <Code size={48} className="text-purple-500" />,
              skills: ["Java", "Python", "JavaScript", "HTML/CSS", "Kotlin", "TypeScript"]
            },
            {
              title: "Frameworks",
              icon: <Server size={48} className="text-red-500" />,
              skills: [
                "React", "Next.js", "Vue.js", "FastAPI", "Nuxt.js", "React Native", "Express.js", "Django", "Flutter"
              ]
            },
            {
              title: "Libraries",
              icon: <Layers size={48} className="text-orange-500" />,
              skills: [
                "Node.js", "Vite.js", "NPM", "Webpack", "Tailwind CSS", "Material-UI (MUI)", "Electron.js"
              ]
            },
            {
              title: "Mobile Development",
              icon: <Phone size={48} className="text-green-500" />,
              skills: ["Android Studio", "Xcode"]
            },
            {
              title: "Design & Prototyping Tools",
              icon: <Award size={48} className="text-yellow-500" />,
              skills: ["Figma", "Adobe XD", "Sketch (UI/UX Design)", "InVision (Prototyping)"]
            },
            {
              title: "Databases",
              icon: <Database size={48} className="text-indigo-500" />,
              skills: ["SQL", "MySQL", "MongoDB", "Firebase", "PostgreSQL", "Microsoft Excel", "Microsoft Access"]
            },
            {
              title: "Tools & Platforms",
              icon: <GitBranch size={48} className="text-orange-500" />,
              skills: ["Git", "GitHub", "Docker", "AWS", "VS Code", "IntelliJ IDEA", "PyCharm IDE", "Postman API Platform"]
            },
            {
              title: "Software Development",
              icon: <Briefcase size={48} className="text-teal-500" />,
              skills: ["Agile Methodologies", "Software Lifecycle Management", "Code Reviews", "CI/CD Pipelines", "GitHub Actions"]
            },
            {
              title: "APIs & Web Services",
              icon: <Server size={48} className="text-pink-500" />,
              skills: ["GraphQL", "RESTful Services"]
            },
            {
              title: "Testing Frameworks",
              icon: <Shield size={48} className="text-cyan-500" />,
              skills: ["Jest (JavaScript)", "Mocha (JavaScript)", "Chai (JavaScript)", "PyTest (Python)", "Selenium (Automated Testing)"]
            },
            {
              title: "Cloud Services",
              icon: <Cloud size={48} className="text-purple-500" />,
              skills: ["AWS (EC2, S3, Lambda)", "GCP (Firestore, Compute Engine)", "Microsoft Azure (App Service, Cosmos DB)"]
            },
            {
              title: "Security Practices",
              icon: <Shield size={48} className="text-red-500" />,
              skills: ["OAuth2", "JWT", "Secure Coding Practices", "Encryption", "Vulnerability Scanning (OWASP ZAP)"]
            },
            {
              title: "Machine Learning & Data Science",
              icon: <Award size={48} className="text-red-500" />,
              skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "Jupyter Notebooks"]
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
                    <a href="https://github.com/Maxamed-Maxamed" className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20  bg-white">
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
        



<section id="contact" className="py-20  bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h2>
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3" 
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3"
          ></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="mt-8 flex justify-center space-x-6  ">
        <a 
          href="https://linkedin.com/in/maxamed-maxamed-a87298151" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-blue-600 transition duration-200"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://github.com/Maxamed-Maxamed" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:text-gray-600 transition duration-200"
        >
          <Github size={24} />
        </a>
        <a 
          href="mailto:maxamed@example.com" 
          className="text-gray-400 hover:text-blue-600 transition duration-200"
        >
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