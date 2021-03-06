import axios from "axios";
import { gameDetailsUrl } from "../api";

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailsData = await axios.get(gameDetailsUrl(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailsData.data,
      screenshots: short_screenshots,
    },
  });
};
