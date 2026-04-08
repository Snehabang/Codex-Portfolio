import Link from 'next/link';

const tabs = [
  { id: 'discovery', label: 'Discovery' },
  { id: 'ideation', label: 'Ideation' },
  { id: 'design', label: 'Design / Architecture' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'results', label: 'Results' }
];

export default function NavigationTabs() {
  return (
    <div className="sticky top-16 z-30 mt-10 border-y border-slate-200 bg-white/95 py-3 backdrop-blur">
      <div className="section-container flex gap-3 overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`#${tab.id}`}
            className="whitespace-nowrap rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-500"
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
