import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddMerch = () => {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveMerch = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        formData.append("price", price);
        try {
            await axios.post("http://localhost:5000/merchs", formData, {
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
            <h2 className='subtitle'>Add New Merch</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={saveMerch}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className='label'>Merch Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder="Merch Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Image</label>
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input
                                                type="file"
                                                className="file-input"
                                                onChange={loadImage}
                                            />
                                            <span className="file-cta">
                                                <span className="file-label">Choose a file...</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
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
                                    <button type="submit" className="button is-success">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddMerch