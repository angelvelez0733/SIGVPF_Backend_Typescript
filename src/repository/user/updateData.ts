//import changePassword from '../../DTO/changePasswordDto';
import User from '../../DTO/updateDto';
import db from '../../config/configDB';
import generateHash from '../../helpers/generateHash';
import bcrypt from 'bcryptjs';

class updateData{
    static async update (user: User) {
        const sql = 'SELECT update_candidate(?,?,?,?,?,?)';
        const values = [
            user.name,
            user.last_name,
            user.address,
            user.email,
            user.phone,
        ];
        try {
            const [res] =  await db.query(sql, values);
            return res;
        } catch (error: any) {
            console.error('Error executing query', error.stack);
            throw error;
        }
    }
}
export default updateData;