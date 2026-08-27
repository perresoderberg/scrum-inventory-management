import ProductTable from "@/components/products/ProductTable";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/services/product-api";
import { getAllProducts } from "@/services/product-api";
import InventoryHeader from "../components/inventory/InventoryHeader";
import ProductFilters from "../components/products/ProductFilters";
// import AddProductForm from "../components/AddProductForm";
import InventoryStats from "../components/inventory/InventoryStats";
import { getCategories } from "@/services/category-api";

type HomeProps = {
  searchParams: Promise<{
    page?: string;
    search?: string;
    category?: string;
    stock?: string;
    sort?: string;
    order?: "asc" | "desc";
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  // Hämtar värden från URL:ens searchParams
  const params = await searchParams;
  const page = Number(params.page ?? "1");

  const search = params.search ?? "";
  const category = params.category ?? "";
  const stock = params.stock ?? "";

  const sort = params.sort ?? "id";
  const order = params.order ?? "desc";

  // Hämtar produkter och kategorier på servern
  const [{ products, pages }, categories, { products: allProducts }] =
    await Promise.all([
      getProducts(page, 8, {
        search,
        categoryId: category,
        stock,
        sort,
        order,
      }),
      getCategories(),
      getAllProducts(),
    ]);

  return (
    <main className="mx-auto bg-[#F5F5F5] w-400">
      <InventoryHeader />
      {/* <AddProductForm /> */}
      <InventoryStats products={allProducts} />
      <ProductFilters categories={categories} />
      <ProductTable
        products={products}
        sort={sort}
        order={order}
        search={search}
        category={category}
        stock={stock}
      />
      <Pagination currentPage={page} totalPages={pages} />
    </main>
  );
}
