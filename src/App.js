import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://melodious-selkie-9ed524.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexandra Jaap
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AlexandraJaap/react-weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://jovial-cendol-ae6034.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
