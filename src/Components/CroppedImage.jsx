import React from "react";
import { Group, Stack, Paper, Button, Text } from "@mantine/core";
import { saveAs } from "file-saver";

const CroppedImage = ({ img, setCloseImage }) => {
  const downloadImage = () => {
    saveAs(img, "image.jpg");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "90",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        boxShadow: "0px 0px 30px 1px #00000028"
      }}
    >
      <Paper
        sx={{
          width: "60vw",
          height: "70vh",
          maxWidth: "800px",
          maxHeight: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width: 855px)": {
            width: "90%",
            height: "90%",
          },
        }}
        p="md"
      >
        <Stack
          sx={{
            width: "70%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 855px)": {
              width: "90%",
              height: "90%",
            },
          }}
        >
          <Text size={"xl"}>Cropped Image!</Text>
          <img
            src={img}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            alt='cropped'
          />
          <Group>
            <Button
              onClick={() => {
                downloadImage();
                setCloseImage("");
              }}
              sx={{ height: "auto" }}
              p="sm"
            >
              <Group>
                <Text>Save Image</Text>
              </Group>
            </Button>
            <Button
              onClick={() => setCloseImage("")}
              sx={{ height: "auto" }}
              p="sm"
            >
              <Group>
                <Text>Exit</Text>
              </Group>
            </Button>
          </Group>
        </Stack>
      </Paper>
    </div>
  );
};

export default CroppedImage;