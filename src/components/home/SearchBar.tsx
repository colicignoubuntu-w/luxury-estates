import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function SearchBar() {
  return (
    <Box
      sx={{
        mt: -8,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={8}
          sx={{
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              mb: 3,
            }}
          >
            Encontre sua residência ideal
          </Typography>

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            spacing={2}
          >
            <TextField
              fullWidth
              label="Localização"
              placeholder="Ex: São Paulo"
            />

            <TextField
              fullWidth
              select
              label="Tipo de imóvel"
              defaultValue=""
            >
              <MenuItem value="">
                Todos
              </MenuItem>

              <MenuItem value="house">
                Casa
              </MenuItem>

              <MenuItem value="apartment">
                Apartamento
              </MenuItem>

              <MenuItem value="farm">
                Fazenda
              </MenuItem>
            </TextField>

            <TextField
              fullWidth
              select
              label="Quartos"
              defaultValue=""
            >
              <MenuItem value="">
                Qualquer
              </MenuItem>

              <MenuItem value="2">
                2+
              </MenuItem>

              <MenuItem value="3">
                3+
              </MenuItem>

              <MenuItem value="5">
                5+
              </MenuItem>
            </TextField>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#C8A45D",
                px: 4,
                borderRadius: 3,
                "&:hover": {
                  bgcolor: "#B18F4D",
                },
              }}
            >
              Buscar
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default SearchBar;