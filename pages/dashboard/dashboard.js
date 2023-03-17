import Link from "next/link";
function Dashboard() {
  return (
    <div>
      <main className="flex">
        {/* height screen containing profiles settings edit */}
        <div className="h-screen w-30 bg-slate-600">
          <h1>rose</h1>
          <p>lorem indisuc nudh but sioqpinh hfdi</p>
          {/* profile settings edit */}
        </div>
        <div className="ml-30">
          <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full ">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">
                My Website
              </span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
                </svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <Link
                  href="/"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                >
                  Contact
                </Link>
                <Link
                  href="/services"
                  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
                >
                  Services
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
