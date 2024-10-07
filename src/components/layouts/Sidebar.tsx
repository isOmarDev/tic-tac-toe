import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { navigation } from './constants';

export const Sidebar = () => {
  return (
    <aside className="p-5">
      <nav>
        <ul>
          {navigation.map(({ title, path, icon }) => (
            <li key={title}>
              <NavLink
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3',
                    'w-full rounded-full px-4 py-4',
                    'text-left text-sm font-semibold text-neutral-500',
                    'transition-colors duration-150 ease-in',
                    'hover:bg-rose-100 hover:text-neutral-800',
                    isActive &&
                      'bg-rose-50 text-neutral-800',
                  )
                }
                to={path}
              >
                <span className="shrink-0">{icon}</span>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
