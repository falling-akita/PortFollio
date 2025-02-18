import { Box, Typography } from "@mui/material";

export const Profile = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        borderRadius: "5%",
        backgroundColor: "#EB5C00",
        marginTop: "220px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "2px solid black",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Zen Old Mincho", serif',
          fontSize: "21px",
          color: "white",
          fontWeight: 900,
        }}
      >
        Profile
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Zen Old Mincho", serif',
          fontSize: "13px",
          color: "white",
          fontWeight: 300,
        }}
      >
        湘南工科大学にて、障害者教育の教材開発
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Zen Old Mincho", serif',
          fontSize: "13px",
          color: "white",
          fontWeight: 300,
        }}
      >
        ハードウェア開発を得意としている。
      </Typography>
      <Typography
        sx={{
          fontFamily: '"Zen Old Mincho", serif',
          fontSize: "13px",
          color: "white",
          fontWeight: 300,
        }}
      >
        その他にも、SNS運用なども経験。
      </Typography>
    </Box>
  );
};
