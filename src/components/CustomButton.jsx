import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const CustomButton = ({ children, to, ...props }) => {
  const location = useLocation();
  const match = location.pathname === to;
  return (
    <Button style={{ fontWeight: match ? "bold" : "normal" }} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
