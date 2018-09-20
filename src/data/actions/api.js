import axios from "../axios";
import { setIngredients } from "./state";

export const getIngredients = () => dispatch => {
    // Set loading
    axios.get("/options").then( response  => {
      console.log(response);
      dispatch(setIngredients(response.data));
      // Set not loading
    });
  };

