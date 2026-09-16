import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Affiliate Análise', description: 'Analytics local para afiliados' };

const links = [
  ['/', 'Dashboard'], ['/discover','Discover'], ['/products','Products'], ['/pins','Pins'],
  ['/experiments','Experiments'], ['/analytics','Analytics'], ['/recommendations','Recommendations'],
  ['/imports','Imports'], ['/ml','ML'], ['/settings','Settings'], ['/logs','Logs']
];

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body><div className="shell"><aside className="sidebar"><div className="brand">Affiliate Análise</div><nav className="nav">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></aside><main className="main">{children}</main></div></body></html>;
}
