import { Header } from './Header';
import { MainContent } from './MainContent';

export const MainLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-[350px_1fr] grid-rows-[80px]">
      <div className="sticky top-0 z-10 col-span-2 bg-white">
        <Header />
      </div>
      <div className="col-start-2">
        <MainContent />
      </div>
    </div>
  );
};
