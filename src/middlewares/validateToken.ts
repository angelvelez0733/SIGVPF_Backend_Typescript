import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
    data: {role: string, email: string};
    exp: number;
    iat: number;
}

const validateToken =  (allowedRoles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            //Formato bearer esperado del token
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                return res.status(401).json({
                    status: 'You dont send token'
                });
            }            
            const decoded = jwt.verify(
                token, 
                process.env.SECRET as string,
            ) as JwtPayload;
            const userRole = decoded.data.role;
            console.log(userRole);
            
            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({
                    status: 'Access denied'
                });
            }

            req.body.tokenEmail = decoded.data.email;
            req.body.tokenRole = decoded.data.role;
            console.log(decoded);            
            
            return next();            
        } catch (error: any) {
            console.error('Error', error.stack);
            return res.status(403).json({
                status: 'Invalid Token', 
                error: error.message
            })
        };
    };
}
export default validateToken;