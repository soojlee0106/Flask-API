
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

export const ProtectedRoute = ({ isAuthenticated, children, ...rest }) => {
    if (!isAuthenticated) {
        // user is not authenticated
        return <Navigate to="/login" />;
    };
};


function Urls(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes >
                    <Route path="/login/" element={<Login {...props} />} />
                    <Route exact path="/" element={<ProtectedRoute><Home {...props} /></ProtectedRoute>} />
                </Routes >
            </BrowserRouter>
        </div>
    )
};
export default Urls;