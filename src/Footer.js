import "./index.css";

export default function Footer() {
    return (
      <footer className="m-4 position-absolute bottom-0 autor">
        <div className="fs-6">
          This project was coded by Halyna Biedarieva and is{" "}
          <a href="https://github.com/HalynaB-2908/weather-react">
            <br/>
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://app.netlify.com/teams/galja2908/overview">Netlify</a>
        </div>
      </footer>
    );
}