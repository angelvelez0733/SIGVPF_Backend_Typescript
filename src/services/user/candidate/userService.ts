import userRepository from '../../../repository/user/candidates/registerRepository';
import userDto from '../../../DTO/userDto';
import generateHash from '../../../helpers/generateHash';

class userService {
    static async register(user: userDto){
        user.password = await generateHash(user.password);
        return await userRepository.register(user)
    }
}

export default userService;