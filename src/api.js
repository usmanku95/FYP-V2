import axios from "axios";
import { resolve } from "./resolve";
axios.defaults.baseURL = "http://localhost:3001";

//Event calls
export async function addEvent(data) {
  return await resolve(axios.post("/addEvent", data).then((res) => res.data));
}

export async function getEvents() {
  return await resolve(axios.get("/getEvents").then((res) => res.data));
}

export async function updateEvent(eventId, data) {
  return await resolve(
    axios.put(`/updateEvent/${eventId}`, data).then((res) => res.data)
  );
}

export async function deleteEvent(id) {
  return await resolve(
    axios.delete(`/deleteEvent/${id}`).then((res) => res.data)
  );
}

//Matches Calls

export async function getMatches(id) {
  return await resolve(axios.get(`./getMatches/${id}`).then((res) => res.data));
}
