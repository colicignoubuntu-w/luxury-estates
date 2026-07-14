import {
  Container,
  Grid,
} from "@mui/material";

import SectionTitle from "../common/SectionTitle";
import PropertyCard from "../property/PropertyCard";

import properties from "../../data/properties";

function FeaturedProperties() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 10,
      }}
    >
      <SectionTitle
        subtitle="Imóveis selecionados"
        title="Residências extraordinárias"
      />

      <Grid
        container
        spacing={4}
      >
        {properties.map((property) => (
          <Grid
            key={property.id}
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturedProperties;