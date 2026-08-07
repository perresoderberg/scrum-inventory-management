import ProductTable from "@/components/ProductTable";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/product-api";
import InventoryHeader from "../components/InventoryHeader";
import ProductFilters from "../components/ProductFilters";
import AddProductForm from "../components/AddProductForm";

export default async function Home() {
  const { products, total, page } = await getProducts();

  return (
    <main>
      <InventoryHeader />
      <ProductFilters />
      <ProductTable products={products} />
      <Pagination currentPage={page} totalPages={total} />
      <AddProductForm />
    </main>
  );
}
