import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 py-10">
      <div className="section-container flex flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" className="hover:text-slate-900">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com" className="hover:text-slate-900">
            LinkedIn
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
