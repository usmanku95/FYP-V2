export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}

export function toggleLogin(payload) {
  return { type: "TOGGLE_LOGIN", payload };
}
