import React from "react";
import Card from './card';
import A from '../images/a.jpg';
import B from '../images/b.jpg';

const Container = () => {
    return (
    <div>
        <h2>Sponsorshop</h2>
        <div style={{display:'flex'}}>
            <Card image={A} header={'Poultry'} />
        <Card image={B} header={'Fresh Produce Trading'}/>
        </div>
        
    </div>
    )
}

export default Container;