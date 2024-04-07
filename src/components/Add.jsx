"use client";
import { Add as AddIcon, Image } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Avatar from "./Avatar";

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const img = useRef();
  const text = useRef();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      img.current = e.target.files[0];
    }
  };

  const handleDescChange = (e) => {
    text.current = e.target.value;
  };

  const { data: session } = useSession();

  const createPost = async () => {
    try {
      const post = new FormData();

      post.append("desc", text.current);
      post.append("img", img.current);
      post.append("username", session.user.name);
      post.append("userImg", session.user.image);
      post.append("likes", 0);

      const res = await fetch("/api/posts", {
        method: "POST",
        body: post,
      });
      console.log(res);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const StyledModal = styled(Modal)({
    display: "grid",
    placeItems: "center",
  });

  const StyledBox = {
    width: 460,
    padding: 5,
    borderRadius: 5,
    bgcolor: "background.default",
  };

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const StyledFab = styled(Fab)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" && "#fff",
    color: theme.palette.mode === "dark" && theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" && "darkgray",
      color:
        theme.palette.mode === "dark" && theme.palette.primary.contrastText,
    },
  }));

  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
      >
        <StyledFab onClick={handleOpen} color="primary">
          <AddIcon />
        </StyledFab>
      </Tooltip>
      <StyledModal open={open}>
        <Box sx={StyledBox}>
          <Typography variant="h6" color="gray" textAlign="center" mb={2}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar url={session.user.image} />
            <Typography>{session.user.name}</Typography>
          </UserBox>
          <TextField
            fullWidth
            id="standard-basic"
            label={`What's on your mind?`}
            variant="standard"
            multiline
            rows={3}
            onChange={handleDescChange}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <input
              accept="image/*" // optional, to limit to image files
              type="file"
              id="file-input"
              style={{ display: "none" }} // hide the default file input
              onChange={handleImageChange}
            />
            <label htmlFor="file-input">
              <Button component="span">
                <Image color="secondary" />
              </Button>
            </label>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={createPost}>Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
export default Add;
