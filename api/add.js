const supabase = require('../config/database/db_supabase');

module.exports = async (req, res) => {
    try {

        const { data, error } = await supabase
            .from('usuarios')
            .insert([
                { id: '300', 
                name: 'baz',
                email: "baz@baz.com"},
            ]);

        if (error) {
            throw new Error(`error: ${error}`)
        }
        res.status(200).json({
            data
        })

    } catch (error) {
        res.status(404).json({
            "message": `${err}`
        })
    }
}
