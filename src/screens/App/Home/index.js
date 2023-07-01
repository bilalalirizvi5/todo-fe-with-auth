import React, { useEffect } from "react";

import {
  Box,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Pagination,
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
  UpdateStatus,
} from "@components";
import { FilterBox } from "@styledComponents/Filter";
import { FilterButtonMenu } from "components/FilterButtonMenu";

import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, setPage } from "@redux/slices/todoSlice";
import { deleteWarning, editTodo, getTodo } from "@redux/services/todo";

const Home = () => {
  const { filter, loading, page, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodo({ status: filter, page });
  }, [page, filter]);

  const handleEdit = (_, obj) => editTodo(obj);

  const handleDelete = async (_, id) => deleteWarning(id);

  const handlePage = (page) => dispatch(setPage(page));

  const handleFilter = (status) => dispatch(setFilter(status));

  return (
    <Box>
      <FilterBox
        sx={{ justifyContent: { xs: "flex-end", sm: "space-between" } }}
      >
        <FilterButtonMenu handleFilter={handleFilter} />
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
                      "Title",
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
                      <TableCell>{(page - 1) * 10 + i + 1}</TableCell>
                      <TableCell>{v?.todo}</TableCell>
                      <TableCell>{v?.description}</TableCell>
                      <TableCell sx={{ width: "115px" }}>
                        {moment(v?.createdAt).format("DD-MMM-YYYY")}
                      </TableCell>
                      <TableCell sx={{ width: "115px" }}>
                        {moment(v?.dueDate).format("DD-MMM-YYYY")}
                      </TableCell>
                      <TableCell>
                        <UpdateStatus status={v?.status} id={v?._id} />
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
                            handleEdit(event, v);
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ paddingBlock: "0px !important" }}>
                        <DeleteIcon
                          onClick={(event) => {
                            handleDelete(event, v?._id);
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
                count={Math.ceil(todos?.total / 10)}
                page={page}
                shape="rounded"
                hidePrevButton
                hideNextButton
                onChange={(_, page) => handlePage(page)}
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
