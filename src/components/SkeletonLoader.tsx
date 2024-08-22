import {
  Card,
  CardContent,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

export const SkeletonLoader: React.FC = () => (
  <Container maxWidth="md" sx={{ mt: 8 }} data-testid="skeleton-loader">
    <Typography
      sx={{ fontSize: 14 }}
      color="text.secondary"
      align="center"
      gutterBottom
    >
      <Skeleton width="30%" />
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} alignContent={"center"}>
                <Typography variant="h4" align="center">
                  <Skeleton width="60%" />
                </Typography>
                <Typography color="text.secondary" align="center">
                  <Skeleton width="40%" />
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} alignContent={"center"}>
                <Typography variant="h3" align="center">
                  <Skeleton width="40%" />
                </Typography>
                <Typography color="text.secondary" align="center">
                  <Skeleton width="80%" />
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} alignContent={"center"}>
                <Typography variant="h3" align="center">
                  <Skeleton width="40%" />
                </Typography>
                <Typography color="text.secondary" align="center">
                  <Skeleton width="80%" />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Skeleton width="80%" />
            </Typography>
            <Typography variant="h5" component="div" align="center">
              <Skeleton width="60%" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Skeleton width="80%" />
            </Typography>
            <Typography variant="h5" component="div" align="center">
              <Skeleton width="60%" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Skeleton width="80%" />
            </Typography>
            <Typography variant="h5" component="div" align="center">
              <Skeleton width="60%" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <Skeleton width="80%" />
            </Typography>
            <Typography variant="h5" component="div" align="center">
              <Skeleton width="60%" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);
