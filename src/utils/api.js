import PropTypes from "prop-types";

function getErrorMessage(message, username) {
  if (message === 'Not Found') {
    return `${username} doesn't exist`;
  }
  return message;
}

//get user profile from Github to use for Battle component
function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((profile) => {
      if (profile.message) {
        //show error
        throw new Error(getErrorMessage(profile.message, username));
      }
      return profile;
    });
}

function getRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMessage(repos.message, username));
      }
      return repos;
    });
}

function getStarCount(repos) {
  return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0);
}

function calculateScore(followers, repos) {
  return (followers * 3) + getStarCount(repos);
}

function getUserData(player) {
  return Promise.all([
    getProfile(player),
    getRepos(player)
  ]).then(([profile, repos]) => ({
    profile,
    score: calculateScore(profile.followers, repos)
  }));
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
  return Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ]).then((results) => sortPlayers(results));
}

// fetch the popular repositories according to the selected Language
// from the github API
// this function receives the selected language
export function fetchPopularRepo(language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
}