import { searchRepositories } from "../store/listSlice";

export function getRepositories(search) {
  const searchTerm = `language:${search} stars:>1000`;
  const apiUrl = `https://api.github.com/search/repositories?q=${searchTerm}&per_page=25&sort=stars`;
  const options = {
    headers: {
      Authorization: "token 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",
    },
  };

  return async function (dispatch) {
    try {
      const response = await fetch(apiUrl, options);
      if (!response.ok) throw new Error("Yoops...");

      const repositories = await response.json();
      console.log(`repositories`, repositories.items);
      dispatch(searchRepositories(repositories.items));
    } catch (err) {
      console.warn(`errorsRequest`, err.message);
    }
  };
}
