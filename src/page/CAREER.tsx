import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

const TextFontStyle = {
  fontSize: "50px",
  fontFamily: "'Fascinate', serif",
  color: "white",
  fontWeight: "900",
};

export const CAREERPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box id="Research" sx={{ width: "100%", position: "relative" }}>
      {isMobile && (
        <Box sx={{ height: "100%" }}>
          <MobileImage></MobileImage>

          <Text text="Research" right={"10%"} top={"14.5%"} />
          <Text text="photo" right={"10%"} top={"16%"} />
          <Text text="WebService" right={"1%"} top={"63%"}></Text>
          <Text text="Australia" left={"0%"} top={"70%"}></Text>
          <Text text="academicDay" left={"5%"} top={"71.5%"}></Text>
        </Box>
      )}
      {!isMobile && (
        <Box sx={{ height: "100%" }}>
          <PCImage></PCImage>
        </Box>
      )}
    </Box>
  );
};

type TextProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  text: string;
};

const Text = (props: TextProps) => {
  return (
    <Box
      sx={{
        zIndex: 1000,
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        position: "absolute",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
        }}
        initial={{ scale: 0.2 }}
        whileInView={{ scale: 1 }} // ビューに入ったときにアニメーション実行
        transition={{ duration: 0.5, ease: "easeInOut" }} // アニメーションの時間
      >
        <Typography
          sx={{ ...TextFontStyle, fontSize: { xs: "50px", lg: "70px" } }}
        >
          {props.text}
        </Typography>
        ;
      </motion.div>
    </Box>
  );
};

type mosaicProps = {
  Img: string;
};

const MobileImage = () => {
  return (
    <Box
      id="Research"
      sx={{
        width: "100%",
        position: "relative",
        display: "grid", // グリッドレイアウトを使う
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // カラム幅を自動調整
        gap: "16px", // 画像間の間隔
        padding: "16px", // コンテナの余白
        boxSizing: "border-box", // パディングを含めたボックスサイズ
      }}
    >
      {/* 画像を配置する */}
      <MosaicImage Img="./Research/door.jpg" />
      <MosaicImage Img="./Research/drone.jpg" />
      <MosaicImage Img="./Research/pc.jpg" />
      <MosaicImage Img="./Research/runba.jpg" />
      <MosaicImage Img="./Research/Line.png" />
      <MosaicImage Img="./Research/WebSite.png" />
      <MosaicImage Img="./Australia/building.jpg" />
      <MosaicImage Img="./Australia/back.jpg" />
      <MosaicImage Img="./Australia/restaurant.jpg" />
      <MosaicImage Img="./Australia/mene.jpg" />
    </Box>
  );
};

const MosaicImage = ({ Img }: mosaicProps) => {
  return (
    <Box
      sx={{
        position: "relative", // 画像の位置を調整
        width: "100%", // 横幅100%
        height: "100%", // ランダムに高さを指定
        backgroundColor: "#a786df", // 背景色
        overflow: "hidden", // 画像が枠からはみ出ないようにする
        borderRadius: "8px", // 角を丸める
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 少し影をつけて浮き上がらせる
        "& img": {
          width: "100%", // 画像の横幅をコンテナに合わせる
          height: "100%", // 画像の縦幅をコンテナに合わせる
          objectFit: "cover", // 画像が枠を埋めるようにする
        },
      }}
    >
      <motion.div
        style={{
          width: "100%", // 画像の横幅をコンテナに合わせる
          height: "100%", // 画像の縦幅をコンテナに合わせる
        }}
        initial={{ x: "100%" }} // 最初は右側に隠れている
        whileInView={{ x: 0 }} // ビュー内に入ったときに、右から左にスライド
        transition={{
          duration: 1, // アニメーションの時間
          ease: "easeInOut", // アニメーションのイージング
        }}
      >
        <img src={Img} alt="" />
      </motion.div>
    </Box>
  );
};

const PCImage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // 横方向の中央配置
        alignItems: "center",
        width: "100%",
        gap: 10,
      }}
    >
      <Box
        id="Research"
        sx={{
          width: "25%",
          position: "relative",
          display: "grid", // グリッドレイアウト
          gridTemplateRows: "repeat(auto-fill, minmax(300px, 1fr))", // 2列に固定
          gap: "16px", // 画像間の間隔
          padding: "16px", // コンテナの余白
          boxSizing: "border-box", // パディングを含めたボックスサイズ
        }}
      >
        {/* 画像を配置する */}
        <MosaicImage Img="./Research/door.jpg" />
        <MosaicImage Img="./Research/drone.jpg" />
        <MosaicImage Img="./Research/Line.png" />
        <MosaicImage Img="./Australia/building.jpg" />
        <MosaicImage Img="./Australia/restaurant.jpg" />
      </Box>
      <Box>
        {/* 説明 */}
        <Text text="Research" right={"50%"} top={"24.5%"} />
        <Text text="photo" right={"50%"} top={"27%"} />
        <Text text="WebService" right={"43%"} top={"55%"}></Text>
        <Text text="Australia" left={"37%"} top={"80%"}></Text>
        <Text text="academicDay" left={"37%"} top={"82.5%"}></Text>
      </Box>
      <Box
        id="Research"
        sx={{
          width: "25%",
          position: "relative",
          display: "grid", // グリッドレイアウト
          gridTemplateRows: "repeat(auto-fill, minmax(300px, 1fr))", // 2列に固定
          gap: "16px", // 画像間の間隔
          padding: "16px", // コンテナの余白
          boxSizing: "border-box", // パディングを含めたボックスサイズ
        }}
      >
        {/* 画像を配置する */}

        <MosaicImage Img="./Research/pc.jpg" />
        <MosaicImage Img="./Research/runba.jpg" />

        <MosaicImage Img="./Research/WebSite.png" />

        <MosaicImage Img="./Australia/back.jpg" />

        <MosaicImage Img="./Australia/mene.jpg" />
      </Box>
    </Box>
  );
};
