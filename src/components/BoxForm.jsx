import React, { useState } from 'react';

const BoxForm = props => {
    const [form, setForm] = useState({
        color: "",
        dimension: 0,
    })
    
    const { color, dimension } = form;
    
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    
    const {handleAddBox} = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        // function to add box: handleAddBox(form):
        handleAddBox(form);
        setForm({
            color: "",
            dimension: 0,
        })
    }

    return (
        <div className="container text-center">
            <h2>Add a Box</h2>
            <form className="row my-4" onSubmit={handleSubmit}>
                <div className="col form-inline">
                    <label htmlFor="color"><h3>Color</h3></label>
                    <input onChange={handleForm} className="form-control mx-auto" type="text" name="color" id="color" value={color}/>
                </div>
                <div className="col form-inline">
                    <label htmlFor="dimension"><h3>Dimension</h3></label>
                    <input onChange={handleForm} className="form-control mx-auto" type="number" name="dimension" id="dimension" value={dimension}/>
                </div>
                <input className="col-2 my-2 btn btn-outline-success" type="submit" value="Add Box" />
            </form>
        </div>
    );
}

export default BoxForm;