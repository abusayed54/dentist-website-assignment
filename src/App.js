import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Services from "./pages/Services";
import GlobalStyles from "./styles/GlobalStyles";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/home" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
