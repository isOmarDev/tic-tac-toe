import { useMemo } from 'react';
import {
  Outlet,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import { Footer } from './Footer';
import { capitalizeFirst } from '@/utils/capitalizeFirst';
import { formatPathname } from '@/utils/formatPathname';

export const MainContent = () => {
  const { pathname } = useLocation();

  const title = useMemo(
    () => capitalizeFirst(formatPathname(pathname)),
    [pathname],
  );

  return (
    <div className="max-w-5xl px-10 py-5">
      <ScrollRestoration />

      <main>
        <h1 className="text-3xl font-extrabold text-neutral-700">
          {title}
        </h1>

        <div className="mt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
