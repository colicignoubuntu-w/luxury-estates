import {
    Box,
    Container,
    Grid,
    Typography,
    Stack,
} from "@mui/material";

import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";

function AboutSection() {
    return (
        <Box
            sx={{
                py: 12,
            }}
        >
            <Container maxWidth="xl">

                <Grid
                    container
                    spacing={6}
                    sx={{
                        alignItems: "center",
                    }}
                >

                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -50,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            <Box
                                component="img"
                                src="/images/about/luxury-office.webp"
                                alt="Luxury Estates"
                                sx={{
                                    width: "100%",
                                    height: 500,
                                    objectFit: "cover",
                                    borderRadius: 5,
                                }}
                            />
                        </motion.div>
                    </Grid>


                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <SectionTitle
                            subtitle="Sobre nós"
                            title="Excelência em imóveis de alto padrão"
                        />


                        <Typography
                            color="text.secondary"
                            sx={{
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                mb: 4,
                            }}
                        >
                            Na Luxury Estates, conectamos pessoas a propriedades
                            extraordinárias. Nosso trabalho é encontrar imóveis
                            exclusivos que representam estilo, conforto e sofisticação.
                        </Typography>


                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={4}
                        >

                            <Box>
                                <Typography
                                    sx={{
                                        color: "#C8A45D",
                                        fontSize: "2rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    15+
                                </Typography>

                                <Typography>
                                    Anos de experiência
                                </Typography>
                            </Box>


                            <Box>
                                <Typography
                                    sx={{
                                        color: "#C8A45D",
                                        fontSize: "2rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    500+
                                </Typography>

                                <Typography>
                                    Imóveis vendidos
                                </Typography>
                            </Box>


                            <Box>
                                <Typography
                                    sx={{
                                        color: "#C8A45D",
                                        fontSize: "2rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    100%
                                </Typography>

                                <Typography>
                                    Atendimento premium
                                </Typography>
                            </Box>

                        </Stack>

                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
}

export default AboutSection;