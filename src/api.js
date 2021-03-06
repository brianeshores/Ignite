require("dotenv").config();

// Base URL
const base_url = `https://api.rawg.io/api/`;

// Get current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// Url partials
const popularGames = `games?key=${process.env.REACT_APP_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_API}&dates=&${lastYear},${currentDate}&ordering=-released&page_size=10`;
// Full URLs
export const popularGamesUrl = () => `${base_url}${popularGames}`;

export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;

export const newGamesUrl = () => `${base_url}${newGames}`;

export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${process.env.REACT_APP_API}`;

export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&.json?&key=${process.env.REACT_APP_API}`;

export const searchGameUrl = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_API}&search=${game_name}&page_size=9`;
