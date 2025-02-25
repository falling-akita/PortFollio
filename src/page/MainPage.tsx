import { Box, CssBaseline, Typography } from "@mui/material";
import { Header } from "./Header";
import { CAREERPage } from "./CAREER";
import { ContactPage } from "./Contact";
import { motion } from "framer-motion";

const TextFontStyle = {
  fontSize: "20px",
  fontFamily: "'Zen Old Mincho', serif",
  color: "white",
  fontWeight: "900",
};
const CenterStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const TopTextStyle = {
  fontFamily: "'Fascinate', serif", // "Fascinate"フォントを使用
  fontWeight: 900, // フォントの太さを400に設定
  fontStyle: "normal", // フォントスタイルをnormalに設定
  fontSize: "42px", // 必要に応じてフォントサイズを設定
  lineHeight: "10px", // 行間を10pxに設定
  textAlign: "start", // テキストの位置をstartに設定（通常は左寄せ）
  letterSpacing: "normal", // 文字間隔を通常に設定
  color: "white",
};

export const TopPage = () => {
  return (
    <CssBaseline>
      <Box sx={{ backgroundColor: "#fec7d7", height: "100%", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            flexDirection: "column",
          }}
          id="top"
        >
          <Header></Header>
          <Box
            sx={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="./FrontImage/TopImage.png"
              alt=""
              style={{
                width: "100%", // 幅を100%に設定
                height: "100%", // 高さを自動調整
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            ...CenterStyle,
            flexDirection: "column",
          }}
        >
          <Typography sx={TopTextStyle}>WHTA`S About</Typography>
          <Typography sx={{ ...TopTextStyle, mt: 5 }}>ITO FUTO</Typography>
          <Box sx={{ ...CenterStyle, mt: 10, gap: { xs: 1, lg: 5 } }}>
            <motion.div
              initial={{ rotateZ: 0 }}
              whileInView={{ rotateZ: 360 }}
              whileHover={{ rotateZ: 360 }}
              transition={{
                duration: 10,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: "200px", md: "250px", lg: "300px" }, // レスポンシブ対応の幅設定
                  height: {
                    xs: "100%",
                    sm: "200px",
                    md: "250px",
                    lg: "300px",
                  }, // 高さも同じように設定
                  maxWidth: "300px", // 最大幅を設定
                  maxHeight: "300px", // 最大高さを設定
                  display: "flex", // コンテンツを中央に配置
                  justifyContent: "center", // 横方向で中央配置
                  alignItems: "center", // 縦方向で中央配置
                  ml: { xs: 1 },
                }}
              >
                <img
                  src="./FrontImage/ProFileImage.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    border: "1px solid #a786df",
                    padding: "5px",
                  }}
                />
              </Box>
            </motion.div>
            <Box
              sx={{
                ...CenterStyle,
                flexDirection: "column",
                width: { xs: "100%", sm: "100%", lg: "100%" },
              }}
            >
              <Typography
                sx={{
                  ...TextFontStyle,
                  fontSize: { sm: "20px", xs: "13px", lg: "20px" },
                }}
              >
                伊藤楓人
              </Typography>
              <Typography
                sx={{
                  ...TextFontStyle,
                  fontSize: { sm: "20px", xs: "13px", lg: "20px" },
                }}
              >
                2002年千葉県生まれ
              </Typography>
              <Typography
                sx={{
                  ...TextFontStyle,
                  fontSize: { sm: "20px", xs: "13px", lg: "20px" },
                }}
              >
                高校卒業後、大学に進学
              </Typography>
              <Typography
                sx={{
                  ...TextFontStyle,
                  fontSize: { sm: "20px", xs: "13px", lg: "20px" },
                }}
              >
                大学では、障害児教育の研究
              </Typography>
              <Typography
                sx={{
                  ...TextFontStyle,
                  fontSize: { sm: "20px", xs: "13px", lg: "20px" },
                }}
              >
                体重驚異の160KG
              </Typography>
              <Typography
                sx={{
                  ...TextFontStyle,
                  fontSize: { sm: "20px", xs: "13px", lg: "20px" },
                }}
              >
                杏仁豆腐が大好物
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...CenterStyle, flexDirection: "column" }}>
          <Typography sx={{ ...TopTextStyle, mt: 10 }}>CAREER</Typography>
          <Typography sx={{ ...TextFontStyle, mt: 5 }}>
            これまでたくさんの事に挑戦！
          </Typography>

          <CAREERPage></CAREERPage>

          <ContactPage></ContactPage>
        </Box>
      </Box>
    </CssBaseline>
  );
};
