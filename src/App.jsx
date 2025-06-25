import "./App.css";

import { TarefasProvider } from "./context/tarefasContext";

import Home from "./pages/Home";

function App() {
  return (
    <TarefasProvider>
      <Home />
    </TarefasProvider>
  );
}

export default App;
