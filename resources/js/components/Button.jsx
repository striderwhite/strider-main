import { Link } from "react-router-dom";

export function Button({ variant = 'primary', className = '', link, ...props }) {

  const base =
    'inline-flex items-center justify-center rounded-pill px-6 py-2 text-md font-semibold transition';

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary/80',
    secondary:
      'bg-white text-slate-800 hover:bg-slate-300',
  };

  return (
    <Link
      to={link}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}