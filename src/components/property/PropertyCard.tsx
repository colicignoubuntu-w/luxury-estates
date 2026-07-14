import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import type { Property } from "../../data/properties";

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 8,
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={property.image}
        alt={property.title}
      />

      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            mb: 1,
          }}
        >
          {property.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {property.location}
        </Typography>

        <Typography
          sx={{
            color: "#C8A45D",
            fontSize: "1.4rem",
            fontWeight: 700,
            mb: 2,
          }}
        >
          R$ {property.price.toLocaleString("pt-BR")}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
        >
          <Typography>
            🛏 {property.bedrooms}
          </Typography>

          <Typography>
            🛁 {property.bathrooms}
          </Typography>

          <Typography>
            📐 {property.area}m²
          </Typography>
        </Stack>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#111",
            borderRadius: 3,
            "&:hover": {
              bgcolor: "#C8A45D",
            },
          }}
        >
          Ver detalhes
        </Button>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;