import { Card, CardContent, Typography, Box } from "@mui/material";

export const ErrorFallback = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
    >
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Oops, algo deu errado!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Por favor, tente novamente mais tarde ou entre em contato com o
            suporte se o problema persistir.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
