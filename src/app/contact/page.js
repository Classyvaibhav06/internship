export const metadata = {
  title: "Contact",
  description: "Get in touch with Vaibhav Ghoshi for collaboration, freelance opportunities, or technical inquiries.",
};

export default function Contact() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="text-center mb-20 md:mb-28">
        <h1 className="heading-1 font-[family-name:var(--font-outfit)] text-slate-900 dark:text-white">Let's <span className="text-accent">Connect</span></h1>
        <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">Drop me a message for collaboration, freelancing, or just to say hi!</p>
        <div className="w-32 h-1.5 bg-amber-500 mx-auto rounded-full mt-10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 bg-slate-950 text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center border border-slate-800">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-slate-500/20 rounded-full blur-[80px]"></div>
          
          <h2 className="text-4xl font-extrabold mb-8 font-[family-name:var(--font-outfit)] relative z-10">Get In Touch</h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed relative z-10">I'm always open to discussing product design work, development projects, or partnership opportunities.</p>
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 text-amber-500 shadow-inner border border-slate-800">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <strong className="block text-xl mb-2 font-[family-name:var(--font-outfit)]">Email Address</strong>
                <a href="mailto:vaibhav7290119@gmail.com" className="text-slate-400 text-lg hover:text-amber-500 transition-colors">vaibhav7290119@gmail.com</a>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-800">
              <strong className="block text-xl mb-6 font-[family-name:var(--font-outfit)] text-white">Social Networks</strong>
              <div className="flex flex-wrap gap-4">
                <SocialLink href="https://github.com/Classyvaibhav06" label="GitHub" icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                } />
                <SocialLink href="https://www.linkedin.com/in/vaibhav-ghoshi-60467830b/" label="LinkedIn" icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                } />
                <SocialLink href="https://www.instagram.com/vaibhav.ghoshi" label="Instagram" icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                } />
                <SocialLink href="https://www.youtube.com/@code_jaibabba" label="YouTube" icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                } />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-10 md:p-14 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
          <h2 className="text-4xl font-extrabold mb-10 text-slate-900 dark:text-white font-[family-name:var(--font-outfit)]">Send a Message</h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block mb-3 text-base font-bold text-slate-700 dark:text-slate-300">Name</label>
                <input type="text" id="name" className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all dark:text-white text-lg" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-3 text-base font-bold text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" id="email" className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all dark:text-white text-lg" placeholder="john@example.com" required />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-3 text-base font-bold text-slate-700 dark:text-slate-300">Message</label>
              <textarea id="message" rows={6} className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all dark:text-white text-lg resize-none" placeholder="How can I help you?" required></textarea>
            </div>

            <button type="button" className="btn-primary w-full py-5 text-xl tracking-wide uppercase shadow-lg shadow-amber-500/30">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={label} className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-slate-900 transition-all font-bold group shadow-inner">
      <div className="group-hover:scale-110 transition-transform">
        {icon}
      </div>
    </a>
  );
}
