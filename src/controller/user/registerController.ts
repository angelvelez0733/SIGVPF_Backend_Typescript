import { Request, Response } from 'express';
import userDto from '../../DTO/userDto';
import registerService from '../../services/user/userService';

let register = async (req: Request, res: Response): Promise<any> => {
    try {
        const {
            document,
            name,
            last_name,
            address,
            email,
            password,
            phone
        } = req.body;
    
        const result: any = await registerService.register(
            new userDto(document, name, last_name,  address, email, password, phone)
        );
    
        return res.status(201).json({
            status: 'register ok',
        });    
    } catch (error: any) {
        console.error('error en el controlador', error.stack);
        throw error;
    }
}
export default register;
