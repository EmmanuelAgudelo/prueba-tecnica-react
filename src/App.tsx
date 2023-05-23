import { useEffect } from "react";
import Header from "./components/layout/Header";
import SidebarNav from "./components/layout/Sidebar";
import Allies from "./components/allies/Allies";
import Home from "./components/home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { route } from "./store/store";
import { shallow } from "zustand/shallow";


function App() {

  const { setUrl } = route();

  const url = useLocation().state;

  useEffect(() =>{
    setUrl(url)
  }, [])

  // setUrl(useLocation().pathname)
  
  
  return (
    <div className="app">
    <SidebarNav />
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aliados" element={<Allies />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
