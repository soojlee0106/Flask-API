
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes >
                    <Route path="/login/" element={<Login {...props} />} />
                    <Route path="/" element={<Home {...props} />} />
                </Routes >
            </BrowserRouter>
        </div>
    )
};
export default Urls;