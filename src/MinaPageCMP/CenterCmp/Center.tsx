import { Box, Typography } from "@mui/material";
import { CenterImageSlide } from "./CenterSlide";
import { Profile } from "./Profile";
import { InfiniteSlider } from "./InfinitieSlide";

export const CenterItem = () => {
  return (
    <Box
      sx={{
        height: "2000px",
        display: "flex",

        alignItems: "center", // 横方向に中央揃え
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Zen Old Mincho", serif',
          fontSize: "30px",
          color: "white",
        }}
      >
        What`s About ME
      </Typography>

      <CenterImageSlide></CenterImageSlide>

      <Profile></Profile>
      <InfiniteSlider></InfiniteSlider>
      <Typography sx={{ color: "white", fontSize: "30px" }}>症例</Typography>
      <Example
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7lZc5JLgNY2S3mqTcNzPf0JbIycwEgX9_g&s"
        rotate="rotate(-10deg)"
        examText="ドア開閉システム"
      ></Example>
      <Example
        image="data:image/jpeg;base64,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"
        rotate="rotate(10deg)"
        examText="ルンバ開発"
      ></Example>
      <Example
        image="https://lstayandgrow.jp/wp-content/uploads/2024/08/230125_blog15.jpg"
        rotate="rotate(-10deg)"
        examText="ドア開閉システム"
      ></Example>
    </Box>
  );
};

type ExampleProps = {
  image: string;
  rotate: string;
  examText: string;
};

const Example = (props: ExampleProps) => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "250px",
        backgroundColor: "white",
        borderRadius: "10%",
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transform: props.rotate,
        transition: "transform 0.3s ease", // スムーズな変化をつける
        "&:hover": {
          transform: `${props.rotate} scale(1.1)`, // ホバー時にスケールを少し大きく
        },
      }}
    >
      {/* rotate(10deg) */}
      <img
        src={props.image}
        alt=""
        style={{ width: "140px", height: "140px", borderRadius: "50%" }}
      />
      <Typography>{props.examText}</Typography>
    </Box>
  );
};
