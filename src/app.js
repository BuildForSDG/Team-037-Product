import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import NavB2 from "./components/navbar2";
import Container from "./components/container";
import "./app.css";


const App = () => {
    return (
    <div className='app'>
        <Navbar />
        <NavB2 />
        <div style={{display:'flex'}}>
            <Sidebar />
        <Container />
        </div>
        
        
    </div>
    )
}

export default App;
