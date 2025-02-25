import { Box, Typography, IconButton, Button } from "@mui/material";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const TopFontStyle = {
  fontSize: "50px",
  fontFamily: "'Fascinate', serif",
  color: "white",
  fontWeight: "900",
};

const TextFontStyle = {
  fontSize: "20px",
  fontFamily: "'Zen Old Mincho', serif",
  color: "white",
  fontWeight: "900",
};

export const ContactPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={TopFontStyle}>CONTACT</Typography>
      <Typography sx={{ ...TextFontStyle, mb: 5 }}>
        ご連絡はこちらから
      </Typography>
      <SocialMediaIcons></SocialMediaIcons>
    </Box>
  );
};

const SocialMediaIcons = () => {
  return (
    <Box id="contact">
      <Box
        sx={{
          display: "flex",
          gap: { xs: "4", lg: "10" },
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* メールアイコン */}
        <IconButton
          component="a"
          href="mailto:ify26322@gmail.com?subject=Hello&body=This%20is%20a%20test%20email." // メールアドレスにリンク
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "black", fontSize: { xs: "50px", lg: "100px" } }}
        >
          <FaEnvelope />
        </IconButton>

        {/* Instagramアイコン */}
        <IconButton
          component="a"
          href="https://www.instagram.com/ify26322/" // Instagramアカウントにリンク
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#E1306C", fontSize: { xs: "50px", lg: "100px" } }} // Instagramのカラー（ピンク）
        >
          <FaInstagram />
        </IconButton>
        <Box sx={{ width: { xs: "20%", lg: "100%" } }}>
          <Button href="https://x.com/ify_026">
            <img
              src="./FrontImage/Icon.png"
              alt=""
              style={{
                borderRadius: "20%",
                width: "100%",
                height: "auto", // 高さを自動調整
              }}
            />
          </Button>
        </Box>
      </Box>
      <Box sx={{ mb: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* コピーライト表示 */}
          <Typography variant="body2" sx={{ color: "white" }}>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
