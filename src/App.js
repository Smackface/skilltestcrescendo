/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@mui/system";
import { RecipesProvider } from "./context/Recipes";
import { SpecialsProvider } from "./context/Specials"

function App() {
  return (
    <Router>
    <SpecialsProvider>
      <RecipesProvider>
        <Container
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 90vh;
            width: 90vw;
          `}
        >
          <AppRoutes />
        </Container>
      </RecipesProvider>
      </SpecialsProvider>
    </Router>
  );
}

export default App;
