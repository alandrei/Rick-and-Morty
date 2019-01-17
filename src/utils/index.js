import { apiRoute } from "../config/api";

// @todo The api returns paginated results, which was not in the scope of this assignment
export const getCharacter = (characterId = "") =>
  fetch(`${apiRoute}/character/${characterId}`)
    .then(response => response.json())
    .catch(function(error) {
      console.log("Request failed", error);
      return {};
    });

export const searchCharacters = (searchKey = "") =>
  fetch(`${apiRoute}/character/?name=${encodeURI(searchKey)}`)
    .then(response => response.json())
    .catch(function(error) {
      console.log("Request failed", error);
      return { results: [] };
    });

export const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};
