import { Request, Response } from 'express';
import candidate from '../../services/user/candidate/updateC';
import User from '../../DTO/updateDto';

const update = async (req: Request, res: Response): Promise<any> => {
    try {
        const {
            tokenEmail,
            document,
            name,
            last_name,
            address,
            phone,
        } = req.body;

        const result = await candidate.updateC(new User(
            tokenEmail, document, name, last_name, address, phone,
        ));

        if (result.success) {
            return res.status(201).json({
                message: result.message,
            });
        } else {
            return res.status(400).json({
                message: result.message,
            });
        }
    } catch (error: any) {
        console.error('Error', error.stack);
        return res.status(500).send({
            errorInfo: 'Internal Server Error', error
        });
    }
}


export default update;