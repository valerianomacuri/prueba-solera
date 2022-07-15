import { Col, Container, Row } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import { Outlet } from "react-router-dom";
import ServiceForm from "../components/ServiceForm";

const Layout = () => {
  return (
    <>
      <CustomNavbar />
      <Container
        style={{
          padding: "30px 10px",
        }}
      >
        <Row>
          <Col sm={8}>
            <Outlet />
          </Col>
          <Col sm={4}>
            <ServiceForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
