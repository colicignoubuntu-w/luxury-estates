import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SellIcon from "@mui/icons-material/Sell";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import { motion } from "framer-motion";

import SectionTitle from "../common/SectionTitle";

const services = [
  {
    title: "Compra de Imóveis",
    description:
      "Encontramos propriedades exclusivas alinhadas ao seu estilo de vida.",
    icon: <HomeWorkIcon fontSize="large" />,
  },
  {
    title: "Venda de Alto Padrão",
    description:
      "Estratégias personalizadas para valorizar e vender seu imóvel.",
    icon: <SellIcon fontSize="large" />,
  },
  {
    title: "Consultoria Exclusiva",
    description:
      "Atendimento personalizado durante toda a jornada imobiliária.",
    icon: <SupportAgentIcon fontSize="large" />,
  },
];

function Services() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#fafafa",
      }}
    >
      <Container maxWidth="xl">

        <SectionTitle
          subtitle="Nossos diferenciais"
          title="Serviços exclusivos"
        />

        <Grid
          container
          spacing={4}
        >
          {services.map((service) => (
            <Grid
              key={service.title}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <motion.div
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 4,
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <CardContent>

                    <Box
                      sx={{
                        color: "#C8A45D",
                        mb: 2,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily:
                          "'Playfair Display', serif",
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                    >
                      {service.description}
                    </Typography>

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

export default Services;