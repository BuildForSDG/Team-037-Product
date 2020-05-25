import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import "./app.css";

const App = () => {
    return (
    <div className='app'>
        <Navbar />
        <Sidebar />
    </div>
    )
}

export default App;
