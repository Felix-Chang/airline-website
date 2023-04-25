import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import CustomerSupport from "./Components/CustomerSupport";
import Destination from "./Components/Destination";
import Authors from "./Components/Authors";
import "./App.css";

function App() {
    return (
        <div>
            <>
                <Navbar />
                <div className="body-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route
                            path="/CustomerSupport"
                            element={<CustomerSupport />}
                        />
                        <Route path="/Destination" element={<Destination />} />
                        <Route path="/Authors" element={<Authors />} />
                    </Routes>
                </div>
            </>
            <Footer />
        </div>
    );
}

export default App;
