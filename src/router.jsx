import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";



export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/user/:id" element={<Dashboard/>} />
            <Route path="user" element = {<Error/>}/>
            <Route path="*" element={<Error/>} />
         </Routes>
      </BrowserRouter>
   );
}