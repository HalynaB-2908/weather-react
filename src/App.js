import Weather from "./Weather";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <Footer />
    </div>
  );
}

export default App;
