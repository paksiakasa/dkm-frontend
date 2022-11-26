import React from 'react'

const FormEditMerch = () => {
    return (
        <div>
            <h1 className='title'>Merchs</h1>
            <h2 className='subtitle'>Edit Merch</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label className='label'>Merch Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder="Merch Name" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">
                                <div className="control">
                                    <div className="file">
                                        <label className="file-label">
                                            <input type="file" className='file-input'  />
                                            <span className='file-cta'>
                                                <span className='file-label'>Choose a file</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                </label>
                            </div>
                            <div className="field">
                                <label className='label'>Price</label>
                                <div className="control">
                                    <input type="number" min="0" className="input" placeholder="Price" />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-success">Update</button>
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