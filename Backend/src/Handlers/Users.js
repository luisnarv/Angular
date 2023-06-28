const { createUser, loginUser} = require ("../Controllers/Users");



const HandlersCreateUser = async (req, res) => {

    const {name, username, lastname, dni, email, password, direction, numphone, tipo_documento} = req.body;

    try {
        await createUser(name, username, lastname, dni, email, password, direction, numphone, tipo_documento);
        res.status(201).json({ msg: "Create Successfull"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }

}

const HandlersLoginUser = async (req, res) =>{
    const {username, password} = req.body;
    
    try {
        const { token, user } = await loginUser(username, password);
        res.header('Access-Control-Expose-Headers', 'token')
        res.status(200).header("Token",token).json({user})
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


module.exports = {
    HandlersCreateUser,
    HandlersLoginUser,
}