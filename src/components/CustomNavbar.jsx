import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

function CustomNavbar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <CustomButton variant="text" to="/" onClick={() => navigate("/")}>
              Todos
            </CustomButton>

            <CustomButton
              variant="text"
              to="/cars"
              onClick={() => navigate("/cars")}
            >
              Autos
            </CustomButton>
            <CustomButton
              variant="text"
              to="/health"
              onClick={() => navigate("/health")}
            >
              Salud
            </CustomButton>
            <CustomButton
              variant="text"
              to="/home"
              onClick={() => navigate("/home")}
            >
              Hogar
            </CustomButton>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
