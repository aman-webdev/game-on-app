import { currentYearDate, nextYearDate, prevYearDate } from "./gameDates";

// BASE URL
const api_key = "999071c51e4245579e552a3cbc612812";
const base_url = `https://api.rawg.io/api/`;

export const upcomingGames_url = (number) =>
  `${base_url}games?key=${api_key}&dates=${currentYearDate},${nextYearDate}&ordering=released&page_size=${number}`;
export const popularGames_url = (number) =>
  `${base_url}games?key=${api_key}&dates=${prevYearDate},${nextYearDate}&ordering=-rating&page_size=${number}`;
export const newGames_url = (number) =>
  `${base_url}games?key=${api_key}&dates=${prevYearDate},${nextYearDate}&ordering=-released&page_size=${number}`;
export const genre_url = (number) =>
  `${base_url}genres?key=${api_key}&page_size=${number}`;

export const developers_url = (number) =>
  `${base_url}developers?key=${api_key}&page_size=${number}`;

export const gameDetail_url = (id) => `${base_url}games/${id}?key=${api_key}`;

export const gameScreenshot_url = (id) =>
  `https://api.rawg.io/api/games/${id}/screenshots?key=${api_key}`;

export const particularGenre = (category) =>
  `${base_url}games?key=${api_key}&genres=${category}`;

export const searchedGames_url = (term) =>
  `${base_url}games?key=${api_key}&search=${term}`;
