import ProductTable from "@/components/ProductTable";
import { getProducts } from "@/services/product-api";
import InventoryHeader from "../components/InventoryHeader";
import ProductFilters from "../components/ProductFilters";

export default async function Home() {
  const resp = await getProducts();
  console.log(resp);

  const { products } = await getProducts();

  return (
    <main>
      <InventoryHeader />
      <ProductFilters />
      <ProductTable products={products} />
    </main>
  );
}
