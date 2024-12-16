import { authInstance } from "../index.config";

const entity = {
  register: async (payload) => {
    try {
      //Tip: payload example = {email: clau@email.com, password: "myPassword"}
      const response = await authInstance.post("/accounts:signUp", {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      });
      return response.data; //{ idToken: "...", refreshToken: "..." ,...}
    } catch (error) {
      console.log(
        "[API-ERROR]: Method: .register() | Message - ",
        error.toString()
      );
    }
  },

  login: async (payload) => {
    try {
      //Tip: payload example = {email: clau@email.com, password: "myPassword"}
      const response = await authInstance.post(
        "/accounts:signInWithPassword?",
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        }
      );
      return response.data; //{ idToken: "...", refreshToken: "..." ,...}
    } catch (error) {
      console.log(
        "[API-ERROR]: Method: .login() | Message - ",
        error.toString()
      );
    }
  },

  logout: async () => {
    try {
      localStorage.removeItem("id_token");
    } catch (error) {
      console.log(
        "[API-ERROR]: Method: .logout() | Message - ",
        error.toString()
      );
    }
  }
};
export default entity;
