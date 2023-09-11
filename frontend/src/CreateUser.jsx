import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Alert from 'react-bootstrap/Alert';

function CreateUser() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [job, setJob] = useState("")
    const [formVal, setFormVal] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!firstname || !lastname || !job) {
                console.log(7777);
                setFormVal(true)
            } else {
                const createUser = await axios.post("http://localhost:3000/user/create", { firstname, lastname, job });
                if (createUser.status === 200) {
                    toast.success(createUser.data.message)
                    navigate("/")
                }
            }
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white p-3 rounded'>
                <form onSubmit={ handleSubmit }>
                    <h4>Create User</h4>
                    {
                        formVal ? <Alert variant="danger">
                            All fields are required !!
                        </Alert> : ""
                    }
                    <div className="form-group mb-2">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" onChange={ (e) => setFirstName(e.target.value) }
                        ></input>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" onChange={ (e) => setLastName(e.target.value) }></input>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="job">Job</label>
                        <input type="text" onChange={ (e) => setJob(e.target.value) } className="form-control" id="job" placeholder="Enter Job"></input>
                    </div>
                    <div className="form-group mb-2">
                        <Button variant="success" type='submit'>Submit</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateUser
