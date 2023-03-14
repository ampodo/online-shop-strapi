import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home/Home"));
const Category = lazy(() => import("./components/Category/Category"));
const SingleProduct= lazy(() => import("./components/SingleProduct/SingleProduct"));

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Suspense fallback={<div>...</div>}>
        <Routes>       
            <Route path="/" element={<Home/>} />
            <Route path="/category/:id" element={<Category/>} />
            <Route path="/product/:id" element={<SingleProduct/>} />
        </Routes>
        </Suspense>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;

