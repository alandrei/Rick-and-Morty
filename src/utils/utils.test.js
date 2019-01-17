import { apiRoute } from "../config/api";
import { getCharacter, searchCharacters, debounce } from "./index.js";

it("debounces a function", () => {
  jest.useFakeTimers();
  const func = jest.fn();
  const debounced = debounce(func);
  expect(func).not.toBeCalled();
  debounced();
  jest.runAllTimers();
  expect(func).toBeCalled();
  expect(func).toHaveBeenCalledTimes(1);
});

it("calls get character with the correct url", function() {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => {} }));
  getCharacter(1);
  expect(global.fetch).toBeCalled();
  expect(global.fetch).toBeCalledWith(`${apiRoute}/character/1`);
});

it("calls search characters with the correct url", function() {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => {} }));
  searchCharacters("Rick and Morty");
  expect(global.fetch).toBeCalled();
  expect(global.fetch).toBeCalledWith(
    `${apiRoute}/character/?name=${encodeURI("Rick and Morty")}`
  );
});
