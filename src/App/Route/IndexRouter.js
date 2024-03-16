import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../UI/Components/Pages/Home/Home';

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path={""}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default index;