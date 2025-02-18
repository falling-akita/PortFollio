import { Box, Typography } from "@mui/material";
import { ResearchDetails } from "./researchDetails";

//ステートをプロップスで渡してここで処理をする
export const Right = () => {
  return (
    <Box>
      <Typography>実績</Typography>
      <ResearchDetails></ResearchDetails>
    </Box>
  );
};
