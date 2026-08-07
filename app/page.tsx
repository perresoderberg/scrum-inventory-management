import ProductTable from "@/components/ProductTable";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/product-api";
import InventoryHeader from "../components/InventoryHeader";
import ProductFilters from "../components/ProductFilters";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page ?? "1");
  const { products, pages } = await getProducts(page);

  console.log(`load the page ${params} ${page}`);
  return (
    <main>
      <InventoryHeader />
      <ProductFilters />
      <ProductTable products={products} />
      <Pagination currentPage={page} totalPages={pages} />
    </main>
  );
}
