import Weather from "./Weather";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Herborn" />
      <Footer />
    </div>
  );
}

export default App;
