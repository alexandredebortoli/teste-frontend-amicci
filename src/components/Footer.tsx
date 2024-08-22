import { Box, Container, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Footer: React.FC = () => (
  <Container
    sx={{
      py: { xs: 4 },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        pt: { xs: 4, sm: 8 },
        width: "100%",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <div>
        <Typography variant="body2" color="text.secondary" mt={1}>
          &copy; 2024 Alexandre Debortoli de Souza
        </Typography>
      </div>
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
        sx={{
          color: "text.secondary",
        }}
      >
        <IconButton
          color="inherit"
          href="https://github.com/alexandredebortoli"
          aria-label="GitHub"
          target="_blank"
          sx={{ alignSelf: "center" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/alexandredds/"
          aria-label="LinkedIn"
          target="_blank"
          sx={{ alignSelf: "center" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  </Container>
);
