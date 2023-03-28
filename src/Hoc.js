import React from 'react'
import { useState } from 'react';

function UpdatedComponent(OriginalComponent) {

    function NewComponent(){
        const [money,setMoney] = useState(100);
    const handleIncrease = ()=>{
        setMoney(money*2);
    };
    return<OriginalComponent handleIncrease={handleIncrease} money={money}/>
}
    return NewComponent;

}

export default UpdatedComponent;
