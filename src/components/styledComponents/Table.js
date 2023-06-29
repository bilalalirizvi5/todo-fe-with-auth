import { styled } from "@mui/system";

import {
  Table as MuiTable,
  TableRow as MuiTableRow,
  Box,
  Typography,
} from "@mui/material";

export const MainTable = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "30px 30px",
  [theme.breakpoints.down("sm")]: {
    width: "93vw",
    padding: "30px 15px",
  },
}));

export const MainTableContainer = styled(Box)({
  width: "100%",
  background: "#FFFFFF",
  border: "1px solid #E4E4E7",
  borderRadius: "9px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TableHeaderTop = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "20px 30px",
  borderBottom: "1px solid #D5D5D5",
  display: "flex",
  gap: "20px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "initial",
  },
}));

export const TableHeaderTopHeading = styled(Typography)({
  fontWeight: 600,
  fontSize: "18px",
});

export const Table = styled(MuiTable)({
  minWidth: "950px",
  borderCollapse: "separate",
  borderSpacing: "0px 4px",
});

export const TableHeader = styled(MuiTableRow)({
  backgroundColor: "#F5F6F9",
  borderRadius: "4px",
  "& td, & th": { borderBottom: 0 },
  "& th": { fontWeight: "600", color: "rgb(100,100,100)" },
});

export const TableRow = styled(MuiTableRow)({
  backgroundColor: "#fff",
  borderRadius: "4px",
  "& td, & th": {
    borderTop: "1px solid #F3F3F3",
    borderBottom: "1px solid #F3F3F3 !important",
  },
  "& td:last-of-type": {
    borderRight: "1px solid #F3F3F3",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  "& td:first-of-type": {
    borderLeft: "1px solid #F3F3F3",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
});

export const PaginationWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "25px",
});
