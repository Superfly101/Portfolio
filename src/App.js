import "./App.css";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Layout>
      <LandingPage />
      <AboutPage />
    </Layout>
  );
}

export default App;
