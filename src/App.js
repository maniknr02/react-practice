import "./App.css";
import { Card } from "./components/Card";
import personsData from "./data";
function App() {
  return (
    <div className="container">
      {personsData.map((person) => {
        return <Card {...person} />;
      })}
    </div>
  );
}

export default App;
