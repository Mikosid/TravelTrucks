import { useEffect, useState } from "react";
import CamperList from "../components/CampersList/CampersList";
import { getCatalog } from "../Catalog-api";

export default function CatalogPage() {
  const [catalogs, setCatalog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCatalog();
      setCatalog(data.items);
    }

    fetchData();
  }, []);

  return <div>{catalogs.length > 0 && <CamperList campers={catalogs} />}</div>;
}
