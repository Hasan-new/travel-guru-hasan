import React, { useState } from 'react';
import FakeData from '../../FakeData';
import Header from '../Header/Header';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';


const data = FakeData;
const Home = () => {
    //when user will click on the image then background name and detail will be change, so i declare an useState named change
    const [change, setChange] = useState([]);
    const Click  = (event) => {             // Click er khetre j kno name detay pari. event hocche eventhandler. 
        setChange(event)
    }
    // 12 - 14 ekta arrow function 
    return (
        <div>
            <img className='bg' src={change.background} alt=""/>     
            
            <Header />

            
            <div className='d-flex'>
                    <div className='col-md-6'>
                        <h1>{change.name}</h1>
                        <p>{change.details}</p>
                        <Link to={"/Booking/"+change.id}> 
                        <Button variant='warning'>Booking</Button>
                        </Link>
                    </div> 
                
            
            <div className='col-md-6'>
                {
                     data.map(allData => <img className='action' onLoad={() => Click(allData)} onClick={() => Click(allData)} style={{width:'30%', margin:'7px'}} src={allData.img} alt=""/> )
                     
                }
                 
            </div>
            
            </div>
        </div>
    );
};

export default Home;