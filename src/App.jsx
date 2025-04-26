import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavbarPrueba from "./components/Navbar/Navbar";

function App() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <div className="container bg-green-300 flex flex-col items-center h-screen justify-center">
        deberia andar
        <h1 className="bg-red-300">APRENDIENDO</h1>
        <p className="font-primary">
          si yo pongo aca algo para ver como se la fuente
        </p>
      </div>
    </main>
  );
}

export default App;
