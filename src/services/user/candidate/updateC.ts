import User from '../../../DTO/updateDto';
import updateData from '../../../repository/user/updateData';

class candidate {
    static async updateC(user: User) {
        try {
            const result: any = await updateData.update(user);
            if (result && result[0] && result[0]['message'] === 'Usuario actualizado exitosamente') {
                console.error('No record was updated. Verify that email is correct.', result.message)
            }
            return {success: true, message: 'successful Update'}

        } catch (error: any) {
            console.error('Error updating  user:', error.message);
            return {success: false, message: error.message};
        }
    }

}
export default candidate;