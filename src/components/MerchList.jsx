import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const MerchList = () => {
    const [merchs, setMerchs] = useState([]);

    useEffect(() => {
        getMerchs();
    }, [])

    const getMerchs = async() => {
        const response = await axios.get("http://localhost:5000/merchs");
        setMerchs(response.data);
    }

    const deleteMerch = async (merchId) => {
        await axios.delete(`http://localhost:5000/merchs/${merchId}`);
        getMerchs();
    }

    return (
        <div>
            <h1 className='title'>Merchs</h1>
            <h2 className='subtitle'>List of Merchs</h2>
            <Link className='button is-primary mb-3' to="/merchs/add">Add New Merch</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Merch Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Created By</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {merchs.map((merch, index) => (
                        <tr key={merch.uuid}>
                            <td>{index + 1}</td>
                            <td>{merch.name}</td>
                            <td>
                                <div>
                                    <figure className='image is-4by3'>
                                        <img src={merch.url} alt="Merch Image" />
                                    </figure>
                                </div>
                            </td>
                            <td>{merch.price}</td>
                            <td>{merch.user.name}</td>
                            <td>
                                <Link to={`/merchs/edit/${merch.uuid}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => deleteMerch(merch.uuid)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default MerchList