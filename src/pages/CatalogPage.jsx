import { useEffect, useState } from "react";
import { getCatalogPage } from "../CatalogPage-api";

export default function CatalogPage() {
  const [catalogPage, setCatalogPage] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCatalogPage();
      setCatalogPage(data);
    }

    fetchData();
  }, []);

  return <div>Сторінка каталогу</div>;
}
