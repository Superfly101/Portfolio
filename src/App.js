import "./App.css";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import ArticlesPage from "./pages/ArticlesPage";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <Layout>
      <LandingPage />
      <AboutPage />
      <WorkPage />
      <ArticlesPage />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              
            </>
          }
        />
      </Routes> */}
    </Layout>
  );
}

export default App;
