import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import projects from "./dataFile/projects.json";
import styles from "./app.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.cont}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route
              path="/projects"
              element={<Projects files={projects && projects.projects} />}
            ></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
