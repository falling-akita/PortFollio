import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

// @keyframes を使ってスライドアニメーションを定義
const SlideBox = styled(Box)`
  display: flex;
  position: absolute;
  animation: slide 10s linear infinite;

  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const SlideItem = styled(Box)`
  width: 100px;
  height: 50px;
  background-color: cover; /* 色は適宜変更 */
  background-position: center;
`;

export const InfiniteSlider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "100px", // 高さを調整
        overflow: "hidden", // スライドが親ボックスから出ないように,
        marginTop: "20px",
      }}
    >
      <SlideBox>
        {/* 最初のスライドアイテム */}
        {/* ローカル保存した画像を使用 */}
        <SlideItem
          sx={{ backgroundImage: 'url("/SlideImage/AnNinTouhu.png")' }}
        />
        <SlideItem sx={{ backgroundImage: 'url("/SlideImage/Ramen.png")' }} />
        <SlideItem
          sx={{ backgroundImage: 'url("/SlideImage/SyouRonPou.png")' }}
        />
        <SlideItem sx={{ backgroundImage: 'url("/SlideImage/TyaHan.png")' }} />
        <SlideItem
          sx={{ backgroundImage: 'url("/SlideImage/tya-syu-.png")' }}
        />

        {/* 同じ画像を繰り返す */}
        <SlideItem
          sx={{ backgroundImage: 'url("/SlideImage/AnNinTouhu.png")' }}
        />
        <SlideItem sx={{ backgroundImage: 'url("/SlideImage/Ramen.png")' }} />
        <SlideItem
          sx={{ backgroundImage: 'url("/SlideImage/SyouRonPou.png")' }}
        />
        <SlideItem sx={{ backgroundImage: 'url("/SlideImage/TyaHan.png")' }} />
        <SlideItem
          sx={{ backgroundImage: 'url("/SlideImage/tya-syu-.png")' }}
        />
      </SlideBox>
    </Box>
  );
};
