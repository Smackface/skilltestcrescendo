/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container } from "@mui/system";
import {
  Button,
  Hidden,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Modal = ({ setOpenModal, props, specialIngredientInfo }) => {


  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setOpenModal(false);
    }
  };

  const handleClose = (e) => {
    setOpenModal(false);
  };

  return (
    <Container>
      <div
        css={css`
          height: 100vh;
          width: 100vw;
          background-color: black;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          opacity: 20%;
        `}
        className="backdrop"
        onClick={handleClick}
      />
      <div
        css={css`
          z-index: 12;
          position: absolute;
          left: 25%;
          top: 10%;
          width: 50vw;
          height: 85vh;
        `}
      >
        <Card
          css={css`
            height: max-content;
            max-height: 100%;
            overflow-y: scroll;
          `}
        >
        <Hidden mdUp>
          <Button onClick={handleClose} type="button">
            Close
          </Button>
        </Hidden>
          <CardHeader
          css={css`text-align: center;`}
            title={`${props.title}`}
          />
          <CardContent css={css`display: flex; flex-direction: column; align-items: center;`}>
            {props.images? <CardMedia
              css={css`
                height: 200px;
                width: 200px;
              `}
              image={props.images.medium}
            /> : null}
            <span>{props.description}</span>
          </CardContent>
          <CardActions css={css`display: flex; align-items: center; justify-content: center; flex-direction: column;`}>
            <Accordion css={css`width: 100%; margin: 3px;`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Ingredients</Typography>
              </AccordionSummary>
              <AccordionDetails
              >
                {props.ingredients.map((item) => (
                  <Container key={item.uuid} css={css`margin: 12px; border: 1px solid black; border-radius: 12px;`}>
                      <Typography>Ingredient: {item.name}</Typography>
                      {item.measurement !== "" ? (
                          <Typography>Measurement: {item.measurement}</Typography>
                      ) : null}
                      <Typography>Amount: {item.amount}</Typography>
                      {specialIngredientInfo[item.uuid] ? <div css={css`font-size: .8em;`}>
                          <span>Special: {specialIngredientInfo[item.uuid].item.title} </span>
                          <br/>
                          <span>{specialIngredientInfo[item.uuid].item.text}  </span>
                          <br/>
                          <span>What is it: {specialIngredientInfo[item.uuid].item.type}</span>
                        </div> : null}
                  </Container>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion css={css`width: 100%; margin: 3px;`}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Preparation</Typography>
              </AccordionSummary>
              <AccordionDetails
              >
              {props.directions.map((item, index) => (
                <Container key={index} css={css`margin: 12px; border: 1px solid black; border-radius: 12px;`}>
                  <Typography>Step: {index}</Typography>
                  <span>
                    <Typography>
                      {item.instructions}
                    </Typography>
                    <Typography>
                      {item.optional ? (
                        <span css={css`font-size: .8em`}>This step is optional.</span>
                      ) : null}
                    </Typography>
                  </span>
                </Container>
              ))}
              </AccordionDetails>
            </Accordion>
            <Button type="button" component={Link} to="/new-recipe">Create Your Own Recipe?</Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
};

export default Modal;
