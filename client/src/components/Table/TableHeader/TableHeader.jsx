import { Box } from "@mui/system";
import React, { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { TableHeaderCell } from "./TableHeaderCell";
import { HeaderView } from "./HeaderView/HeaderView";

const tableHeaderStyles = {
  wrapper: {
    width: "100%",
    height: "32px",
  },
  headersRows: {
    height: "32px",
    display: "flex",
    borderTop: 1,
    borderColor: "#fff",
  },
};

export const TableHeader = ({ startResize }) => {
  const [tableState] = useContext(TableContextValue);
  return (
    <Box sx={tableHeaderStyles.wrapper}>
      <Box sx={tableHeaderStyles.headersRows}>
        {tableState.header.map((cell, index) => (
          <TableHeaderCell
            key={cell + index}
            headerCell={cell}
            index={index}
            startResize={startResize}
          />
        ))}
        <Box sx={{ display: "flex" }}>
          <HeaderView />
        </Box>
      </Box>
    </Box>
  );
};
