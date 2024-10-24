import userDto from '../DTO/userDto';
import db from '../config/configDB';


class registerService {
    static async register (user: userDto) {
        const sql = 'SELECT register_user(?,?,?,?,?,?,?) AS message';
        const values = [user.document, user.name, user.last_name, user.address, user.email, user.password, user.phone];

        const [rows]: any = await db.query(sql, values);
        return rows[0].message;
    }
}

export default registerService;