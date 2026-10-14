import { Link } from 'react-router-dom';
import logoo from '../../assets/logo1.png';

export function LogoMark({ className = 'h-9 w-9', color = '#14263D', accent = '#547A9E' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="8" fill={color} />
      <path d="M26 14.5A8.5 8.5 0 1 0 26 25.5" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <rect x="25" y="17.5" width="5" height="5" rx="1" fill={accent} />
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2.5"
      aria-label="Croxent Technologies - Home"
    >
      {/* <LogoMark
        color={light ? '#FFFFFF' : '#14263D'}
        accent={light ? '#14263D' : '#547A9E'}
      /> */}
       <img src={logoo} alt="Croxent Technologies Logo" style={{ height: '56px', width: 'auto' }} />
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
          Croxent
        </span>
        <span
          className={`block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            light ? 'text-white/70' : 'text-muted'
          }`}
        >
          Technologies
        </span>
      </span>
    </Link>
  )
}
