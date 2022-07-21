import "./App.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <Layout>
      <LandingPage />
      <AboutPage />
      <WorkPage />
      <Contact />
    </Layout>
  );
}

export default App;
