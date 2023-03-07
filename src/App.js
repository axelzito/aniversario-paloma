import './App.css';
import Title from "./components/Title";
import Counter from "./components/Counter";
import Background from "./assets/img-party.jpeg"

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
        <div className="container">
            <Title title="Contagem regresiva para 2023" />
            <div className="countdown-container">
                <Counter title="Dias" number={1} />
                <Counter title="Horas" number={5} />
                <Counter title="Minutos" number={1} />
                <Counter title="Segundos" number={1} />
            </div>
        </div>
    </div>
  );
}

export default App;
