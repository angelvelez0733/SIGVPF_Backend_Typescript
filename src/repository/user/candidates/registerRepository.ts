import userDto from '../../../DTO/userDto';
import db from '../../../config/configDB';

class RegisterService {
    static async register(user: userDto): Promise<any> {
        try {
            // Ejecutar la función MySQL y obtener el resultado
            const [result] = await db.query(
                'SELECT register_user(?, ?, ?, ?, ?, ?, ?) AS message',
                [
                    user.document,
                    user.name,
                    user.last_name,
                    user.address,
                    user.email,
                    user.password,
                    user.phone
                ]
            );

            // El resultado debería ser un array con un objeto que contiene la propiedad message
            if (Array.isArray(result) && result.length > 0) {
                return result[0];
            }

            throw new Error('No se recibió una respuesta válida del procedimiento almacenado');
            
        } catch (error: any) {
            // Manejar el error y propagar un mensaje más descriptivo
            throw new Error(`Error al registrar usuario: ${error.message}`);
        }
    }
}

export default RegisterService;