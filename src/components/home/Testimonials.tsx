import {
    Box,
    Card,
    CardContent,
    Container,
    Typography,
    Avatar,
    Rating,
    Grid,
} from "@mui/material";

import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";

const testimonials = [
    {
        name: "Carlos Almeida",
        role: "Cliente Luxury Estates",
        text:
            "A equipe encontrou uma residência perfeita para nossa família. Todo o processo foi transparente e extremamente profissional.",
    },
    {
        name: "Mariana Souza",
        role: "Cliente Luxury Estates",
        text:
            "O atendimento foi impecável. Encontramos um imóvel que superou todas as nossas expectativas.",
    },
    {
        name: "Ricardo Martins",
        role: "Investidor",
        text:
            "Consultoria completa e conhecimento profundo do mercado de alto padrão.",
    },
];

function Testimonials() {
    return (
        <Box
            sx={{
                py: 12,
                backgroundColor: "#111",
            }}
        >
            <Container maxWidth="xl">

                <Box
                    sx={{
                        color: "#fff",
                    }}
                >
                    <SectionTitle
                        subtitle="Depoimentos"
                        title="O que nossos clientes dizem"
                    />
                </Box>


                <Grid
                    container
                    spacing={4}
                >

                    {testimonials.map((item) => (
                        <Grid
                            key={item.name}
                            size={{
                                xs: 12,
                                md: 4,
                            }}
                        >

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
                                        height: "100%",
                                        borderRadius: 4,
                                        backgroundColor: "#1c1c1c",
                                        color: "#fff",
                                    }}
                                >

                                    <CardContent
                                        sx={{
                                            p: 4,
                                        }}
                                    >

                                        <Rating
                                            value={5}
                                            readOnly
                                            sx={{
                                                mb: 3,
                                            }}
                                        />


                                        <Typography
                                            sx={{
                                                lineHeight: 1.8,
                                                mb: 4,
                                                color: "rgba(255,255,255,.8)",
                                            }}
                                        >
                                            "{item.text}"
                                        </Typography>


                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 2,
                                            }}
                                        >

                                            <Avatar
                                                sx={{
                                                    bgcolor: "#C8A45D",
                                                }}
                                            >
                                                {item.name.charAt(0)}
                                            </Avatar>


                                            <Box>

                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: "rgba(255,255,255,.6)",
                                                    }}
                                                >
                                                    {item.role}
                                                </Typography>

                                            </Box>

                                        </Box>

                                    </CardContent>

                                </Card>

                            </motion.div>

                        </Grid>
                    ))}

                </Grid>

            </Container>
        </Box>
    );
}

export default Testimonials;