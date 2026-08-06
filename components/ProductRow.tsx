import Image from "next/image";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

const cellStyle = "p-4";

export default function ProductRow({ product }: Props) {
  return (
    <tr className="border-b border-gray-200">
      <td className={`${cellStyle} text-left`}>
        <div className="flex items-center gap-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={30}
            height={30}
            className=""
          />

          <div>
            <div className="font-bold">{product.title}</div>
            <div className="text-xs text-gray-500">SKU: {product.sku}</div>
          </div>
        </div>
      </td>

      <td className={`${cellStyle} text-left`}>{product.brand}</td>

      <td className={`${cellStyle} text-left`}>{product.category?.name}</td>

      <td className={`${cellStyle} text-right`}>{product.stock}</td>

      <td className={`${cellStyle} text-right`}>€{product.price}</td>

      <td className={`${cellStyle} text-left`}>
        <div className="flex gap-4">
          <Image
            src="/icons/trash.svg"
            alt="Delete"
            width={15}
            height={15}
            className="cursor-pointer"
          />

          <Image
            src="/icons/pen.svg"
            alt="Edit"
            width={15}
            height={15}
            className="cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
}
