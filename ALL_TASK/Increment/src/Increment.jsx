import React from 'react'
import './style.css'
import react, { useState } from 'react'

function Increment() {
    const [data, setData] = useState({
        number: 0
    });

    const minus = () => {
        if (data.number > 0) {
            setData({ number: data.number - 1 });
        }
    }

    return (
        <div className="body">
            <h1> React Web </h1>
            <h1>{data.number}</h1>
            <div className='mt-5'>
                <button onClick={minus} className='btn btn-info' > Decrement  </button>
                <button className='btn btn-info' id='gap_btn' onClick={() => setData({ number: data.number + 1 })}> Increment </button>
            </div>
            <button className='btn btn-info' id='reset' onClick={() => setData({ number: 0 })}> Reset  </button>
        </div>
    )
}

export default Increment