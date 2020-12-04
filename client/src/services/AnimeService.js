import HttpService from "./HttpService";

//Never used 
export const getAnime = async (query) => {
  try {
    const { data } = await HttpService.get(`season/${query}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
