import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const FormEditMerch = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getMerchById = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/merchs/${id}`);
                setTitle(response.data.name);
                setFile(response.data.image);
                setPrice(response.data.price)
                setPreview(response.data.url);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        }
        getMerchById();
    }, [id]);

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const updateMerch = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        formData.append("price", price);
        try {
            await axios.patch(`http://localhost:5000/merchs/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/merchs");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <div>
            <h1 className='title'>Merchs</h1>
            <h2 className='subtitle'>Edit Merch</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateMerch}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className='label'>Merch Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder="Merch Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">
                                    <div className="control">
                                        <div className="file">
                                            <label className="file-label">
                                                <input type="file" className='file-input' onChange={loadImage} />
                                                <span className='file-cta'>
                                                    <span className='file-label'>Choose a file</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            {preview ? (
                                <figure className='image is-128x128'>
                                    <img src={preview} alt="Preview Image"></img>
                                </figure>
                            ) : ("")

                            }

                            <div className="field">
                                <label className='label'>Price</label>
                                <div className="control">
                                    <input type="number" min="0" className="input" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditMerch