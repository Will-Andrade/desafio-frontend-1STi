import FormBox from "./components/FormBox/FormBox.component";

function App(): JSX.Element {
  return <div data-testid="app-container">
    <h1>Previsão do Tempo</h1>
    <FormBox />
  </div>
}

export default App;
