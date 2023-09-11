import React from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function UpdateUser() {
    const user = useSelector(store => store.user)
    console.log(user);
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white p-3 rounded'>
                <form>
                    <h4>Update User</h4>
                    <div className="form-group mb-2">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname"></input>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname"></input>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="job">Job</label>
                        <input type="text" className="form-control" id="job"></input>
                    </div>
                    <div className="form-group mb-2">
                        <Button variant="success">Update</Button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateUser
