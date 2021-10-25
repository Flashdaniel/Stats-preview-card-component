import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Typograph from "@mui/material/Typography";
import heroImage from "../images/image-header-mobile.jpg";
import heroImage1 from "../images/image-header-desktop.jpg";

function StatsPreviewCard() {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack sx={card}>
      <Box sx={cardHeroImage} />
      <Stack sx={cardBody}>
        <Typograph
          variant="h5"
          component="h1"
          gutterBottom
          mb={3}
          align={matchesMD ? "center" : "start"}
          color="hsl(0, 0%, 100%)"
          fontWeight={700}
          fontSize={matchesMD ? "1.8rem" : "2.4rem"}
        >
          Get{" "}
          <Box component="span" color="hsl(277, 64%, 61%)">
            insights
          </Box>{" "}
          that help your business grow.
        </Typograph>
        <Typograph
          variant="p"
          mb={5}
          align={matchesMD ? "center" : "start"}
          color="hsla(0, 0%, 100%, 0.75)"
          fontSize={matchesMD ? "1rem" : "1.2rem"}
        >
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </Typograph>
        <Stack
          sx={{
            display: { xs: "block", md: "flex" },
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            textAlign="center"
            mr={matchesMD ? "0" : "4rem"}
            mb={matchesMD ? "3rem" : "0rem"}
          >
            <Typograph
              variant="h5"
              component="h1"
              align={matchesMD ? "center" : "start"}
              color="hsl(0, 0%, 100%)"
              fontWeight={700}
              fontSize={"1.8rem"}
            >
              10+
            </Typograph>
            <Typograph
              variant="p"
              gutterBottom
              align={matchesMD ? "center" : "start"}
              color="hsla(0, 0%, 100%, 0.75)"
              mb={3}
            >
              COMPANIES
            </Typograph>
          </Box>
          <Box
            textAlign="center"
            mr={matchesMD ? "0" : "4rem"}
            mb={matchesMD ? "3rem" : "0rem"}
          >
            <Typograph
              variant="h5"
              component="h1"
              align={matchesMD ? "center" : "start"}
              color="hsl(0, 0%, 100%)"
              fontWeight={700}
              fontSize={"1.8rem"}
            >
              313
            </Typograph>
            <Typograph
              variant="p"
              mb={3}
              align={matchesMD ? "center" : "start"}
              color="hsla(0, 0%, 100%, 0.75)"
            >
              TEMPLATES
            </Typograph>
          </Box>
          <Box textAlign="center" mr={matchesMD ? "0" : "4rem"}>
            <Typograph
              variant="h5"
              component="h1"
              align={matchesMD ? "center" : "start"}
              color="hsl(0, 0%, 100%)"
              fontWeight={700}
              fontSize={"1.8rem"}
            >
              12M+
            </Typograph>
            <Typograph
              variant="p"
              align={matchesMD ? "center" : "start"}
              color="hsla(0, 0%, 100%, 0.75)"
            >
              QUERIES
            </Typograph>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

const card = {
  backgroundColor: "hsl(244, 38%, 16%)",
  borderRadius: 3,
  dlsplay: { xs: "block", md: "flex" },
  flexDirection: { xs: "column", md: "row-reverse" },
  alignItems: "center",
  justifyContent: "center",
};

const cardHeroImage = {
  background: {
    xs: `linear-gradient(hsla(277, 64%, 61%, 0.5), hsla(277, 64%, 61%, 0.5)), url(${heroImage})`,
    md: `linear-gradient(hsla(277, 64%, 61%, 0.5), hsla(277, 64%, 61%, 0.5)), url(${heroImage1})`,
  },
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: { xs: "300px", md: "440px" },
  width: "100%",
};

const cardBody = {
  flexBasis: "50%",
  p: "4rem 3.5rem",
  pr: "6rem",
};

export default StatsPreviewCard;
