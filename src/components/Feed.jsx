"use client";
import Post from "@/components/Post";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        imageUrl={
          "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/fdfd0qygj0wcv8rmns5ddg.jpg"
        }
      />
    </Box>
  );
};
export default Feed;
