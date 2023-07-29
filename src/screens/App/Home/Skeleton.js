import React from "react";

import {
  Box,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Skeleton as MuiSkeleton,
} from "@mui/material";

// Components
import {
  MainTable,
  Table,
  TableHeader,
  TableRow,
} from "@styledComponents/Table";

const Skeleton = () => {
  return (
    <MainTable>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableHeader>
              <TableCell></TableCell>
              {["Title", "Description", "Created At", "Due Date", "Status"].map(
                (v, i) => {
                  return <TableCell key={i}>{v}</TableCell>;
                }
              )}

              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableHeader>
          </TableHead>
          <TableBody>
            {["", "", "", "", "", "", "", "", "", ""].map((v, i) => (
              <TableRow key={i}>
                <TableCell>
                  <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                </TableCell>
                <TableCell>
                  <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                </TableCell>
                <TableCell>
                  <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                </TableCell>
                <TableCell sx={{ width: "115px" }}>
                  <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                </TableCell>
                <TableCell sx={{ width: "115px" }}>
                  <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                </TableCell>
                <TableCell>
                  <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                </TableCell>
                <TableCell
                // onClick={() => router.push(`/student/${v?._id}`)}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    <MuiSkeleton sx={{ bgcolor: "dark.main" }} height={35} />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ paddingBlock: "0px !important", width: "40px" }}
                >
                  <MuiSkeleton
                    sx={{ bgcolor: "dark.main" }}
                    variant="circular"
                    height={35}
                    width={35}
                  />
                </TableCell>
                <TableCell
                  sx={{ paddingBlock: "0px !important", width: "40px" }}
                >
                  <MuiSkeleton
                    sx={{ bgcolor: "dark.main" }}
                    variant="circular"
                    height={35}
                    width={35}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainTable>
  );
};

export default Skeleton;
