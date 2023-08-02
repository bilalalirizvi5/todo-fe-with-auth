import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import { updateProfilePicture } from "@redux/services/setting";

const ProfilePicture = () => {
  const STATE = useSelector((state) => state.auth.user);
  const { loading } = useSelector((state) => state.setting);
  const authState = useSelector((state) => state.auth);
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState(false);
  const [ImageSrc, setImageSrc] = useState(STATE?.photoUrl);

  const handlePhoto = (event) => {
    setPhotoError(false);
    setPhoto(null);
    const photo = event.currentTarget.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (types.includes(photo.type)) {
      setPhotoError(false);
      setPhoto(photo);
      const src = URL.createObjectURL(photo);
      setImageSrc(src);
    } else {
      setPhotoError(true);
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if (photo) {
      await updateProfilePicture({ file: photo });
    } else {
      swal("", `${photoError ? "Invalid type" : "Choose picture"}`, "error");
    }
  };

  return (
    <Box component={"form"} onSubmit={loading ? () => {} : handleClick}>
      <Typography mb={5} variant="h5" sx={{ color: "text.main" }}>
        Edit Profile Picture
      </Typography>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar
          alt={authState?.name}
          src={ImageSrc || authState?.photoUrl}
          sx={{ width: "80px", height: "80px", color: "black" }}
        />
        <Stack>
          <Typography
            mb={1}
            sx={{ fontWeight: 500, fontSize: "14px", color: "text.main" }}
          >
            Profile Picture &nbsp;
            <span style={{ fontWeight: 400, fontSize: "13px" }}>
              (.jpg, .jpeg, .png)
            </span>
          </Typography>
          <Stack direction="row" alignItems="center">
            <Button
              variant="outlined"
              component="label"
              sx={{
                height: "30px",
                textTransform: "initial",
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Upload
              <input
                hidden
                accept=".jpg, .jpeg, .png"
                type="file"
                onChange={handlePhoto}
                name="file"
              />
            </Button>
          </Stack>
          <Stack>
            {photo?.name.length > 0 && (
              <Typography
                mt={1}
                sx={{ fontSize: "14px", color: "text.main" }}
                title={photo?.name}
              >
                {photo?.name}
              </Typography>
            )}
            {photoError && (
              <Typography mt={1} sx={{ fontSize: "12px", color: "red" }}>
                Invalid type (accept .jpg, .jpeg, .png)
              </Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack mt={10}>
        <Button
          // onClick={loading ? () => {} : handleClick}
          variant="contained"
          sx={{ width: "150px" }}
          type="submit"
        >
          {loading && <CircularProgress size={15} color={"text"} />} &nbsp; Save
        </Button>
      </Stack>
    </Box>
  );
};

export default ProfilePicture;
