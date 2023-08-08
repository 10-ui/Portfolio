import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Component/Header.tsx";
import { Top } from './Component/Top.tsx';
import { Works } from './Component/Works.tsx';


export const RouterConfig:React.FC = ()=> {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Top />}/>
          <Route path='/' element={<Top />}/>
          <Route path='Works' element={<Works />}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}
