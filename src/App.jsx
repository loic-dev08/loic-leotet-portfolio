import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;