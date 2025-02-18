import { useState } from "react";
import { Button, Box } from "@mui/material";

export const CenterImageSlide = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyfJPzoXFlcqenMDMRPmpCMIh8VLPUErkLg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud9z5LE3RHxBr7508EuJrOyBorWzMezKR7w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMAAaPRPP7Sgt-rYVmmRhiSUMem0HFrW7Lw&s",
  ];

  const [index, setIndex] = useState(0); // 現在表示される画像のインデックス
  const [sizes, setSizes] = useState([200, 100, 100]); // 各画像のサイズを管理する状態

  const showNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length); // 画像を順番に表示（最後に来たら最初に戻る）

    // 最前面の画像をサイズ100、次の画像をサイズ200に設定
    setSizes((prevSizes) => {
      const newSizes = prevSizes.map((size, i) => {
        if (i === index) return 100; // 現在最前面の画像
        if (i === (index + 1) % images.length) return 200; // 次の画像
        return 100; // 他の画像はサイズ100
      });
      return newSizes;
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // 横方向に中央揃え
        width: "100%",
        backgroundColor: "#26272a",
      }}
    >
      <Box sx={{ position: "relative" }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`image-${i}`}
            width={sizes[i]} // それぞれの画像に対してサイズを適用
            height={sizes[i]} // 同様に高さもサイズに合わせる
            style={{
              borderRadius: 50,
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 1, // すべての画像を表示
              transform: `rotate(${i * 10 - 10}deg)`, // 各画像に回転を適用
              transition: "transform 0.5s, width 0.5s, height 0.5s", // 回転とサイズ変更のアニメーション
              zIndex: i === index ? 3 : 1, // 最前面の画像にz-indexを適用
            }}
          />
        ))}

        <Button
          onClick={showNextImage}
          sx={{
            top: "220px",
            borderRadius: "100",
            backgroundColor: "#26272a",
            color: "white",
          }}
        >
          Show Next Image
        </Button>
      </Box>
    </Box>
  );
};
