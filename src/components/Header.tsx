import { Container, Typography } from "@mui/material";

export const Header: React.FC = () => (
  <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
    <Typography variant="h1" fontSize={48} gutterBottom letterSpacing={2}>
      Weather App
    </Typography>
  </Container>
);
