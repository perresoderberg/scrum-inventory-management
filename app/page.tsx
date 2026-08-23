import ProductTable from "@/components/ProductTable";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/product-api";
import InventoryHeader from "../components/InventoryHeader";
import ProductFilters from "../components/ProductFilters";
import AddProductForm from "../components/AddProductForm";
import InventoryStats from "../components/InventoryStats";
import { getCategories } from "@/services/category-api";

type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
    stock?: string;
  }>;
};

export default async function Home({ searchParams }: Props) {
  // Hämtar värden från URL:ens searchParams
  const params = await searchParams;

  const page = Math.max(1, Number(params.page ?? "1") || 1);
  const search = params.search ?? "";
  const category = params.category ?? "";
  const stock = params.stock ?? "";

  // Hämtar produkter och kategorier på servern
  const [{ products, pages }, categories] = await Promise.all([
    getProducts(page, 8, {
      search,
      categoryId: category,
      stock,
    }),
    getCategories(),
  ]);

  // Istället för Promise.all, två separata anrop (mindre effektivt)
  // const { products, pages } = await getProducts(page, 8, {
  //     search,
  //     categoryId: category,
  //     stock,
  // });

  // const categories = await getCategories();

  // console.log("Search:", search);

  return (
    <main>
      <InventoryHeader />
      <InventoryStats products={products} />
      <ProductFilters categories={categories} />
      <ProductTable products={products} />
      <Pagination currentPage={page} totalPages={pages} />
      <AddProductForm />
    </main>
  );
}
