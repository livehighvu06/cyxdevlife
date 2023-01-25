import { BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  return (
    <main className="px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-bold font-burtons">Chen Yi Xian</h1>
          <ul className="flex items-center gap-10">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold px-4 py-2 rounded-md"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default App;
