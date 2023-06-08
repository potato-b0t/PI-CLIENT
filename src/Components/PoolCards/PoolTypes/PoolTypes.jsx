import { useSelector } from "react-redux";

const PoolTypes = ({ id, types }) => {
  return (
    <li key={Math.floor(id * 10000 * Math.random())}>
      <p>{types[id - 1]?.name}</p>
    </li>
  );
};

export default PoolTypes;
