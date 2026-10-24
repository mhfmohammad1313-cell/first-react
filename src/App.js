import "./App.css";
import Card from "./theme/Card";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./theme/Header";
import Slider from "./theme/Slider";
import Buttom from "./theme/buttom";
import UserContext from "./theme/context";
import { useState } from "react";


function App() {
  const [UserContext, setUserContext] = useState([])
  return (
    <>
      <BrowserRouter>
        {/* <Header />
        <Routes>
          <Route path="/login" element={<Card />} />
          <Route path="/slider" element={<Slider/>} />
        </Routes> */}
        <UserContext.Provider value={[UserContext,setUserContext ]}>
        <Slider/>
        <Buttom/>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;