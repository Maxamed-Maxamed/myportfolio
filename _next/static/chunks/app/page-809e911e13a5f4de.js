(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6373:function(e,s,t){Promise.resolve().then(t.bind(t,2114))},2114:function(e,s,t){"use strict";t.d(s,{PortfolioComponent:function(){return k}});var i=t(7437),a=t(3145),l=t(2265),n=t(6595),o=t(2489),r=t(6840),c=t(4938),d=t(2369),m=t(5005),x=t(3327),h=t(3041),g=t(4935),u=t(6137),b=t(8124),j=t(91),p=t(3781),f=t(8906),N=t(1341),y=t(6362),v=t(598),w=t(5135),S=t(9345);let C=e=>{let{icon:s,label:t,section:a,onClose:l}=e;return(0,i.jsxs)("a",{href:"#".concat(a),className:"flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors",onClick:l,children:[s,(0,i.jsx)("span",{className:"ml-2",children:t})]})};function k(){let[e,s]=(0,l.useState)(!1),[t,k]=(0,l.useState)({name:"",email:"",message:""}),[M,P]=(0,l.useState)(!1),[A,z]=(0,l.useState)(null),Z=e=>{let{name:s,value:t}=e.target;k(e=>({...e,[s]:t}))},T=async e=>{e.preventDefault(),P(!0),z(null);try{let e=await n.ZP.send("service_j6341b9","template_xmhyfe4",{from_name:t.name,from_email:t.email,message:t.message,to_name:"Maxamed"},"gf4G3_0Rtpd19bJ6x");200===e.status&&(z("success"),k({name:"",email:"",message:""}))}catch(e){console.error("Failed to send email:",e),z("error")}finally{P(!1)}};return(0,i.jsxs)("div",{className:"min-h-screen bg-gray-50 font-sans",children:[(0,i.jsxs)("nav",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50",children:[(0,i.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,i.jsx)("a",{href:"#home",className:"text-2xl font-bold text-blue-600",children:"MM"}),(0,i.jsx)("div",{className:"lg:hidden",children:(0,i.jsx)("button",{onClick:()=>s(!e),className:"text-gray-500 hover:text-gray-600",children:e?(0,i.jsx)(o.Z,{size:24}):(0,i.jsx)(r.Z,{size:24})})}),(0,i.jsxs)("div",{className:"hidden lg:flex space-x-4",children:[(0,i.jsx)(C,{icon:(0,i.jsx)(c.Z,{size:18}),label:"Home",section:"home",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(d.Z,{size:18}),label:"About",section:"about",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(m.Z,{size:18}),label:"Projects",section:"projects",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(x.Z,{size:18}),label:"Certifications",section:"certifications",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(h.Z,{size:18}),label:"Contact",section:"contact",onClose:()=>s(!1)})]})]}),e&&(0,i.jsx)("div",{className:"lg:hidden absolute top-full left-0 right-0 bg-white shadow-md",children:(0,i.jsxs)("div",{className:"px-4 py-2 space-y-2",children:[(0,i.jsx)(C,{icon:(0,i.jsx)(c.Z,{size:18}),label:"Home",section:"home",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(d.Z,{size:18}),label:"About",section:"about",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(m.Z,{size:18}),label:"Projects",section:"projects",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(x.Z,{size:18}),label:"Certifications",section:"certifications",onClose:()=>s(!1)}),(0,i.jsx)(C,{icon:(0,i.jsx)(h.Z,{size:18}),label:"Contact",section:"contact",onClose:()=>s(!1)})]})})]}),(0,i.jsxs)("main",{className:"pt-16",children:[(0,i.jsx)("section",{id:"home",className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100",children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h1",{className:"text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-800",children:"Maxamed Maxamed"}),(0,i.jsx)("p",{className:"text-xl md:text-2xl mb-8 text-gray-600",children:"Aspiring Full Stack Developer & Cybersecurity Enthusiast"}),(0,i.jsx)("a",{href:"#projects",className:"bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors",children:"View My Work"})]})}),(0,i.jsx)("section",{id:"about",className:"py-20 bg-white",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-800",children:"About Me"}),(0,i.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-between",children:[(0,i.jsx)("div",{className:"md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:pr-8",children:(0,i.jsx)(a.default,{src:"/mine.jpeg?height=400&width=400",alt:"Maxamed Maxamed",width:300,height:300,className:"rounded-full  shadow-lg object-center "})}),(0,i.jsx)("div",{className:"md:w-1/2",children:(0,i.jsx)("p",{className:"text-lg mb-6 text-gray-600",children:"Recent Computer Science graduate with a BSc in Software Systems Development from South East Technological University. AWS Certified Cloud Practitioner and currently pursuing CompTIA Security+. I am passionate about developing secure, efficient applications and continuously improving my skills in both software development and cybersecurity."})})]})]})}),(0,i.jsx)("section",{id:"skills",className:"py-20  bg-white",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-800",children:"Skills & Expertise"}),(0,i.jsx)("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Soft Skills",icon:(0,i.jsx)(d.Z,{size:48,className:"text-blue-500"}),skills:["Team Collaboration & Communication","Time Management & Prioritization","Problem-solving & Critical Thinking"]},{title:"Programming Languages",icon:(0,i.jsx)(g.Z,{size:48,className:"text-purple-500"}),skills:["Java","Python","JavaScript","HTML/CSS","Kotlin","TypeScript"]},{title:"Frameworks",icon:(0,i.jsx)(u.Z,{size:48,className:"text-red-500"}),skills:["React","Next.js","Vue.js","FastAPI","Nuxt.js","React Native","Express.js","Django","Flutter"]},{title:"Libraries",icon:(0,i.jsx)(b.Z,{size:48,className:"text-orange-500"}),skills:["Node.js","Vite.js","NPM","Webpack","Tailwind CSS","Material-UI (MUI)","Electron.js"]},{title:"Mobile Development",icon:(0,i.jsx)(h.Z,{size:48,className:"text-green-500"}),skills:["Android Studio","Xcode"]},{title:"Design & Prototyping Tools",icon:(0,i.jsx)(x.Z,{size:48,className:"text-yellow-500"}),skills:["Figma","Adobe XD","Sketch (UI/UX Design)","InVision (Prototyping)"]},{title:"Databases",icon:(0,i.jsx)(j.Z,{size:48,className:"text-indigo-500"}),skills:["SQL","MySQL","MongoDB","Firebase","PostgreSQL","Microsoft Excel","Microsoft Access"]},{title:"Tools & Platforms",icon:(0,i.jsx)(p.Z,{size:48,className:"text-orange-500"}),skills:["Git","GitHub","Docker","AWS","VS Code","IntelliJ IDEA","PyCharm IDE","Postman API Platform"]},{title:"Software Development",icon:(0,i.jsx)(m.Z,{size:48,className:"text-teal-500"}),skills:["Agile Methodologies","Software Lifecycle Management","Code Reviews","CI/CD Pipelines","GitHub Actions"]},{title:"APIs & Web Services",icon:(0,i.jsx)(u.Z,{size:48,className:"text-pink-500"}),skills:["GraphQL","RESTful Services"]},{title:"Testing Frameworks",icon:(0,i.jsx)(f.Z,{size:48,className:"text-cyan-500"}),skills:["Jest (JavaScript)","Mocha (JavaScript)","Chai (JavaScript)","PyTest (Python)","Selenium (Automated Testing)"]},{title:"Cloud Services",icon:(0,i.jsx)(N.Z,{size:48,className:"text-purple-500"}),skills:["AWS (EC2, S3, Lambda)","GCP (Firestore, Compute Engine)","Microsoft Azure (App Service, Cosmos DB)"]},{title:"Security Practices",icon:(0,i.jsx)(f.Z,{size:48,className:"text-red-500"}),skills:["OAuth2","JWT","Secure Coding Practices","Encryption","Vulnerability Scanning (OWASP ZAP)"]},{title:"Machine Learning & Data Science",icon:(0,i.jsx)(x.Z,{size:48,className:"text-red-500"}),skills:["TensorFlow","PyTorch","Scikit-Learn","Pandas","Jupyter Notebooks"]}].map((e,s)=>(0,i.jsx)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsxs)("div",{className:"flex items-center mb-4",children:[e.icon,(0,i.jsx)("h3",{className:"text-xl font-semibold ml-4 text-gray-800",children:e.title})]}),(0,i.jsx)("ul",{className:"list-disc list-inside",children:e.skills.map((e,s)=>(0,i.jsx)("li",{className:"text-gray-600",children:e},s))})]})},s))})]})}),(0,i.jsx)("section",{id:"projects",className:"py-20 bg-white",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-800",children:"Projects"}),(0,i.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{title:"Hydration Mate",description:"Mobile app to track daily water intake",tech:["React Native","Firebase","Node.js"],image:"/img.png?height=200&width=300"},{title:"E-commerce Platform",description:"Full-stack online shopping platform",tech:["React","Node.js","MongoDB","Stripe"],image:"/E-commercePlatform.jpeg?height=200&width=300"},{title:"Vulnerability Assessment Tool",description:"Automated security scanning tool",tech:["Python","Docker","REST APIs"],image:"/VulnerabilityAssessmentTool.jpeg?height=200&width=300"},{title:"Movie Web Application",description:"React-based movie browsing and rating app",tech:["React","Redux","TMDB API"],image:"/MovieApp.jpeg?height=200&width=300"},{title:"Real-Time Chat Application",description:"Secure messaging app with end-to-end encryption",tech:["Socket.io","React","Node.js","MongoDB"],image:"/Chat.jpeg?height=200&width=300"}].map((e,s)=>(0,i.jsxs)("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[(0,i.jsx)(a.default,{src:e.image,alt:e.title,width:300,height:200,className:"w-full h-48 object-cover"}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold mb-2 text-gray-800",children:e.title}),(0,i.jsx)("p",{className:"text-gray-600 mb-4",children:e.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:e.tech.map((e,s)=>(0,i.jsx)("span",{className:"bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded",children:e},s))}),(0,i.jsxs)("a",{href:"https://github.com/Maxamed-Maxamed",className:"text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center",children:["View Project ",(0,i.jsx)(y.Z,{size:16,className:"ml-1"})]})]})]},s))})]})}),(0,i.jsx)("section",{id:"certifications",className:"py-20  bg-white",children:(0,i.jsxs)("div",{className:"container mx-auto px-4",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold mb-8 text-center text-gray-800",children:"Certifications"}),(0,i.jsx)("div",{className:"grid md:grid-cols-2 gap-8",children:[{name:"AWS Certified Cloud Practitioner",issuer:"Amazon Web Services",date:"June 2023",logo:"/aws.png?height=100&width=100"},{name:"CompTIA Security+ (In Progress)",issuer:"CompTIA",date:"Expected December 2023",logo:"/CompTIA Security+.png?height=100&width=100"}].map((e,s)=>(0,i.jsxs)("div",{className:"flex items-center bg-white rounded-lg p-6 shadow-md",children:[(0,i.jsx)(a.default,{src:e.logo,alt:e.name,width:100,height:100,className:"mr-6"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-semibold mb-2 text-gray-800",children:e.name}),(0,i.jsx)("p",{className:"text-gray-600",children:e.issuer}),(0,i.jsx)("p",{className:"text-gray-500",children:e.date})]})]},s))})]})}),(0,i.jsx)("section",{id:"contact",className:"py-20 bg-gradient-to-br from-blue-50 to-indigo-100",children:(0,i.jsxs)("div",{className:"container mx-auto px-6",children:[(0,i.jsx)("h2",{className:"text-4xl font-bold mb-8 text-center text-gray-900",children:"Contact Me"}),(0,i.jsxs)("div",{className:"max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8",children:[(0,i.jsxs)("form",{onSubmit:T,className:"space-y-6",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-800",children:"Name"}),(0,i.jsx)("input",{type:"text",id:"name",name:"name",value:t.name,onChange:Z,className:"mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-800",children:"Email"}),(0,i.jsx)("input",{type:"email",id:"email",name:"email",value:t.email,onChange:Z,className:"mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3",required:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-800",children:"Message"}),(0,i.jsx)("textarea",{id:"message",name:"message",value:t.message,onChange:Z,rows:4,className:"mt-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-3",required:!0})]}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{type:"submit",disabled:M,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ".concat(M?"bg-blue-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"," focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"),children:M?"Sending...":"Send Message"})}),"success"===A&&(0,i.jsx)("div",{className:"p-4 bg-green-100 text-green-700 rounded-md",children:"Message sent successfully! I'll get back to you soon."}),"error"===A&&(0,i.jsx)("div",{className:"p-4 bg-red-100 text-red-700 rounded-md",children:"Failed to send message. Please try again later."})]}),(0,i.jsxs)("div",{className:"mt-8 flex justify-center space-x-6",children:[(0,i.jsx)("a",{href:"https://linkedin.com/in/maxamed-maxamed-a87298151",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-blue-600 transition duration-200",children:(0,i.jsx)(v.Z,{size:24})}),(0,i.jsx)("a",{href:"https://github.com/Maxamed-Maxamed",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-gray-600 transition duration-200",children:(0,i.jsx)(w.Z,{size:24})}),(0,i.jsx)("a",{href:"mailto:maxamed.maxamed4331@gmail.com",className:"text-gray-400 hover:text-blue-600 transition duration-200",children:(0,i.jsx)(S.Z,{size:24})})]})]})]})})]}),(0,i.jsx)("footer",{className:"bg-gradient-to-br from-blue-50 to-indigo-100  text-black py-8",children:(0,i.jsx)("div",{className:"container mx-auto px-4 text-center",children:(0,i.jsx)("p",{children:"\xa9 2024 Maxamed Maxamed. All rights reserved."})})})]})}}},function(e){e.O(0,[640,971,117,744],function(){return e(e.s=6373)}),_N_E=e.O()}]);