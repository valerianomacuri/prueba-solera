import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import SelectForm from "./SelectForm";
import { useForm, useServices } from "../hooks";
import { useEffect } from "react";
import { initialCurrentService } from "../context/initialState";

function ServiceForm() {
  const { addService, currentService, mode, updateService } = useServices();
  const { formData, handleInputChange, handleReset, setFormData } = useForm(
    initialCurrentService
  );

  const handleSave = () => {
    if (formData.name === "") return;
    if (formData.description === "") return;

    addService({
      ...formData,
    });
    setFormData(initialCurrentService);
  };

  const handleUpdate = () => {
    if (formData.name === "") return;
    if (formData.description === "") return;

    updateService({
      ...formData,
    });
  };

  useEffect(() => {
    setFormData(currentService);
  }, [currentService]);
  return (
    <Card>
      <Card.Body>
        <Card.Title>Servicio</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Categoría</Form.Label>
            <SelectForm
              name="category"
              onSelect={handleInputChange}
              value={formData.category}
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer>
        {mode === "add" ? (
          <Button variant="outline-success" onClick={handleSave}>
            Grabar
          </Button>
        ) : (
          <Button variant="outline-success" onClick={handleUpdate}>
            Actualizar
          </Button>
        )}
        <Button variant="outline-danger" onClick={handleReset}>
          Cancelar
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ServiceForm;
