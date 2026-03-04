export default function Projects() {
  const portfolio = [
     {
      title: "music streaming plateform",
      desc: "add free music streaming plateform made using tailwind css and javascript and used jio saavn api for songs",
      link: "https://raagify2.netlify.app/",
      source: "#"
    },
    {
      title: "Flying Modi Game",
      desc: "Trending flying Modi game recreated with JavaScript. Fun browser-based game with smooth animations and interactive gameplay mechanics.",
      link: "https://modi-flyin.netlify.app/",
      source: "#"
    },
    {
      title: "portfolio website",
      desc: "pixal art portfolio website with intrigated backend for contact form and project submission",
      link: "https://vaibhav-ghoshi.vercel.app/",
      source: "https://github.com/Classyvaibhav06/portfolio"
    },
    {
      title: "our startup website",
      desc: "Clean and modern notification popup component.",
      link: "https://web-setu1.netlify.app/",
      source: "#"
    },
    {
      title: "chat app",
      desc: "basic chat app made using geminai api",
      link: "https://chat-app-six-flax-16.vercel.app/",
      source: "https://github.com/Classyvaibhav06/chat-app.git"
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-20 md:mb-28">
        <h1 className="heading-1 font-[family-name:var(--font-outfit)] text-slate-900 dark:text-white">Featured <span className="text-accent">Projects</span></h1>
        <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">Check out some of my recent work and open-source contributions.</p>
        <div className="w-32 h-1.5 bg-amber-500 mx-auto rounded-full mt-10"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolio.map((project, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-3 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-500/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full group">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-[family-name:var(--font-outfit)] group-hover:text-amber-500 transition-colors">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 flex-grow mb-8 text-lg font-light leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-4 mt-auto">
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-950 dark:bg-slate-800 text-white font-bold rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all shadow-md text-sm flex-1 text-center">
                  View Demo
                </a>
              )}
              {project.source !== "#" && (
                <a href={project.source} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-bold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:text-amber-500 transition-all shadow-md text-sm flex-1 text-center">
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
