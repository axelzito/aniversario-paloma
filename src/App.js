import './App.css';
import Title from "./components/Title";
import Counter from "./components/Counter";
import Background from "./assets/img-party.jpeg"
import UseCountdown from "./hooks/useCountdown";

function App() {
    const [day, hour, minute, second] = UseCountdown("Mar 25, 2023 20:00:00")
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
        <div className="container">
            <Title title="Contagem regresiva para 18tão da Paloma" />
            <div className="countdown-container">
                <Counter title="Dias" number={day} />
                <Counter title="Horas" number={hour} />
                <Counter title="Minutos" number={minute} />
                <Counter title="Segundos" number={second} />
            </div>
        </div>
    </div>
  );
}

export default App;
