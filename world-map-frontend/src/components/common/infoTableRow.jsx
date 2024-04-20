const TableRow = ({ index, info }) => {
  return (
    <tr key={index}>
      <td>{info.name}</td>
      <td>{info.indepyear}</td>
      <td>{info.headofstate}</td>
      <td>{info.capital}</td>
    </tr>
  );
};

export default TableRow;
