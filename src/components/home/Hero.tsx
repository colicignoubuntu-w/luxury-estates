import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import heroImage from "../../assets/images/hero/hero.webp";

function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                backgroundImage: `
          linear-gradient(
            rgba(0,0,0,.55),
            rgba(0,0,0,.45)
          ),
          url(${heroImage})
        `,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container maxWidth="xl">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Box
                        sx={{
                            maxWidth: 700,
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#C8A45D",
                                letterSpacing: 6,
                                mb: 2,
                                textTransform: "uppercase",
                                fontWeight: 600,
                            }}
                        >
                            Luxury Real Estate
                        </Typography>

                        <Typography
                            variant="h1"
                            sx={{
                                color: "#fff",
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700,
                                fontSize: {
                                    xs: "3rem",
                                    md: "5rem",
                                },
                                lineHeight: 1.1,
                                mb: 3,
                            }}
                        >
                            Viva o extraordinário.
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,.85)",
                                fontSize: "1.2rem",
                                maxWidth: 600,
                                mb: 5,
                            }}
                        >
                            Descubra residências exclusivas, arquitetura impecável e uma
                            experiência imobiliária feita para quem busca excelência.
                        </Typography>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "#C8A45D",
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: 50,
                                    "&:hover": {
                                        bgcolor: "#B18F4D",
                                    },
                                }}
                            >
                                Explorar Imóveis
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: "#fff",
                                    borderColor: "#fff",
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: 50,
                                    "&:hover": {
                                        borderColor: "#C8A45D",
                                        color: "#C8A45D",
                                    },
                                }}
                            >
                                Agendar Visita
                            </Button>
                        </Stack>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default Hero;