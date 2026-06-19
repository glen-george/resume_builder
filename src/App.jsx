import "./App.css";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Steps from "./pages/Steps";
import History from "./pages/History";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Form from "./pages/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewResume from "./pages/ViewResume";




function App() {
  return (


    <>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Steps"} element={<Steps />} />
        <Route path={"/History"} element={<History />} />
        <Route path={"/Form"} element={<Form />} />

     {/* :id in path called route parameter ,URL parameter or path parameter */}
     <Route path="/view/:id/resume" element={<ViewResume />} />

        <Route path={"/*"} element={<PageNotFound />} />

      </Routes>
      <Footer />
    </>




  );
}

export default App;
