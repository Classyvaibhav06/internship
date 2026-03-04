export default function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      duration: "Present",
      points: [
        "Led team of 5 developers on enterprise platform",
        "Improved performance by 40% through optimization",
        "Architected microservices infrastructure"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupHub Inc",
      duration: "Previous",
      points: [
        "Built MVP from scratch, gained 10K users",
        "Implemented real-time features with WebSockets",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co",
      duration: "Early",
      points: [
        "Developed 15+ client websites",
        "Specialized in animations and interactions",
        "Achieved 95+ Lighthouse scores"
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-20 md:mb-28">
        <h1 className="heading-1 font-[family-name:var(--font-outfit)] text-slate-900 dark:text-white">The <span className="text-accent">Grind</span></h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 font-light">Level-up timeline & professional experience.</p>
        <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mt-8"></div>
      </div>
      
      <div className="relative border-l-4 border-amber-200 dark:border-amber-900 ml-6 md:ml-12 space-y-16 py-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-10 md:pl-16 group">
            <div className="absolute -left-[22px] md:-left-[24px] top-6 w-10 h-10 md:w-11 md:h-11 rounded-full bg-amber-500 border-[6px] border-slate-50 dark:border-slate-950 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 group-hover:-translate-y-2 transition-transform duration-300 group-hover:border-amber-500/50">
              <span className="inline-block px-4 py-1.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-sm font-bold uppercase tracking-widest rounded-lg mb-6 shadow-inner">{exp.duration}</span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-[family-name:var(--font-outfit)] mb-3">{exp.title}</h3>
              <h4 className="text-xl md:text-2xl text-slate-500 mb-8 font-medium italic">{exp.company}</h4>
              <ul className="space-y-4">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-500 mr-4 text-2xl leading-none mt-0.5">▹</span>
                    <span className="text-slate-700 dark:text-slate-300 text-lg">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
