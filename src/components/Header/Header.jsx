import { Box, Button, TablePagination, TextField } from "@mui/material";
import React, { useState } from "react";
import { getRepositories } from "../../api/getRepositories";
import { useDispatch, useSelector } from "react-redux";
import { typingNewValue } from "../../store/searchValueSlice";

export default function Header({
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.list.list);
  console.log(repositories);

  function changeValue(event) {
    const value = event.target.value;
    setValue(value);
    dispatch(typingNewValue(value));
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        background: "#00838F",
        padding: { xs: "10px 20px", sm: "15px 20px" },
        gap: { xs: "10px", sm: "15px" },
      }}
    >
      <TextField
        label="Поисковый запрос"
        variant="outlined"
        fullWidth
        sx={{
          background: "white",
          width: { xs: "100%", sm: "600px" },
        }}
        value={value}
        onChange={changeValue}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: { xs: "100%", sm: "auto" },
        }}
        onClick={() => dispatch(getRepositories(value))}
      >
        Искать
      </Button>
      {repositories.length > 0 && (
        <Box
          sx={{
            width: { xs: "100%", sm: "auto" },
            mt: { xs: "10px", sm: 0 },
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <TablePagination
            sx={{
              color: "white",
              ".MuiTablePagination-toolbar": {
                flexWrap: "wrap",
              },
            }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={repositories.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      )}
    </Box>
  );
}
