import ThemeToggleButton from "../ui/theme-toggle-button";

const NavPart2 = () => {
  return (
    <div className="flex gap-4 items-center">
      <button className="inline-flex items-center whitespace-nowrap ring-gray-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  px-4 py-2 group relative h-9 w-full justify-start rounded-full bg-backgound text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
        <span className="hidden   lg:inline-flex ">Search documentation...</span>
        <span className="inline-flex   lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.4rem] hidden h-5 select-none items-center gap-1 rounded-full border  bg-white/10 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      <ThemeToggleButton />
    </div>
  );
};

export default NavPart2;
