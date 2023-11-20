import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import ButtonAppBar from "./components/ButtonAppBar";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;
