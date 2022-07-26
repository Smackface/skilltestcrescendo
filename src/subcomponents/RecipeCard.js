/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CardHeader, Card, CardContent, CardMedia, Grid, CardActions, Button } from "@mui/material";
import React, { useEffect } from "react";
import Modal from "./Modal";

const RecipeCard = ({props, specials}) => {
    const [openModal, setOpenModal] = React.useState(false)
    let someVar = {}
    let someOtherVar = {}
    let finalVar = {}
    function someFunc(item, variable) {
      if (item.ingredientId) {
        let itemId = item.ingredientId
        variable = Object.assign(variable, {[itemId]: {item}})
      } else {
        let itemId = item.uuid
        variable = Object.assign(variable, {[itemId]: {item}})
      }
    }
    useEffect(() => {
      for (let i = 0; i < specials.length; i++) {
        someFunc(specials[i], someVar)
      }
      for (let i = 0; i < props.ingredients.length; i++) {
        someFunc(props.ingredients[i], someOtherVar)
      }
      for (const [key, value] of Object.entries(someOtherVar)) {
        for (const[otherKey, otherValue] of Object.entries(someVar)) {
          if (key == otherKey) {
            finalVar = Object.assign(finalVar, {[key]: otherValue})
          }
        }
      }
    })
  return (
    <Grid item xs={4}>
    {openModal ? (
        <Modal specialIngredientInfo={finalVar} props={props} setOpenModal={setOpenModal} />
    ) : null}
      <Card
        css={css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
        `}
        key={props.uuid}
      >
        <CardHeader title={props.title} />
        <CardContent>{props.description}</CardContent>
        {props.images? <CardMedia
          css={css`
            height: 200px;
            width: 200px;
          `}
          image={`${props.images.full}`}
        /> : null}
        <CardActions>
            <Button type="button" onClick={() => {
                setOpenModal(true)
            }}>View Recipe</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default RecipeCard