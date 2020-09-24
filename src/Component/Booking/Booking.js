import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../../FakeData';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    // 12 no line a state declare kora hoisay [startDate, setStartDate]

    return (
        <div className='flex'>
            <img className='bg' src={FakeData[id].background} alt="" />
            <div className='col-md-6'>
                <h1>
                    {FakeData[id].name}
                </h1>
                <p>
                    {FakeData[id].details}
                </p>
            </div>
            <div className='col-md-6'>
                <Form>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control  />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control  />
                    </Form.Group>

                        From: <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        />
                        <br/>

                        To: <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        />

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link to='/Hotels'>
                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                    </Link>
                </Form>
            </div>

        </div>
    );
};

export default Booking;