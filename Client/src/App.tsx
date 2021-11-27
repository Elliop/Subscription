import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Articles from "./pages/Articles";
import ArticlesPlan from "./pages/ArticlesPlan";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles">
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="/article-plans">
          <Route path="/article-plans" element={<ArticlesPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
