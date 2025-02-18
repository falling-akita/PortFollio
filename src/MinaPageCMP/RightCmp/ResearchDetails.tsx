import { Box, Typography } from "@mui/material";

export const ResearchDetails = () => {
  return (
    <Box>
      <Box sx={{}}>
        <Details></Details>
        <Details></Details>
      </Box>
    </Box>
  );
};

const Details = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ mr: 1, ml: 1 }}>
        <Typography>2024,10</Typography>
      </Box>
      <Box sx={{ borderLeft: "1px solid black", paddingLeft: "16px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            mr: 2,
            ml: 2,
            mt: 2,
          }}
        >
          <Typography>研究名</Typography>
          <Typography>{text}</Typography>
          <img src="" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

const text =
  "この研究は、社会的認知が人間関係に与える影響を探ることを目的としています。特に、他者の感情や意図をどのように認識し、反応するかに焦点を当てています。実験を通じて、感情の読み取り能力が対人関係における信頼感や共感にどう関連しているかを調査しました。結果、他者の感情を正確に理解する能力が高いほど、協力的な行動や積極的な社会的関わりが増加することが示唆されました。この発見は、心理学的支援や教育の分野において有用な知見となり得ます。";
