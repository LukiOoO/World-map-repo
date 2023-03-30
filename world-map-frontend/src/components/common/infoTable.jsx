import TableHead from "./infoTableHead";
import TableBody from "./infoTableBody";

const TableInfo = ({ displayData }) => {
  return (
    <table>
      <TableHead />
      <TableBody displayData={displayData} />
    </table>
  );
};

export default TableInfo;
