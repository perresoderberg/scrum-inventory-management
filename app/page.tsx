import ProductTable from "@/components/ProductTable";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/product-api";
import { getAllProducts } from "@/services/product-api";
import InventoryHeader from "../components/InventoryHeader";
import ProductFilters from "../components/ProductFilters";
import AddProductForm from "../components/AddProductForm";
import InventoryStats from "../components/InventoryStats";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page ?? "1");
  const { products, pages } = await getProducts(page);
  const { products: allProducts } = await getAllProducts();

  console.log(`load the page ${params} ${page}`);
  return (
    <main>
      <InventoryHeader />
      <InventoryStats products={allProducts} />
      <ProductFilters />
      <ProductTable products={products} />
      <AddProductForm />
      <Pagination currentPage={page} totalPages={pages} />
    </main>
  );
}
