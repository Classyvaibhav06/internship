export const metadata = {
  title: "About Me",
  description: "Learn more about Vaibhav Ghoshi, a Full-Stack Developer and DSA enthusiast specializing in modern web technologies.",
};

export default function About() {
  const achievements = [
    { title: "First Commit", desc: "Pushed first code to production", icon: "🚀" },
    { title: "100 Day Streak", desc: "Committed code every day", icon: "🔥" },
    { title: "Certified Pro", desc: "AWS Solutions Architect", icon: "📜" },
    { title: "Open Source Hero", desc: "500+ contributions", icon: "🦸‍♂️" },
    { title: "Shipped 10+ Projects", desc: "Launched to production", icon: "🚢" },
    { title: "Innovation Award", desc: "Best hackathon project", icon: "🏆" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="heading-1 font-[family-name:var(--font-outfit)] text-slate-900 dark:text-white">About <span className="text-accent">Me</span></h1>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 flex items-center justify-center border-4 border-amber-500 group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="text-center p-8 relative z-10 transition-transform duration-500 group-hover:scale-105">
            <span className="text-8xl md:text-9xl block mb-6 animate-bounce">👨‍💻</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-[family-name:var(--font-outfit)]">Built with <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">⚡</span> <br/>and lots of coffee</h2>
          </div>
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-[family-name:var(--font-outfit)] leading-tight">
            I engineer modern web experiences.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            I am a passionate Full-Stack Developer and DSA enthusiast specializing in C++. My journey in tech started with a relentless curiosity to uncover how things work under the hood. 
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Today, I focus on building responsive, efficient, and user-centric web applications. Whether it's architecting backend services in Node.js, crafting intuitive UIs in React, or optimizing algorithms, I'm at my best when I'm solving complex logic problems.
          </p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-[family-name:var(--font-outfit)]">Achievements <span className="text-amber-500">Unlocked</span></h2>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 font-light">Milestones and awards gathered along the coding journey.</p>
        <div className="w-16 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex items-center space-x-6 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300 hover:-translate-y-2 group cursor-default">
            <div className="text-5xl group-hover:scale-125 transition-transform duration-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-xl shadow-inner">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-[family-name:var(--font-outfit)]">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
