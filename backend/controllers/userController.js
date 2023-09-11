const User = require('../models/usersMdl')

const createUser = async (req, res) => {
    try {
        const { firstname, lastname, job } = req.body
        if (!firstname || !lastname || !job)
            return res.status(400).json({ message: "All fields are required!!" })
        const newUser = User({
            firstname,
            lastname,
            job
        })
        const addUser = await newUser.save()
        if (!addUser)
            return res.status(400).json({ message: "Something went wrong" })
        return res.status(200).json({ message: "User added successfully !!" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const users = async (req, res) => {
    const userList = await User.find({}).sort({ firstname: 1 })
    return res.status(200).json({ users: userList })
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.query
        const removeUser = await User.deleteOne({ _id: userId })
        if (!removeUser)
            return res.status(500).json({ message: "User not deleted !!" })
        return res.status(200).json({ message: "User deleted successfully!! " })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


module.exports = {
    createUser,
    users,
    deleteUser
}