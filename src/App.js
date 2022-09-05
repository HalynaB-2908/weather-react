import Weather from "./Weather";

function App() {
  return (
    <div className="container-fluid my-app">
      <img
        className="img-fluid Back"
        src="https://images.unsplash.com/photo-1512586175314-701bd44f8440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1997&q=80"
        alt=""
      />
      <Weather />
      <footer className="mt-4">
        <h4>
          This project was coded by Halyna Biedarieva and is{" "}
          <a href="https://github.com/HalynaB-2908/weather-react">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://app.netlify.com/teams/galja2908/overview">Netlify</a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
