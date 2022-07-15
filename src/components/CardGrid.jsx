import CustomCard from "./CustomCard";
import "../styles/CardGrid.css";

const CardGrid = ({ services }) => {
  if (!services) return <div>No hay servicios</div>;
  return (
    <div className="CardGrid">
      {services?.map((service) => (
        <CustomCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default CardGrid;
