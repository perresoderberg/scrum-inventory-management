import type { Product } from "@/types/product";

function InventoryStat({ label, value, icon, color }: { label: string; value: number; icon: string; color?: string }) {
  return (
    <div className="bg-white shadow-sm rounded-2xl h-full p-6 text-center min-w-[180px] flex flex-col items-center justify-between gap-4 basis-full grow sm:basis-1 sm:text-left sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className={`text-2xl font-bold ${color || "text-gray-800"}`}>{value}</p>
      </div>
      <img src={icon} alt={`${label} Icon`} width={30} height={30} />
    </div>
  );
}

export default function InventoryStats({ products }: { products: Product[] }) {
  const totalProducts = products.length;
  const totalStock = products.reduce((acc, product) => acc + (product.stock || 0), 0);
  const lowStockProducts = products.filter(product => product.stock !== undefined && product.stock < 10).length;
  const outOfStockProducts = products.filter(product => product.stock === 0).length;

  return (
    <article className="bg-gray-100 grow flex flex-wrap gap-6 py-8 px-4 sm:px-0 border border-gray-200 rounded-xl">
      <section className="bg-white shadow-sm rounded-2xl h-full p-6 text-center min-w-[180px] flex flex-col items-center justify-between gap-4 basis-full grow sm:basis-1 sm:text-left sm:flex-row sm:items-center">
        <div>
          <div className="text-sm text-left text-gray-500">PRODUCTS</div>
          <div className="text-2xl text-purple-500 font-bold text-left">{totalProducts}</div>
        </div>
        <img src="/icons/product.svg" alt="Total Items Icon" width={30} height={30} />
      </section>
      <InventoryStat
        label="IN STOCK"
        value={totalStock}
        icon="/icons/check-circle.svg"
        color="text-green-600"
      />
      <InventoryStat
        label="LOW STOCK"
        value={lowStockProducts}
        icon="/icons/warning.svg"
        color="text-orange-500"
      />
      <InventoryStat
        label="OUT OF STOCK"
        value={outOfStockProducts}
        icon="/icons/cancel.svg"
        color="text-red-500"
      />
    </article>
  );
}
        