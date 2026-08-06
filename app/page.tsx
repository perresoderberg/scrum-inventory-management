import ProductTable from "@/components/ProductTable";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/product-api";
import InventoryHeader from "../components/InventoryHeader";

export default async function Home() {
  const resp = await getProducts();
  console.log(resp);

  const { products, total, page } = await getProducts();

  return (
    <main>
      <InventoryHeader />
      <ProductTable products={products} />
      <Pagination currentPage={page} totalPages={total} />
    </main>
  );
}
