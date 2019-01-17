import apiRoute from '../config/api.jsx';

// @todo The api returns paginated results, which was not in the scope of this assignment
export const getCharacter = (characterId = '') => fetch(`${apiRoute}/character/${characterId}`)
    .then(response => response.json())
    .catch(() => ({})); // @todo display user feedback (eg. error banner)

export const searchCharacters = (searchKey = '') => fetch(`${apiRoute}/character/?name=${encodeURI(searchKey)}`)
    .then(response => response.json())
    .catch(
        () => ({ results: [] }), // @todo display user feedback (eg. error banner)
    );

export const debounce = (fn, time) => {
    let timeout;

    return (...args) => {
        const functionCall = () => fn.apply(this, args);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    };
};
