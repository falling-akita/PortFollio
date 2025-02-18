import { Box, Typography } from "@mui/material";
import { FaInstagram } from "react-icons/fa";

export const Left = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "left" }}>
        <Typography sx={{ fontSize: "13px" }}>ご連絡はこちらから</Typography>
      </Box>
      <Box
        sx={{
          width: "200px",
          height: "300px",
          backgroundColor: "#E76029",
          borderRadius: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaInstagram size={50} color="white" />
        <Box
          sx={{
            marginTop: "20px", // アイコンと線の間隔を20pxに変更
            borderBottom: "2px solid white", // 白い下線
            width: "80%", // 下線の幅を調整
          }}
        ></Box>
      </Box>
    </Box>
  );
};
