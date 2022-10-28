import React from "react";
import { Pagination, Stack } from "@mui/material";

const Paginationbar = () => {
  return (
    <div style={{margin: "40px 0px 60px 8px"}} >
      <Stack>
      <Pagination count={10} shape="rounded"  />
      </Stack>
    </div>
  );
};

export default Paginationbar;
