import { useParams } from "react-router-dom";

const CamperDetails = () => {
  const { id } = useParams;

  return <div>Деталі кемпера з ID: {id}</div>;
};

export default CamperDetails;
