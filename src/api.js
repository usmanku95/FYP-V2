import axios from "axios";
import { resolve } from "./resolve";
axios.defaults.baseURL = "http://localhost:3001";

export async function getEvents() {
  return await resolve(axios.get("/getEvents").then((res) => res.data));
}
