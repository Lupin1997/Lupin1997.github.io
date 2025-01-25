import  { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Menu, X, Phone, MapPin, Download, Heart, Camera, Palette, Book } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', isButton: true }
  ];

  const technicalSkills = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "RESTful APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
  ];

  const designSkills = [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Adobe Lightroom",
    "Adobe Fresco"
  ];

  const softSkills = [
    "Time Management",
    "Adaptability",
    "Attention to Details",
    "Problem Solving",
    "Effective Communication",
    "Teamwork"
  ];

  const interests = [
    { name: "UPSC", icon: Book },
    { name: "Coding", icon: Code2 },
    { name: "UI Designing", icon: Palette },
    { name: "Travelling", icon: MapPin },
    { name: "Graphic Designing", icon: Heart },
    { name: "Drawing", icon: Palette },
    { name: "Architecture Photography", icon: Camera },
    { name: "Landscape Photography", icon: Camera }
  ];

  const projects = [
    {
      id: 1,
      title: "Quantum Visionaries",
      description: "Interactive whiteboard with drawing tools, adjustable colors, and stroke sizes. Features include undo/redo functionality and save options. Implemented login/signup system and responsive design.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techStack: ["JavaScript", "CSS3", "HTML", "Git"],
      links: {
        github: "https://github.com/Lupin1997",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "Social Media Analytics",
      description: "Built a comprehensive analytics platform tracking social media performance metrics and trends. Features responsive settings page and data-driven insights for enhanced user engagement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techStack: ["CSS3", "HTML5", "JavaScript"],
      links: {
        github: "https://github.com/Lupin1997",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Zerodha Clone",
      description: "A pixel-perfect clone of Zerodha's trading platform featuring responsive design and interactive charts. Implemented using multiple frontend technologies.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techStack: ["React", "Chakra UI", "Bootstrap", "JavaScript"],
      links: {
        github: "https://github.com/Lupin1997",
        demo: "#"
      }
    },
    {
      id: 4,
      title: "LinkedIn Clone",
      description: "Developed a responsive clone of LinkedIn's interface with focus on UI/UX and modern design principles.",
      image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      techStack: ["React", "Chakra UI", "JavaScript", "CSS3"],
      links: {
        github: "https://github.com/Lupin1997",
        demo: "#"
      }
    }
  ];

  return (
    <div className="h-screen w-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-indigo-600">
              Lupin Sahu
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    item.isButton 
                      ? "bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 ${
                    item.isButton
                      ? "bg-indigo-600 text-white px-4 rounded-lg"
                      : "text-gray-600 hover:text-indigo-600"
                  } transition-colors`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-blue-50 to-indigo-50 px-4 pt-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80"
              alt="Lupin Sahu"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">Lupin Sahu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Full Stack Developer | UI Designer | Photography Enthusiast
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/Lupin1997" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/lupin-sahu1997" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:lupinsahu@gmail.com"
               className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a
            href="/Lupin-Sahu-Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-600" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                <User className="text-indigo-600" />
                About Me
              </h2>
              <p className="text-gray-600 mb-4">
                Based in Raipur, Chhattisgarh, I'm a passionate full-stack developer with a keen eye for creating elegant solutions.
                My expertise spans across modern web technologies and design tools, allowing me to build applications that are both
                functional and visually appealing.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-indigo-600" />
                  <span>Raipur, Chhattisgarh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-indigo-600" />
                  <span>+91 7828883548</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-indigo-600" />
                  <span>lupinsahu@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center">
            <Code2 className="text-indigo-600" />
            Skills & Expertise
          </h2>
          
          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-center font-medium text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Design Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {designSkills.map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-center font-medium text-gray-800">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-center font-medium text-gray-800">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((interest) => (
                <div key={interest.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <interest.icon className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                  <p className="text-center font-medium text-gray-800">{interest.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center flex items-center gap-2 justify-center">
            <Briefcase className="text-indigo-600" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500 ml-4"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:lupinsahu@gmail.com"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors"
            >
              <Mail size={20} />
              lupinsahu@gmail.com
            </a>
            <a
              href="tel:+917828883548"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors"
            >
              <Phone size={20} />
              +91 7828883548
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Lupin Sahu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;