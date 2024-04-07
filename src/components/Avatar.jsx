import { Avatar as Profile } from "@mui/material";

const Avatar = ({ url }) => {
  return (
    <Profile
      alt="Profile Picture"
      src={url}
      sx={{ width: "30px", height: "30px" }}
    />
  );
};
export default Avatar;
