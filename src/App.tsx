import "./App.css";
import { BodyComponent } from "./Components/BodyComponent";
import { FooterComponent } from "./Components/FooterComponent";
import { HeaderComponent } from "./Components/HeaderComponent";
function App() {
  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
