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

const popularGames = `games?key=${process.env.REACT_APP_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesUrl = () => `${base_url}${popularGames}`;

console.log(popularGamesUrl());
