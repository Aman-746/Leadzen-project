import React from 'react'
import './data.scss'
import { Button } from '@mui/material'
import { useState } from 'react'

const Data = (props) => {

    const [show, setShow] = useState(false);

    const view = () => {
        setShow(!show);
    }

    const data = props.data;

    return (
        <>
            <div className='dataCon'>
                <div className='top'>
                    <div className='item'> {data.name} </div>
                    <div className='item'>
                        <div>CONTACT</div>
                        <section> {data.username} </section>
                    </div>
                    <div className='item'>
                        <div>CITY</div>
                        <section> {data.address.city} </section>
                    </div>
                    <div className='item'>
                        <div>Website</div>
                        <section> {data.website} </section>
                    </div>
                    <div className='item'>
                        <Button variant='contained' className='btn' id={show ? "id2" : "id1"} onClick={view}>
                            {show ? "Hide Details" : "View Details"}
                        </Button>
                    </div>
                </div>

                {show && <div className='details'>
                    <div className='title'>Description</div>
                    <p className='des'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis cum sint vel nam alias,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis cum sint vel nam alias,
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis cum sint vel nam alias,
                        a porro minus reiciendis similique?
                        Omnis necessitatibu
                    </p>

                    <table>
                        <tbody>

                            <tr>
                                <td>
                                    <div>Contact person</div>
                                    <span> {data.username} </span>
                                </td>
                                <td>
                                    <div>Address</div>
                                    <span> {`${data.address.street} ${data.address.suite} ${data.address.zipcode}`} </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div>Designation</div>
                                    <span>Imran</span>
                                </td>
                                <td>
                                    <div>City</div>
                                    <span> {data.address.city} </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div>Emails</div>
                                    <span> {data.email} </span>
                                </td>
                                <td>
                                    <div>Website</div>
                                    <span> {data.website} </span>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div>Phone</div>
                                    <span> {data.phone} </span>
                                </td>
                                <td>
                                    <div>Country</div>
                                    <span>India</span>
                                </td>
                            </tr>


                        </tbody>
                    </table>

                </div>}

            </div>
        </>
    )
}

export default Data