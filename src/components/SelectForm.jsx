import Form from "react-bootstrap/Form";

const categories = [
  {
    name: "Autos",
    value: "cars",
  },
  {
    name: "Salud",
    value: "health",
  },
  {
    name: "Hogar",
    value: "home",
  },
];

function SelectForm({ onSelect, name, value }) {
  return (
    <Form.Select
      name={name}
      aria-label="Default select example"
      onChange={onSelect}
      value={value}
    >
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.name}
        </option>
      ))}
    </Form.Select>
  );
}

export default SelectForm;
