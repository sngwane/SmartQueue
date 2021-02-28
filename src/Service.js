import { useHistory } from "react-router-dom";
export const Service = ({ service }) => {
  const history = useHistory();
  const handleClick = () => {
    //add to queue
    history.push("/queue");
  };
  return (
    <li
      className="service list-group-item list-group-item-action"
      onClick={handleClick}
    >
      {service.name}
    </li>
  );
};
