const supabase = require('../config/database/db_supabase');

module.exports = async (req, res) => {

    try {
        const {id, name, email} = req.query;

        const { data, error } = await supabase
            .from('usuarios')
            .insert([
                {id: id,
                name: name,
                email: email},
            ]);

        if (error) {
            throw new Error(`error: ${error.message}`)
        }

        if (req.method == "GET") {

            return res.status(200).json({
                data
            })
        } else {
            return res.status(405).json({
                "message": `Error method not allowed ${req.method}`
            })
        }

    } catch (error) {
        res.status(404).json({
            "message": `${error}`
        })
    }
}
