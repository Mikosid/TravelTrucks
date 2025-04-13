import { useParams } from "react-router-dom";

const CamperDetailsPage = () => {
  const { id } = useParams;

  return <div>Деталі кемпера з ID: {id}</div>;
};

export default CamperDetailsPage;
