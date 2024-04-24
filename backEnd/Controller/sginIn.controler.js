import SginIn from "../Module/SignIn.module";

const signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await SginIn.findOne({ email })

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist" })

        if (password !== existingUser.password) return res.status(400).json({ message: "Invalid credentials" })

        res.status(200).json({ user: existingUser })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export { signIn }