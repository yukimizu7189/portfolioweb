import './App.css'
import Header from "./components/Header";
import BlogPage from "./components/BlogPage";
import CosPage from "./components/CosPage";
import UnivPage from "./components/UnivPage";
import HomePage from "./components/HomePage";
import WorksPage from "./components/WorksPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./animation/ScrollTop";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/cosplay" element={<CosPage />} />
          <Route path="/univ" element={<UnivPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
    
  )
}

export default App
