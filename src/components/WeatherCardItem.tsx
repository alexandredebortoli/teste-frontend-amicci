import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { SvgIconComponent } from "@mui/icons-material";

interface WeatherCardItemProps {
  icon: SvgIconComponent;
  title: string;
  value: string;
}

const WeatherCardItem: React.FC<WeatherCardItemProps> = ({
  icon: Icon,
  title,
  value,
}) => {
  return (
    <Grid item xs={6} md={3} data-testid="weather-card-item">
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

export default WeatherCardItem;
