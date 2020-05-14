import axios from "axios";
import { resolve } from "./resolve";
axios.defaults.baseURL = "http://localhost:3001";

//Login

export async function login(data) {
  return await resolve(axios.post("/login", data).then((res) => res.data));
}

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

export async function addMatch(data) {
  return await resolve(axios.post(`./addMatch`, data).then((res) => res.data));
}

export async function getMatches(id) {
  return await resolve(axios.get(`./getMatches/${id}`).then((res) => res.data));
}

export async function editMatch(id, data) {
  return await resolve(
    axios.put(`./editMatch/${id}`, data).then((res) => res.data)
  );
}

export async function deleteMatch(id) {
  return await resolve(
    axios.delete(`./deleteMatch/${id}`).then((res) => res.data)
  );
}
