import axios from "axios";
interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export default class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    const url = this.baseURL;
    let isLogged: boolean = false;
    try {
      const res = await axios.get(url);
      const data = await res.data.users;
      isLogged = await data.some((user: User) => {
        return user.email === email && user.password === password;
      });
    } catch (err) {
      console.log(err);
    }
    return isLogged;
  }
}
