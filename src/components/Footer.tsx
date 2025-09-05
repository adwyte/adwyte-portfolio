export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-white/70">Open to Backend • AI/ML • Systems internships</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="mailto:adwyte28@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adwyte" target="_blank">LinkedIn</a>
          <a href="https://github.com/adwyte" target="_blank">GitHub</a>
        </div>
        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Adwyte</p>
      </div>
    </footer>
  );
}
