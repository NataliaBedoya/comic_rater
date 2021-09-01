import { getComic } from "./services/request";

export const GET_COMIC_INFO = "GET_COMIC_INFO";
export const SET_RATE = "SET RATE";

const initialState = {
  comic: {},
  rate: "",
};

export function getComicInfo() {
  const id = Math.floor(Math.random() * 2500) + 1;
  return async function (dispatch) {
    try {
      const { data } = await getComic(id);
      dispatch({
        type: GET_COMIC_INFO,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMIC_INFO: {
      return {
        ...state,
        comic: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
