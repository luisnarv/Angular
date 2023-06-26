const { createUser} = require ("../Controllers/Users");



const HandlersCreateUser = async (req, res) => {

    const {name, lastname, dni, email, password, direction, numphone, tipo_documento} = req.body;

    try {
        await createUser(name, lastname, dni, email, password, direction, numphone, tipo_documento);
        res.status(201).json({ msg: "Create Successfull"})
    } catch (error) {
        res.status(400).json({msg: error.message})
        
    }

}


module.exports = {
    HandlersCreateUser,
    
}