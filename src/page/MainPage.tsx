import { Box, CssBaseline } from "@mui/material";
import { CenterItem } from "../MinaPageCMP/CenterCmp/Center";
import { Left } from "../MinaPageCMP/LeftCmp/Left";
import { Right } from "../MinaPageCMP/RightCmp/Right";
import { useState } from "react";

export const Mainpage = () => {
  const [vieControl, setViewControl] = useState({
    left: "1",
    ceneter: "2",
    right: "1",
  });

  const updateViewControl = (location: string, width: string) => {
    setViewControl((prevState) => ({
      ...prevState, // 既存のステートを保持
      [location]: width, // 更新したいキーを変更
    }));
  };

  const handleLeftClick = () => {
    updateViewControl("left", "2"); // Left Box のサイズを変更
    updateViewControl("center", "1");
    updateViewControl("right", "1");
  };

  const handleCenterClick = () => {
    updateViewControl("ceneter", "2"); // Center Box のサイズを変更
    updateViewControl("left", "1");
    updateViewControl("right", "1");
  };

  const handleRightClick = () => {
    updateViewControl("right", "2"); // Right Box のサイズを変更
    updateViewControl("center", "1");
    updateViewControl("left", "1");
  };

  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Left Box */}
        <Box
          sx={{
            backgroundColor: "#F1EFDF",
            flex: vieControl.left,
            borderRight: "2px solid #EB5C00",
            transition: "flex 0.3s ease", // アニメーションを追加
          }}
          onClick={handleLeftClick} // Left Box にクリックイベントを追加
        >
          <p>Left</p>
          <Left></Left>
        </Box>

        {/* Center Box */}
        <Box
          sx={{
            backgroundColor: "#26272a",
            flex: vieControl.ceneter,
            overflowY: "auto",
            scrollbarWidth: "none",
            transition: "flex 0.3s ease", // アニメーションを追加
          }}
          onClick={handleCenterClick} // Center Box にクリックイベントを追加
        >
          <p>Center</p>
          <CenterItem></CenterItem>
        </Box>

        {/* Right Box */}
        <Box
          sx={{
            backgroundColor: "#F1EFDF",
            flex: vieControl.right,
            borderLeft: "1px solid #EB5C00",
            transition: "flex 0.3s ease", // アニメーションを追加
          }}
          onClick={handleRightClick} // Right Box にクリックイベントを追加
        >
          <p>Right</p>
          <Right></Right>
        </Box>
      </Box>
    </CssBaseline>
  );
};
