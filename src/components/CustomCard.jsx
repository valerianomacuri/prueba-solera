import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useServices } from "../hooks";

function CustomCard({ service }) {
  const { deleteService, editService } = useServices();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="link" onClick={() => editService(service)}>
          Editar
        </Button>
        <Button variant="link" onClick={() => deleteService(service.id)}>
          Eliminar
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default CustomCard;
