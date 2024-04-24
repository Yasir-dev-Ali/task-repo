
// make controller for the sginUp page
// Path: backEnd/Controller/sginUp.controler.js
import SginUp from "../Module/SginUp.module"

const signUp = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    try {
        const existingUser = await SginUp.findOne({ email })

        if (existingUser) return res.status(400).json({ message: "User already exists" })

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" })

        const user = await SginUp.create({ name, email, password, confirmPassword })

        res.status(201).json({ user })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export { signUp }