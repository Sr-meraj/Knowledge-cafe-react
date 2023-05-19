import logo from '/profile.png'
const Header = () => {
    return (
        <header>
            <nav
                className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 shadow-lg hover:text-neutral-700 text-neutral-500  focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 rounded px-5">
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div>
                        <a
                            className="text-xl font-bold uppercase text-neutral-800 dark:text-neutral-200"
                            href="/home"
                        >Knowladge Cafe</a
                        >
                    </div>
                    <div>
                        <div className="flex overflow-hidden">
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={logo} alt="Siam Logo" />
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;