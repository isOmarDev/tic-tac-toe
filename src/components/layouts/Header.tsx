export const Header = () => {
  return (
    <header className="flex items-center justify-between rounded-[10px] p-5">
      <nav className="flex items-center">
        <a
          className="flex items-center gap-3 text-[25px] font-black text-neutral-800"
          href="/"
        >
          Tic Tac Toe
        </a>
      </nav>
    </header>
  );
};
