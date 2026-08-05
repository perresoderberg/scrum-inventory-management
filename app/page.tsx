import ProductTable from "@/components/ProductTable";
import { getProducts } from "@/services/product-api";

export default async function Home() {
  const resp = await getProducts();
  console.log(resp);

  const { products } = await getProducts();

  return (
    <main>
      <ProductTable products={products} />
    </main>
  );
}
