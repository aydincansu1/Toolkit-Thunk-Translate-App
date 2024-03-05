export const languageOptions = {
  method: "GET",
  url: "https://text-translator2.p.rapidapi.com/getLanguages",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
};
