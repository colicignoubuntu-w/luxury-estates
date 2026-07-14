import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        py: 4,
        textAlign: "center",
        bgcolor: "#111111",
        color: "#ffffff",
      }}
    >
      <Typography>
        © 2026 Luxury Estates. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;