import generateToken from "../helpers/generateToken";
import compareHash from "../helpers/compareHash";
import AuthRepository from "../repository/user/candidates/authRepository";
import auth from "../DTO/auth";

class AuthService {
  static async auth(auth: auth) {
    try {
      const candidateResult = await AuthRepository.authCandidate(auth.$email);

      const roles: any = [{ result: candidateResult, role: "Candidate" }];

      for (const { result, role } of roles) {
        if (result.length > 0) {
          const isPasswordValid = await compareHash(
            auth.$password,
            result[0].password
          );
          if (isPasswordValid) {
            const token = generateToken(
              { email: auth.$email, role: role },
              process.env.SECRET,
              60
            );
            return token;
          }
        }
      }
      return null;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error (
                'An error ocurred, error information: ' + error.message,
            );
        }
    }
  }
}
export default  AuthService;
