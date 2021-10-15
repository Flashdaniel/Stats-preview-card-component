import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import StatsPreviewCard from "./components/StatsPreviewCard";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function App() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matchesMD ? (
        <Container maxWidth="xs" disableGutters sx={mainContainer}>
          <CssBaseline />
          <StatsPreviewCard />
        </Container>
      ) : (
        <Container maxWidth="lg" disableGutters sx={mainContainer}>
          <CssBaseline />
          <StatsPreviewCard />
        </Container>
      )}
    </>
  );
}

const mainContainer = {
  fontSize: "15px",
  fontFamily: "inter, sans-serif",
  p: "5rem 1.5rem",
};

export default App;
