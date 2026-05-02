// import { Divide } from "lucide-react";
import { Route,Routes } from "lucide-react";
import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Doctors from "./pages/Doctors";
// import MyProfile from "./pages/MyProfile";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
const App = () => {
  return(
<div className="mx-4 sm:mx-[10%]"> 
{/* here mx is for the differnt skreenn size  */}
{/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/doctors" element={<Doctors />} />
  <Route path="/my-profile" element={<MyProfile />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Routes> */}

<Routes>
  <Route path="/" element="<Home/>"/>
</Routes>


</div>
  );
};

export default App;
