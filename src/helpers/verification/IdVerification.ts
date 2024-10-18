import connection from "../../config/configDB";

const idVerification = async (id: string) => {
  const sqlUser = "SELECT * FROM users WHERE document = (?)";
  const sqlAdmin = "SELECT * FROM administrator  WHERE document_admin = (?)";

  const values = [id];

  try {
    try {
      const [responseUser] = await connection.query(sqlUser, values);
      const [responseAdmin] = await connection.query(sqlAdmin, values);

      const isUserExists = (responseUser as any[]).length > 0;
      const isAdminExists = (responseAdmin as any[]).length > 0;

      return isUserExists || isAdminExists;
    } catch (error: any) {
      console.error("Error en las consultas", error.stack);
      throw error;
    }
  } catch (error: any) {
    console.error("Error executing query", error.stack);
    throw error;
  }
};
export default idVerification;