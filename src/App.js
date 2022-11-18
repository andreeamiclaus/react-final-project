import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          Project created by Andreea Miclaus
          <a
            href="https://github.com/andreeamiclaus/react-final-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open Source
          </a>
        </footer>
      </div>
    </div>
  );
}
