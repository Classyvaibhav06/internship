import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t-4 border-amber-500 text-slate-300 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-3xl font-bold text-white font-[family-name:var(--font-outfit)] tracking-tighter mb-4">Vaibhav<span className="text-amber-500">Ghoshi</span></h3>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Web developer & DSA enthusiast with C++. Curious minded, open for collaboration and freelancing in development.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/" className="text-slate-400 hover:text-amber-400 font-medium transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-amber-400 font-medium transition-colors">About</Link></li>
              <li><Link href="/experience" className="text-slate-400 hover:text-amber-400 font-medium transition-colors">Experience</Link></li>
              <li><Link href="/projects" className="text-slate-400 hover:text-amber-400 font-medium transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-amber-400 font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Socials</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              <li><a href="https://github.com/Classyvaibhav06" target="_blank" className="hover:text-amber-500 transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/vaibhav-ghoshi-60467830b/" target="_blank" className="hover:text-amber-500 transition-colors">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/vaibhav.ghoshi" target="_blank" className="hover:text-amber-500 transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/@code_jaibabba" target="_blank" className="hover:text-amber-500 transition-colors">YouTube</a></li>
              <li><a href="mailto:vaibhav7290119@gmail.com" className="hover:text-amber-500 transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex justify-center items-center">
          <p>© {new Date().getFullYear()} Vaibhav Ghoshi. All rights reserved. engineered for engineering 👨‍🔧</p>
        </div>
      </div>
    </footer>
  );
}
