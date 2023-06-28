import React from "react";

import {
  Box,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Pagination,
  Typography,
} from "@mui/material";

// Components
import {
  MainTable,
  MainTableContainer,
  TableHeaderTop,
  TableHeaderTopHeading,
  Table,
  TableHeader,
  TableRow,
  PaginationWrapper,
} from "@styledComponents/Table";
import {
  CreateTodo,
  DeleteIcon,
  EditIcon,
  Loader,
  StatusButton,
  UpdateStatus,
} from "@components";

import moment from "moment";
import { useSelector } from "react-redux";
import { FilterBox } from "@styledComponents/Filter";
import { FilterButtonMenu } from "components/FilterButtonMenu";

const Home = () => {
  const { loading, todos } = useSelector((state) => state.todo);

  const editHandle = (event, id) => {};

  const deleteHandle = (event, id) => {};

  return (
    <Box>
      <FilterBox
        sx={{ justifyContent: { xs: "flex-end", sm: "space-between" } }}
      >
        <FilterButtonMenu handleFilter={() => {}} />
      </FilterBox>
      <MainTableContainer mt={2}>
        <TableHeaderTop sx={styles.headerTop}>
          <TableHeaderTopHeading>{"Todos"}</TableHeaderTopHeading>
          <CreateTodo />
        </TableHeaderTop>
        {loading ? (
          <Loader />
        ) : (
          <MainTable>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableHeader>
                    <TableCell></TableCell>
                    {[
                      "Todo",
                      "Description",
                      "Created At",
                      "Due Date",
                      "Status",
                    ].map((v, i) => {
                      return <TableCell key={i}>{v}</TableCell>;
                    })}

                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableHeader>
                </TableHead>
                <TableBody>
                  {todos?.data?.map((v, i) => (
                    <TableRow key={i}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{v?.todo}</TableCell>
                      <TableCell>{v?.description}</TableCell>
                      <TableCell sx={{ width: "115px" }}>
                        {moment(v?.createdAt).format("DD-MMM-YYYY")}
                      </TableCell>
                      <TableCell sx={{ width: "115px" }}>
                        {moment(v?.dueDate).format("DD-MMM-YYYY")}
                      </TableCell>
                      <TableCell>
                        <UpdateStatus status={v?.status} />
                      </TableCell>
                      <TableCell
                        sx={styles.view}
                        // onClick={() => router.push(`/student/${v?._id}`)}
                      >
                        View
                      </TableCell>
                      <TableCell sx={{ paddingBlock: "0px !important" }}>
                        <EditIcon
                          onClick={(event) => {
                            editHandle(event, v?._id);
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ paddingBlock: "0px !important" }}>
                        <DeleteIcon
                          onClick={(event) => {
                            deleteHandle(event, v?._id);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <PaginationWrapper>
              <Pagination
                count={10}
                shape="rounded"
                hidePrevButton
                hideNextButton
              />
            </PaginationWrapper>
          </MainTable>
        )}
      </MainTableContainer>
    </Box>
  );
};

export default Home;

const styles = {
  headerTop: {
    flexDirection: "row !important",
    alignItems: "center !important",
    justifyContent: "space-between !important",
  },
  view: { cursor: "pointer", color: "#537FE7" },
};
