

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FrontPage from "./Components/FrontPage";
import Header from "./Components/Header";
import DetailsPage from "./Pages/Details/DetailsPage";


function App() {
  return (
    <>
    <Header />
    < Navbar/>
    <FrontPage/>

    <DetailsPage/>
    
    </>
  )
}

export default App
