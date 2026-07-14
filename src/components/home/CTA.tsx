import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

function CTA() {
  return (
    <Box
      sx={{
        position: "relative",
        py: 14,
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('/images/cta/luxury-house.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">

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
            duration: 0.8,
          }}
        >

          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              mb: 3,
              fontSize: {
                xs: "2.2rem",
                md: "3.5rem",
              },
            }}
          >
            Encontre sua próxima
            residência extraordinária
          </Typography>


          <Typography
            sx={{
              color: "rgba(255,255,255,.85)",
              fontSize: "1.2rem",
              mb: 5,
            }}
          >
            Nossa equipe está pronta para apresentar
            imóveis exclusivos selecionados para você.
          </Typography>


          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#C8A45D",
              color: "#fff",
              px: 6,
              py: 2,
              borderRadius: 50,
              fontWeight: 700,
              "&:hover": {
                bgcolor: "#B18F4D",
              },
            }}
          >
            Agendar Visita
          </Button>

        </motion.div>

      </Container>
    </Box>
  );
}

export default CTA;