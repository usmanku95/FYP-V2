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

//Team calls
export async function addTeam(data) {
  return await resolve(axios.post("/addTeam", data).then((res) => res.data));
}

export async function getTeams() {
  return await resolve(axios.get("/getTeams").then((res) => res.data));
}

export async function updateTeam(teamId, data) {
  return await resolve(
    axios.put(`/updateTeam/${teamId}`, data).then((res) => res.data)
  );
}

export async function deleteTeam(id) {
  return await resolve(
    axios.delete(`/deleteTeam/${id}`).then((res) => res.data)
  );
}

//Entry calls
export async function addEntry(data) {
  return await resolve(axios.post("/addEntry", data).then((res) => res.data));
}

export async function getEntries() {
  return await resolve(axios.get("/getEntries").then((res) => res.data));
}

export async function updateEntry(entryId, data) {
  return await resolve(
    axios.put(`/updateEntry/${entryId}`, data).then((res) => res.data)
  );
}

export async function deleteEntry(id) {
  return await resolve(
    axios.delete(`/deleteEntry/${id}`).then((res) => res.data)
  );
}

//Player calls
export async function addPlayer(data) {
  return await resolve(axios.post("/addPlayer", data).then((res) => res.data));
}

export async function getPlayers() {
  return await resolve(axios.get("/getPlayers").then((res) => res.data));
}

export async function updatePlayer(playerId, data) {
  return await resolve(
    axios.put(`/updatePlayer/${playerId}`, data).then((res) => res.data)
  );
}

export async function deletePlayer(id) {
  return await resolve(
    axios.delete(`/deletePlayer/${id}`).then((res) => res.data)
  );
}

//Scoreboard calls
export async function getScoreboards() {
  return await resolve(axios.get("/getScoreboards").then((res) => res.data));
}

export async function updateScoreboard(scoreboardId, data) {
  return await resolve(
    axios.put(`/updateScoreboard/${scoreboardId}`, data).then((res) => res.data)
  );
}
