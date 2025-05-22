import './index.css'
import Canvas from './canvas';
import { useEffect } from 'react';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';
 

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
       <nav className="w-full h-20 bg-red flex justify-center text-white relative">
          <div className="w-[90%] md:w-[80%] flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">Yash Kankhare</h1>
            
            {/* Mobile menu button */}
            <div className="relative md:hidden">
              <button 
                className="z-20"
                onClick={() => {
                  const mobileMenu = document.querySelector('.mobile-menu');
                  mobileMenu.classList.toggle('!block');
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Mobile navigation - hidden by default */}
              <div className="mobile-menu md:hidden absolute top-10 right-0 w-[200px] bg-red py-4 hidden rounded-lg shadow-lg z-10">
                {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                  <a 
                    key={index} 
                    href={`#${link.toLowerCase()}`} 
                    className="block py-2 px-4 text-right hover:bg-red-700 transition-colors"
                    onClick={() => {
                      const mobileMenu = document.querySelector('.mobile-menu');
                      mobileMenu.classList.remove('!block');
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex text-md gap-10">
              {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                <a 
                  key={index} 
                  href={`#${link.toLowerCase()}`} 
                  className="hover:text-gray-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </nav>
      <div className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center">
       
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
       
        <div className="text-container bg-black px-4 sm:px-8 md:px-16 lg:px-[30%] w-full"> 
          <div className="text w-full text-white bg-black text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[-7] px-4">
              Yash Kankhare Full Stack Developer
            </h1>
            <p className='flex justify-center gap-1 text-shadow-md leading-7 text-sm sm:text-base md:text-lg mt-4'>
              Learning What Matters
            </p>
          </div>
        </div>
       
      </div>
      <div id="about" className="w-full relative min-h-screen bg-black text-white px-4 py-16 mt-24 overflow-visible ">
        {data[4].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-8 md:justify-between -z-1">
          <div className="max-w-2xl text-center md:text-left z-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 z-0">About Me</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6 z-0">
              Hello! I'm Yash Kankhare, I am a Full Stack Developer specializing in building robust, scalable web applications using React.js for the frontend and Node.js for the backend. I have a strong foundation in designing and implementing end-to-end solutions that prioritize performance, usability, and maintainability. 
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6">
            My work reflects a deep understanding of modern web development best practices, and I thrive in collaborative, agile environments. Currently, I am also broadening my technical expertise by gaining exposure to DevOps fundamentals to better support deployment and infrastructure workflows.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              When I'm not coding or managing infrastructure, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the tech community.
            </p>
          </div>
          <div className="relative w-full max-w-[300px] md:max-w-[400px] ">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-white/10">
              <img 
                src="/src/image/Profile.png" 
                alt="Yash Kankhare" 
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-500 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
      <div id="skills" className="w-full relative min-h-screen bg-black text-white px-4 py-16 mt-24 overflow-visible -z-2">
          {data[2].map((canvasdets, index) => (
           <Canvas details={canvasdets} key={index} />
           ))}
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-2xl font-light mb-12 text-gray-300 bg-transparent z-1">
           "A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST."
             </p>
    
            <h2 className="text-5xl font-bold text-center mb-8">Skills & Experience</h2>
    
             <p className="text-center text-xl text-gray-300 mb-6 max-w-3xl mx-auto bg-transparent ">
                 The main area of expertise is in Backend and modern Frontend development. I build Modern and Attractive UI using React.js and Scalable Backend using Node.js.
             </p>
    
             <p className="text-center mb-16">
                   Visit my{" "}
             <a 
                href="https://www.linkedin.com/in/yashk0504/" 
               className="text-blue-400 hover:text-blue-300 underline"
               target="_blank"
              rel="noopener noreferrer"
             >
              LinkedIn
            </a>{" "}
               for more details.
             </p>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[
        { name: "React", img: "/public/images/reactjs.png" },
        { name: "Node.js", img: "/public/images/nodejs.png" },
        { name: "GSAP", img: "/public/images/gsap.png" },
        { name: "Docker", img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
        { name: "Docker Compose", img: "https://raw.githubusercontent.com/docker/compose/master/logo.png" },,
        { name: "Terraform", img: "/public/images/terraform.png" },
        { name: "AWS", img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Linux", img: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
        { name: "CI/CD", img: "https://about.gitlab.com/images/ci/gitlab-ci-cd-logo_2x.png" },
        { name: "GitHub Actions", img: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" }
      ].map((skill, index) => (
        <div 
          key={index}
          className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer border border-white/10"
        >
          <div className="w-12 h-12 flex items-center justify-center text-gray-300 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className="text-xs font-medium text-center">{skill.name}</span>
        </div>
      ))}
            </div>
            </div>
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">

           <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
      </div>
      <div id="projects" className="w-full relative min-h-screen text-white flex flex-col justify-center items-center gap-8 px-4 py-16">
        {/* Canvas background elements */}
        {data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}

        <p className="text-center text-2xl font-light mb-8 text-gray-300">
          "Practice Makes a Man Perfect"
        </p>

        <h2 className="text-5xl font-bold text-center mb-12">My Personal Projects</h2>
        
        {/* Project showcase content */}
        <div className="z-10 w-full md:w-[90%] lg:w-[80%] flex flex-col gap-8">
          {/* Project cards - All follow same mobile layout, alternate on desktop */}
          {[
            {
              number: "01",
              title: "Project Alpha",
              description: "The Next generation Management System.",
              github: "project-alpha",
              image: "/images/Screenshot 2025-05-21 202656.png"
            },
            {
              number: "02",
              title: "Project Beta",
              description: "Innovative Solutions for Modern Challenges.",
              github: "project-beta",
              image: "/images/Screenshot 2025-05-21 202656.png"
            },
            {
              number: "03",
              title: "Project Gamma",
              description: "Revolutionary Tech Infrastructure.",
              github: "project-gamma",
              image: "/images/Screenshot 2025-05-21 202656.png"
            },
            {
              number: "04",
              title: "Project Delta",
              description: "Advanced Cloud Computing Solutions.",
              github: "project-delta",
              image: "/images/Screenshot 2025-05-21 202656.png"
            }
          ].map((project, index) => (
            <div key={index} className="relative flex flex-col items-center bg-[#36454F]/30 backdrop-blur-md rounded-lg border border-white/10 p-4 md:p-8">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full items-center`}>
                <a href={`https://github.com/yourusername/${project.github}`} className="absolute top-4 right-4 transition-all duration-300 hover:scale-110">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1f2937] flex items-center justify-center shadow-[0_0_15px_#4299e1] hover:shadow-[0_0_20px_#4299e1] transition-shadow">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#4299e1]" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                </a>
                <div className={`hidden md:block text-6xl md:text-[120px] lg:text-[220px] font-bold text-white opacity-80 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  {project.number}
                </div>
                <div className={`flex flex-col max-w-[600px] text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{project.title}</h2>
                  <p className="text-lg md:text-xl mb-6">{project.description}</p>
                  <div className={`flex justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <a href="#" className="bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 inline-block w-fit hover:bg-red-600 transition-colors">
                      Case Study <span className="ml-2">→</span>
                    </a>
                  </div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full md:w-[300px] h-[200px] object-cover rounded-lg brightness-75 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="education" className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center py-16">
        {data[5].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        
        <div className="container mx-auto max-w-6xl px-4 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            <span className="relative inline-block">
              Education Journey
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"></span>
            </span>
          </h2>
          
          {/* Vertical Timeline */}
          <div className="relative flex flex-col items-center">
            {/* Central vertical line */}
            <div className="absolute h-full w-1 bg-gradient-to-b from-blue-500 to-blue-400/50 rounded-full left-1/2 transform -translate-x-1/2">
              <div className="w-full h-full animate-pulse opacity-70 shadow-[0_0_15px_#3b82f6]"></div>
            </div>
            
            {/* Timeline items */}
            <div className="w-full py-8 space-y-32 md:space-y-40 relative">
              {/* 10th Grade - Right side */}
              <div className="flex items-center justify-end md:pr-8 relative group">
                <div className="w-1/2 md:w-5/12 flex flex-col items-end">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-full bg-blue-500/20 mr-4 group-hover:bg-blue-500/30 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 font-medium">2018-2019</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Secondary Education (X)</h3>
                    <p className="text-gray-400">Shree Fattechand Jain Vidyalaya</p>
                  </div>
                </div>
                
                {/* Connector and circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mr-4 group-hover:w-10 transition-all duration-300"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
              
              {/* 12th Grade - Left side */}
              <div className="flex items-center justify-start md:pl-8 relative group">
                <div className="w-1/2 md:w-5/12 flex flex-col items-start">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:-translate-x-1 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-full bg-blue-500/20 mr-4 group-hover:bg-blue-500/30 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 font-medium">2020-2021</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Higher Secondary (XII)</h3>
                    <p className="text-gray-400">Modern College of Arts, Science and Commerce</p>
                  </div>
                </div>
                
                {/* Connector and circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-8 h-1 bg-gradient-to-l from-blue-500 to-blue-400 ml-4 group-hover:w-10 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Bachelor's Degree - Right side */}
              <div className="flex items-center justify-end md:pr-8 relative group">
                <div className="w-1/2 md:w-5/12 flex flex-col items-end">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-full bg-blue-500/20 mr-4 group-hover:bg-blue-500/30 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 font-medium">2021-2025</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">B.E. Computer Science Engineering</h3>
                    <p className="text-gray-400">Indira College of Engineering And Management</p>
                  </div>
                </div>
                
                {/* Connector and circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mr-4 group-hover:w-10 transition-all duration-300"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="work-experience" className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex justify-center items-center py-16">
        {data[6].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}
        
        <div className="container mx-auto max-w-6xl px-4 z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Work Experience</h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-12">
            <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 shadow-[0_0_15px_#3b82f6]"></div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-2xl font-bold text-white">Web Developer Intern</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                    4 Months
                  </span>
                </div>
                
                <div className="text-gray-400">
                  <p className="text-lg mb-4">Yash Plastics • Dec 2024 - March 2024</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>•
                    Developed a company website, enhancing digital presence and streamlining operations with AI
                    powered tools.</li>
                    <li> •
                    Designed intuitive UI interfaces to improve user experience and engagement.</li>
                    <li> •
                    Handled billings and transactions while ensuring financial accuracy in coordination with the CA.</li>
                    <li> Assisted the MD in refining financial processes to improve workflow efficiency.</li>
                    
                  </ul>
                </div>
                
              </div>
              
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-12">
            <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 shadow-[0_0_15px_#3b82f6]"></div>
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className="text-2xl font-bold text-white">Web Developer Intern</h3>
                  <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                    2 Months
                  </span>
                </div>
                
                <div className="text-gray-400">
                  <p className="text-lg mb-4">Param Vista Technologies • Feb 2024 - April 2024</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>•
                    Developed robust backend systems using Node.js and Express.js, resulting in good improvement 
                    in response times.</li>
                    <li> •
                    Designed and deployed secure RESTful APIs, adhering to best coding practices for optimal
                    performance.</li>
                    <li> •
                    Optimized data retrieval processes through MongoDB query optimization, achieving high 
                    efficiency.</li>
                    <li> Implemented automated testing pipelines using Postman, ensuring reliable functionality and 
                    reducing development errors.</li>
                    
                  </ul>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="w-full relative min-h-screen font-[Helvetica_Now_Display] flex flex-col justify-center items-center py-16 bg-black text-white px-4">
        <footer className="w-full max-w-4xl flex flex-col items-center gap-6 text-center">
          <p className="italic text-lg sm:text-xl md:text-2xl max-w-md mx-auto">
            Let’s build something amazing together — <span className="font-semibold">hire me!</span>
          </p>
          <div className="flex gap-8 mt-4">
            <a 
              href="https://github.com/yashkankhareyk" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-white hover:text-[#00ffff] transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-10 h-10 hover:drop-shadow-[0_0_10px_#00ffff]"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/yashk0504/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-white hover:text-[#00ffff] transition-colors duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                className="w-10 h-10 hover:drop-shadow-[0_0_10px_#00ffff]"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 01-.001 4.139zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="text-lg sm:text-xl md:text-2xl">Email: <a href="mailto:yashkankhareyk.com" className="underline hover:text-[#00ffff]">yashkankhareyk.com</a></p>
            <p className="text-lg sm:text-xl md:text-2xl">Phone: <a href="tel:8669955676" className="underline hover:text-[#00ffff]">+918669955676</a></p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
