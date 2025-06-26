import "./App.css";

import { TarefasProvider } from "./context/TarefasContext";

import Home from "./pages/Home";

function App() {
  return (
    <TarefasProvider>
      <Home />
    </TarefasProvider>
  );
}

export default App;
