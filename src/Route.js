import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import RegistrationForm from './pages/Registration'
import LoginForm from "./pages/Login";
import ImageDetail from "./pages/ImageDetail";

function Routescomponents(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path='/Login' element={<LoginForm/>}/>
        <Route path="/Register" element={<RegistrationForm/>}/>
        <Route path="/imagedetails" element={<ImageDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>)
}
export default Routescomponents;