import { useCallback, useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = event => {
    event.preventDefault();
    navigate(to);
  };
  return (
    <a onClick={handleClick} src={to}>
      {children}
    </a>
  );
}

export default Link;
