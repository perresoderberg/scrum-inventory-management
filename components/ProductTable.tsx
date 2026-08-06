import type { Product } from "@/types/product";
import ProductRow from "./ProductRow";

type Props = {
  products: Product[];
};

const headerCellStyle = "p-4 text-sm font-semibold text-gray-600";

export default function ProductTable({ products }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className={`${headerCellStyle} text-left`}>Title</th>

            <th className={`${headerCellStyle} text-left`}>Brand</th>

            <th className={`${headerCellStyle} text-left`}>Category</th>

            <th className={`${headerCellStyle} text-right`}>Stock</th>

            <th className={`${headerCellStyle} text-right`}>Price</th>

            <th className={`${headerCellStyle} text-left`}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
