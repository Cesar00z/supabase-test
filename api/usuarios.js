const supabase = require('../config/database/db_supabase');

module.exports = async (req, res) => {
    try {

        let { data: usuarios, error } = await supabase
            .from('usuarios')
            .select("id,name,email")

        if (error) {
            throw new Error("ocurrió un error:" + error)
        }

        res.status(200).json({
            usuarios
        })

    } catch (error) {
        res.status(404).json({
            "message": `${err}`
        })
    }
}
