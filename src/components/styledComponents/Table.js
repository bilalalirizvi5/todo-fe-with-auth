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

export const MainTableContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme.palette.dark.main,
  borderRadius: "9px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TableHeaderTop = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "20px 30px",
  borderBottom: "3px solid",
  borderColor: theme.palette.border.main2,
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

export const TableHeaderTopHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "18px",
  color: theme.palette.text.main,
}));

export const Table = styled(MuiTable)({
  minWidth: "950px",
  borderCollapse: "separate",
  borderSpacing: "0px 4px",
});

export const TableHeader = styled(MuiTableRow)(({ theme }) => ({
  backgroundColor: theme.palette.dark.main3,
  "& td, & th": { borderBottom: 0 },
  "& th": {
    fontWeight: "600",
    color: theme.palette.text.main,
    padding: "10px 16px",
  },
  "& th:last-of-type": {
    borderTopRightRadius: "16px",
  },
  "& th:first-of-type": {
    borderTopLeftRadius: "16px !important",
  },
}));

export const TableRow = styled(MuiTableRow)(({ theme }) => ({
  backgroundColor: theme.palette.dark.main2,
  borderRadius: "4px",
  "& td, & th": {
    borderBottom: "1px solid transparent !important",
    color: theme.palette.text.main,
  },
  "& td": {
    padding: "8px 16px",
  },
  "& td:last-of-type": {
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  "& td:first-of-type": {
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
}));

export const PaginationWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "25px",
  "& button": {
    color: theme.palette.text.main,
    border: "1px solid",
    borderColor: theme.palette.primary.main,
  },
  "& .Mui-selected": {
    backgroundColor: "#af5be9 !important",
  },
}));
