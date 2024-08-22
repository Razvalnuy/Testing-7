import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const individual = useSelector((state) => state.list.individual);
  return (
    <Grid item xs={4} sx={{ height: "100%" }}>
      <Paper
        sx={{
          p: 2,
          background: "#F2F2F2",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">
            {individual.isActive
              ? "Название репозитория"
              : "Выберите репозиторий"}
          </Typography>
          {individual.isActive && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Chip label={individual.name} color="primary" sx={{ mr: 1 }} />

              <Typography variant="body1">
                ⭐ {individual.stargazers_count}
              </Typography>
            </Box>
          )}

          {individual.isActive && (
            <Box sx={{ display: "flex", mt: 2, flexWrap: "wrap" }}>
              <Box sx={{ maxWidth: "400px" }}>
                <Chip
                  label={individual.name}
                  color="default"
                  sx={{ mr: 1, mb: 1 }}
                />
                <Chip
                  label={individual.description}
                  color="secondary"
                  sx={{ mr: 1, mb: 1 }}
                />

                <Chip
                  label={individual.license}
                  color="default"
                  sx={{ mr: 1, mb: 1 }}
                />
              </Box>
            </Box>
          )}

          {individual.isActive && (
            <Typography variant="body2" sx={{ mt: 2 }}>
              {individual.license}
            </Typography>
          )}
        </Box>
      </Paper>
    </Grid>
  );
}
