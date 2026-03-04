import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] opacity-50 mix-blend-multiply dark:mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] opacity-50 mix-blend-multiply dark:mix-blend-screen animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] opacity-50 mix-blend-multiply dark:mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white font-[family-name:var(--font-outfit)] tracking-tight mb-6 transition-all duration-500 hover:scale-105">
            Hi, I'm <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 relative inline-block">
              Vaibhav Ghoshi
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            Web developer & DSA enthusiast with <span className="font-bold text-slate-900 dark:text-white">C++</span>. 
            <br className="hidden md:block"/>Curious minded, open for collaboration & freelancing. Tech digger at heart 🚀
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/projects" className="btn-primary w-full sm:w-auto px-10 py-4 text-xl">
              View My Work
            </Link>
            <Link href="/contact" className="btn-outline w-full sm:w-auto px-10 py-4 text-xl bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl">
              Let's Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Skill Deck Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-amber-500 uppercase mb-4">Skill Deck</h2>
            <p className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-[family-name:var(--font-outfit)] mb-4">
              Technologies I Work With
            </p>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard icon="💻" title="C++" desc="DSA & competitive programming" />
            <SkillCard icon="⚡" title="JavaScript" desc="Modern ES6+ & web development" />
            <SkillCard icon="⚛️" title="React" desc="Component-based architecture" />
            <SkillCard icon="▲" title="Next.js" desc="React framework for production" />
            <SkillCard icon="🟢" title="Node.js" desc="Backend API development" />
            <SkillCard icon="🎨" title="Tailwind CSS" desc="Utility-first CSS framework" />
            <SkillCard icon="🍃" title="MongoDB" desc="NoSQL database management" />
            <SkillCard icon="🌐" title="HTML5" desc="Semantic markup & accessibility" />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-300 group hover:-translate-y-2 text-center cursor-default">
      <div className="text-5xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-[family-name:var(--font-outfit)]">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
