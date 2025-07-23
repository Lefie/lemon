import { useState } from 'react'
import Layout from './Layout'
import Site from './Site';
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Site />} />
      </Route>
    </Routes>

    </>
  )
}


