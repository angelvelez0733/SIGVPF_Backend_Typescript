import userDto from '../DTO/userDto';
import db from '../config/configDB';
import  bcrypt from 'bcryptjs';


class registerService {
    static async register (user: userDto) {
        const sql = 'INSERT INTO users (document, name, last_name, address, email, password, phone) values (?,?,?,?,?,?,?)';
        const values = [user.document, user.name, user.last_name, user.address, user.email, user.password, user.phone];
        return db.query(sql, values);
    }
}

export default registerService;