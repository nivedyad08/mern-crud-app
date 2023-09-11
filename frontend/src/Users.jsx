import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserModal from './UserModal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userDetails } from './redux-toolkit/features/users/userSlice'

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then((result) => {
                setUsers(result.data.users)
            })
            .catch(error => toast.error(error.data.message))
    }, [])

    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState("")
    const [userName, setUserName] = useState("")
    const showModal = (id, name) => {
        setUserName(name)
        setUserId(id)
        setShow(true)
    }

    const handleDeleteUser = async () => {
        try {
            const deletUser = await axios.put(`http://localhost:3000/user/delete?userId=${ userId }`)
            if (deletUser.status === 200) {
                setShow(false)
                setUsers(users.filter((prevUser) => prevUser._id !== userId))
                toast.success(deletUser.data.message)
            }
            else
                toast.error(deletUser.data.message)
        } catch (error) {
            setShow(false)
            toast.error(error.response.data.message)
        }
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const updateUser = (user) => {
        dispatch(userDetails(user))
        navigate('/update-user')
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create-user'><Button className='mb-2' variant="primary">Create User</Button></Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user, index) => (
                            <tr key={ user._id }>
                                <td>{ index + 1 }</td>
                                <td>{ user.firstname }</td>
                                <td>{ user.lastname }</td>
                                <td>{ user.job }</td>
                                <td>
                                    <Button as="input" style={ { marginRight: '6px' } } onClick={ () => updateUser(user) } variant="warning" type="button" value="Edit" />
                                    <Button as="input" variant="danger" type="submit" value="Delete" onClick={ () => showModal(user._id, user.firstname) } />
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
            {
                show && (
                    <UserModal show={ show } setShow={ setShow } userName={ userName } handleDeleteUser={ handleDeleteUser } />
                )
            }
        </div>
    )
}

export default Users
