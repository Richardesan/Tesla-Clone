import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages

import Main from "./main"
import ModelS from "./ModelS"


const Rout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Routes>
                <Route path="/ModelS" element={<ModelS />} />
            </Routes>
            
        </Router>

    )
}

export default Rout;