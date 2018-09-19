import axios from "./Axios";
import { setChoices } from "./state";

export const getIngredients = () => dispatch => {
    axios.get("/options").then(({ data }) => {
      const ingredients = data;
      dispatch(setChoices(ingredients));
    });
  };