/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardHeader, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React from "react";
import { RecipesContext } from "../context/Recipes";
import { SpecialsContext } from "../context/Specials";
import RecipeCard from "../subcomponents/RecipeCard";

const Home = () => {
  const { recipes, setRecipes } = React.useContext(RecipesContext);
  const {specials, setSpecials } = React.useContext(SpecialsContext)
  React.useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
    fetch("http://localhost:3001/specials")
      .then((response) => response.json())
      .then((data) => setSpecials(data))
  }, []);

  return (
    <Grid container spacing={2}>
      {recipes.map((item) => (
        <RecipeCard key={item.uuid} specials={specials} props={item} />
      ))}
    </Grid>
  );
};

export default Home;
