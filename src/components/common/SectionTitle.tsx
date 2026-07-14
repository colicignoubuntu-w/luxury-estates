import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        sx={{
          color: "#C8A45D",
          textTransform: "uppercase",
          letterSpacing: 4,
          fontWeight: 600,
          mb: 1,
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        variant="h3"
import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        sx={{
          color: "#C8A45D",
          textTransform: "uppercase",
          letterSpacing: 4,
          fontWeight: 600,
          mb: 1,
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        variant="h3"
        component="h2"
        sx={{import { Box, Typography } from "@mui/material";

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

function SectionTitle({ subtitle, title }: SectionTitleProps) {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        sx={{
          color: "#C8A45D",
          textTransform: "uppercase",
          letterSpacing: 4,
          fontWeight: 600,
          mb: 1,
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#111",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#111",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;        component="h2"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
