import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        color: "#111111",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 90,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Luxury Estates
          </Typography>

          {/* Menu */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Button color="inherit">Home</Button>

            <Button color="inherit">Imóveis</Button>

            <Button color="inherit">Sobre</Button>

            <Button color="inherit">Contato</Button>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#C8A45D",
                color: "#fff",
                px: 3,
                py: 1.2,
                borderRadius: 50,
                "&:hover": {
                  bgcolor: "#B18F4D",
                },
              }}
            >
              Agendar Visita
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;