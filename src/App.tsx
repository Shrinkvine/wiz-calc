import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Backdrop, CircularProgress } from '@mui/material';
import Home from "./components/home";
import Navbar from "./components/nav-bar";
import OtherProjects from "./components/other-projects";
import Contact from "./components/contact";
import "./App.css";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setIsLoading={setIsLoading}/>} />
        <Route path="/other-projects" element={<OtherProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Backdrop open={isLoading} style={{ zIndex: 9999, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Router>
  );
};

export default App;
