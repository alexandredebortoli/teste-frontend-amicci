import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { SvgIconComponent } from "@mui/icons-material";

interface WeatherCardProps {
  icon: SvgIconComponent;
  title: string;
  value: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  icon: Icon,
  title,
  value,
}) => {
  return (
    <Grid item xs={6} md={3}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div" align="center">
            <Icon /> {value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WeatherCard;
