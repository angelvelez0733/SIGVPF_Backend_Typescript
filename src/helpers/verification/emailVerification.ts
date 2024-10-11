import connection from '../../config/configDB';

const emailVerification = async (email: string) => {
    const sqlUser = 'SELECT *  FROM users WHERE email = ?';
    const sqlAdmin = 'SELECT *  FROM administrator WHERE email = ?';

    const values = [email];

    try {
        try {
           const [responseUser] = await connection.query(sqlUser, values);
           const [responseAdmin] = await connection.query(sqlAdmin, values);
           
           const isUserExists = (responseUser as any[]).length > 0;
           const isAdminExists = (responseAdmin as any[]).length > 0;

           return isUserExists || isAdminExists
        }catch(error: any) {
            console.error('Error de consultas', error.stack);
            throw error;
        }
    } catch (error: any) {
        console.error('Error executing query', error.stack);
        throw error;
    }

};
export default emailVerification;