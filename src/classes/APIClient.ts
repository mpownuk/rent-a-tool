import axios, { AxiosError } from "axios";
import { User } from "./user";

interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default class APIClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getUsersLength(): Promise<number | null> {
    const url = this.baseURL;
    try {
      const res = await axios.get(url);
      const length = await res.data.users.length;
      return length;
    } catch (err) {
      handleError(err);
      return null;
    }
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    const url = this.baseURL;
    let isLogged: boolean = false;
    try {
      const res = await axios.get(url);
      const data = await res.data.users;
      isLogged = await data.some((user: UserProps) => {
        return user.email === email && user.password === password;
      });
    } catch (err) {
      handleError(err);
      return false;
    }
    return isLogged;
  }

  async createUser(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<string> {
    const url = this.baseURL;
    const newUser = new User(id, firstName, lastName, email, password);
    try {
      await axios.post(url, newUser);
      console.log(newUser);
      return "Success!!";
    } catch (err) {
      handleError(err);
      return "Error!";
    }
  }
}

function handleError(error: AxiosError | any): void {
  axios.isAxiosError(error)
    ? console.error(`API Error: ${error.message}, ${error.response?.status}`)
    : console.error(`API Error: ${error.message}`);
}
