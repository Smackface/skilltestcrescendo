/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Card,
  CardActions,
  CardHeader,
  Container,
  TextField,
  ToggleButton,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Formik, FieldArray } from "formik";

const NewRecipe = () => {
  const initialValues = {
    uuid: uuidv4(),
    title: "",
    description: "",
    servings: 0,
    prepTime: 0,
    cookTime: 0,
    postDate: new Date(),
    ingredients: [
      {
        uuid: uuidv4(),
        amount: 0,
        measurement: "",
        name: "",
      },
    ],
    directions: [
      {
        instructions: "",
        optional: false,
      },
    ],
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const [ingredienstArr, setIngredientsArr] = React.useState(initialValues.ingredients)
  const submitRecipe = async(data) => {
    fetch('http://localhost:3001/recipes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success: ", data)
    })
    .catch((error) => {
      console.log('error: ', error)
    })
  }
  return (
    <Container>
      <Card>
        <CardHeader title="Create a New Recipe!" />
        <CardActions>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <Container
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                `}
              >
              <span>
                <TextField
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant={"outlined"}
                  css={css`
                    margin: 6px;
                  `}
                  label="Recipe Title"
                />
                <TextField
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant={"outlined"}
                  css={css`
                    margin: 6px;
                  `}
                  label="Recipe Description"
                />
                <TextField
                  name="servings"
                  value={values.servings}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  variant={"outlined"}
                  css={css`
                    margin: 6px;
                  `}
                  label="Recipe Servings"
                />
                <TextField
                  name="prepTime"
                  value={values.prepTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  variant={"outlined"}
                  css={css`
                    margin: 6px;
                  `}
                  label="Recipe Prep Time"
                />
                <TextField
                  name="cookTime"
                  value={values.cookTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  variant={"outlined"}
                  css={css`
                    margin: 6px;
                  `}
                  label="Recipe Cook Time"
                />
                </span>
                <CardHeader
                  css={css`
                    text-align: center;
                  `}
                  title="Ingredients"
                />
                <Grid
                  css={css`
                    align-items: center;
                    justify-content: center;
                  `}
                  container
                  spacing={2}
                >
                </Grid>
                <FieldArray name={"ingredients"} render={arrayHelpers => (
                  <span
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                  `}>                  
                  {values.ingredients.map((item, index) => (
                    <Grid key={index} item xs={4}>
                      <span>
                        <TextField
                          name={`ingredients[${index}].name`}
                          label="Ingredient Name"
                          value={values.ingredients[index].name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant={"outlined"}
                          css={css`
                            margin: 6px;
                          `}
                        />
                        <TextField
                          name={`ingredients[${index}].measurement`}
                          label="Measurement"
                          value={values.ingredients[index].measurement}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant={"outlined"}
                          css={css`
                            margin: 6px;
                          `}
                        />
                        <TextField
                          name={`ingredients[${index}].amount`}
                          label="Amount"
                          value={values.ingredients[index].amount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant={"outlined"}
                          css={css`
                            margin: 6px;
                          `}
                        />
                      </span>
                    </Grid>
                  ))}
                  <Button
                    onClick={() => {
                      arrayHelpers.push({
                        uuid: uuidv4(),
                        amount: 0,
                        measurement: "",
                        name: "",
                      });
                    }}
                    type="button"
                  >
                    Add an Ingredient?
                  </Button>
                  </span>
                )}
                />
                <FieldArray name={"directions"} render={arrayHelpers => (
                  <span>
                    {values.directions.map((item, index) => (
                      <Grid key={index} item xs={4}>
                        <TextField
                        name={`directions[${index}].instructions`}
                        label={`Step ${index}`}
                        value={values.directions[index].instructions}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant={"outlined"}
                        css={css`
                          margin: 6px;
                        `} />
                        <ToggleButton
                          name={`directions[${index}].optional`}
                          value={values.directions[index].optional}
                          onChange={handleChange}
                          label="Optional ?"
                          />
                      </Grid>
                    ))}
                    <Button
                      onClick={() => {
                        arrayHelpers.push({
                          instructuins: '',
                          optional: true,
                        });
                      }}
                      type="button"
                    >
                      Add More Instructions?
                    </Button>
                  </span>
                )} />
                <Button onClick={() => {
                  submitRecipe(values)
                }} type="button">Submit</Button>
              </Container>
            )}
          </Formik>
        </CardActions>
      </Card>
    </Container>
  );
};

export default NewRecipe;

/*

                  {values.ingredients.map((item, index) => (
                    <Grid key={index} item xs={4}>
                      <span>
                        <TextField
                          name={"name" + `${index}`}
                          label="Ingredient Name"
                          value={values.ingredients[index].name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant={"outlined"}
                          css={css`
                            margin: 6px;
                          `}
                        />
                        <TextField
                          name={"measurement" + `${index}`}
                          value={values.ingredients[index].measurement}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant={"outlined"}
                          css={css`
                            margin: 6px;
                          `}
                        />
                        <TextField
                          name={"amount" + `${index}`}
                          value={values.ingredients[index].amount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant={"outlined"}
                          css={css`
                            margin: 6px;
                          `}
                        />
                      </span>
                    </Grid>
                  ))}
                  */