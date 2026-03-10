import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav className="bg-slate-800 text-white p-4 mb-8 shadow-md">
      <ul className="flex gap-6 list-none m-0 p-0 container mx-auto">
        <li>
          <Link to="/" data-testid="menu-products" className="hover:text-blue-400 transition-colors font-medium">
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/sobre" data-testid="menu-about" className="hover:text-blue-400 transition-colors font-medium">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}