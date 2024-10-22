import { Request, Response } from "express";
import AuthService from "../../services/authService";
import Auth from "../../DTO/auth";

const auth = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const token: any = await AuthService.auth(new Auth(email, password));

    if (token) {
      return res.status(200).json({
        status: "Successful authentication",
        Access: token,
      });
    }

    // Si no hay token, devolvemos 401
    return res.status(401).json({
      status: "Invalid email or password",
    });

  } catch (error: any) {
    // Si ocurre un error, devolvemos 500
    return res.status(500).send({
      error: "Internal Server error",
      errorInfo: error.message,
    });
  }
};

export default auth;
