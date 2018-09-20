import axios from "../axios";
import { setIngredients } from "./state";

export const getIngredients = () => dispatch => {
    axios.get("/options").then( response  => {
      dispatch(setIngredients(response.data));
    });
  };

