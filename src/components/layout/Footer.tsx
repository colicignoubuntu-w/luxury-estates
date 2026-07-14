import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "#fff",
        py: 8,
      }}
    >
      <Container maxWidth="xl">

        <Grid
          container
          spacing={5}
        >

          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >

            <Typography
              variant="h4"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: "#C8A45D",
                mb: 2,
              }}
            >
              Luxury Estates
            </Typography>


            <Typography
              sx={{
                color: "rgba(255,255,255,.7)",
                lineHeight: 1.8,
              }}
            >
              Imóveis exclusivos, arquitetura
              extraordinária e experiências
              personalizadas para clientes
              que buscam excelência.
            </Typography>

          </Grid>


          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
          >

            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Navegação
            </Typography>


            <Stack spacing={1}>

              <Typography>
                Home
              </Typography>

              <Typography>
                Imóveis
              </Typography>

              <Typography>
                Sobre
              </Typography>

              <Typography>
                Contato
              </Typography>

            </Stack>

          </Grid>


          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >

            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 700,
              }}
            >
              Contato
            </Typography>


            <Stack spacing={2}>

              <Stack
                direction="row"
                spacing={1}
              >
                <LocationOnIcon
                  sx={{
                    color:"#C8A45D",
                  }}
                />

                <Typography>
                  São Paulo, Brasil
                </Typography>

              </Stack>


              <Stack
                direction="row"
                spacing={1}
              >
                <PhoneIcon
                  sx={{
                    color:"#C8A45D",
                  }}
                />

                <Typography>
                  (11) 99999-9999
                </Typography>

              </Stack>


              <Stack
                direction="row"
                spacing={1}
              >
                <EmailIcon
                  sx={{
                    color:"#C8A45D",
                  }}
                />

                <Typography>
                  contato@luxuryestates.com
                </Typography>

              </Stack>


            </Stack>

          </Grid>


        </Grid>


        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop:
              "1px solid rgba(255,255,255,.15)",
            textAlign:"center",
          }}
        >

          <Typography
            sx={{
              color:"rgba(255,255,255,.6)",
            }}
          >
            © 2026 Luxury Estates. Todos os direitos reservados.
          </Typography>

        </Box>


      </Container>
    </Box>
  );
}

export default Footer;