import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";

const TopTextStyle = {
  fontFamily: "'Fascinate', serif", // "Fascinate"フォントを使用
  fontWeight: 900, // フォントの太さを900に設定
  fontStyle: "normal", // フォントスタイルをnormalに設定
  fontSize: "60px", // 初期のフォントサイズを設定
  lineHeight: "10px", // 行間を10pxに設定
  textAlign: "start", // テキストの位置をstartに設定（通常は左寄せ）
  letterSpacing: "normal", // 文字間隔を通常に設定
  color: "white",
};

const ButtonStyle = {
  fontFamily: "'Fascinate', serif", // "Fascinate"フォントを使用
  fontWeight: 900, // フォントの太さを900に設定
  fontStyle: "normal", // フォントスタイルをnormalに設定
  fontSize: "20px", // 初期のフォントサイズを設定
  color: "white",
};

export const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(25, 118, 210, 0)", // 背景色を設定
        display: "flex", // フレックスボックスで並べる
        justifyContent: "space-between", // 左右に要素を配置
        alignItems: "center", // アイテムを縦方向に中央に配置
        position: "fixed", // 固定配置
        width: "100%",
        height: { xs: "50px", sm: "100px", lg: "100px" },
        top: 0, // 上端に固定
        left: 0, // 左端に固定
        right: 0, // 右端に固定
        zIndex: 1000, // 他のコンテンツよりも前面に表示
        boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.0)", // シャドウを追加して浮き上がるようにする
        overflow: "hidden", // はみ出し防止
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Typography
          sx={{
            ...TopTextStyle,
            fontSize: { xs: "25px", sm: "50px", lg: "60px" }, // レスポンシブなフォントサイズ
            ml: { xs: 1, sm: 3 },
          }}
        >
          FatMen
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: { xs: 1 },
          justifyItems: "center",
          gap: { lg: 3 },
        }}
      >
        <Button
          component={Link}
          to="top" // スクロール先のID
          smooth={true}
          duration={500}
          sx={{
            ...ButtonStyle,
            fontSize: { xs: "13px", sm: "20px", lg: "40px" }, // レスポンシブなボタンフォントサイズ
          }}
        >
          Top
        </Button>
        <Button
          component={Link}
          to="Research" // スクロール先のID
          smooth={true}
          duration={500}
          sx={{
            ...ButtonStyle,
            fontSize: { xs: "13px", sm: "20px", lg: "40px" },
          }}
        >
          Research
        </Button>
        <Button
          component={Link}
          to="contact" // スクロール先のID
          smooth={true}
          duration={500}
          sx={{
            ...ButtonStyle,
            fontSize: { xs: "13px", sm: "20px", lg: "40px" },
          }}
        >
          Contact
        </Button>
      </Box>
    </Box>
  );
};
