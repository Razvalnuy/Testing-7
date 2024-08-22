import React, { useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { changedDate } from "./utils/data";
import { individualData } from "./store/listSlice";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const repositories = useSelector((state) => state.list.list);

  console.log(repositories);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Header
        repositories={repositories}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Container maxWidth="xxl" sx={{ mt: 2, height: "calc(100vh - 130px)" }}>
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={8} sx={{ overflowY: "auto" }}>
            {repositories.length > 0 && (
              <Typography variant="h3">Результаты поиска</Typography>
            )}
            {repositories.length > 0 ? (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Название</TableCell>
                      <TableCell>Язык</TableCell>
                      <TableCell sx={{ cursor: "pointer" }}>
                        Число форков
                      </TableCell>
                      <TableCell sx={{ cursor: "pointer" }}>
                        Число звезд
                      </TableCell>
                      <TableCell sx={{ cursor: "pointer" }}>
                        Дата обновления
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {repositories
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((repo, index) => (
                        <TableRow
                          hover
                          key={index}
                          onClick={() => {
                            const searchRepositories = repositories.filter(
                              (item) => item.id === repo.id
                            );
                            const [activeRepositories] = searchRepositories;
                            dispatch(individualData(activeRepositories));
                          }}
                        >
                          <TableCell>{repo.name}</TableCell>
                          <TableCell>{repo.language}</TableCell>
                          <TableCell>{repo.forks}</TableCell>
                          <TableCell>{repo.stargazers_count}</TableCell>
                          <TableCell>{changedDate(repo.updated_at)}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography
                sx={{ mt: 40, display: "flex", justifyContent: "center" }}
                variant="h4"
                color={"#4F4F4F"}
              >
                Добро пожаловать
              </Typography>
            )}
          </Grid>
          {repositories.length > 0 && <Sidebar />}

        </Grid>
      </Container>
    </>
  );
};

export default App;
