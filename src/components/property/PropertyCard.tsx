import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Button,
  Box,
  Chip,
} from "@mui/material";

import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

import { motion } from "framer-motion";

import type { Property } from "../../data/properties";

interface PropertyCardProps {
  property: Property;
}

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <Card
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          transition: "0.4s",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: 12,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={property.image}
            alt={property.title}
            sx={{
              transition: "0.5s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />

          <Chip
            label="Exclusive"
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              bgcolor: "#C8A45D",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          />
        </Box>

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
            sx={{
              mb: 2,
            }}
          >
            {property.location}
          </Typography>

          <Typography
            sx={{
              color: "#C8A45D",
              fontSize: "1.5rem",
              fontWeight: 700,
              mb: 3,
            }}
          >
            R$ {property.price.toLocaleString("pt-BR")}
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              mb: 3,
            }}
          >
            <Stack direction="row" spacing={0.5}>
              <BedIcon />
              <Typography>
                {property.bedrooms}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5}>
              <BathtubIcon />
              <Typography>
                {property.bathrooms}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5}>
              <SquareFootIcon />
              <Typography>
                {property.area}m²
              </Typography>
            </Stack>
          </Stack>

          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#111",
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#C8A45D",
              },
            }}
          >
            Ver detalhes
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default PropertyCard;