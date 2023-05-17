import CanvasModel from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  );
}

export default App;
