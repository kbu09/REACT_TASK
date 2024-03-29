import React from 'react';
import { Helmet } from 'react-helmet';

function Create_List() {

    const arr = [
        'Use Array.map',
        'Not a for loop',
        'Give each item a unique key',
        'Avoid using array index as the key'
    ];

    return (
        <>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossorigin="anonymous" referrerpolicy="no-referrer" />
                <meta charset="utf-8" />
            </Helmet>


            <div className='container p-5' style={{ backgroundColor: 'greenyellow', width: 850, marginTop: 150 }}>
                <center>
                    <h2> <b>The "React Way" to Render a List</b></h2>
                </center>
                <ul className='mt-5'>
                    {arr.map((item, value) => (
                        <span className='d-flex'>
                            <i class="fa-solid fa-circle-right mx-3 mt-3" style={{ fontSize: 35, color: 'grren', }}></i>
                            <li style={{ listStyleType: 'none', backgroundColor: 'white', marginTop: 10, padding: 10, width: 550, fontSize: 20, }} key={value}>
                                <b> {item} </b>
                            </li>
                        </span>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Create_List;