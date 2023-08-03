import { Avatar, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";

export const AvatarWithPreview = ({ imageUrl, size }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar
        src={imageUrl}
        alt="Avatar"
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          width: size,
          height: size,
          backgroundColor: "primary.main",
        }}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <img
            src={imageUrl}
            alt="Preview"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
