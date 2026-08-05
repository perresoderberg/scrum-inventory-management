

export default function InventoryStats(){//{ products }: { products: ProductsResponse["products"] }) {
  const totalProducts = 193;// products.length;
  const inStockProducts = 169;// products.filter((product) => product.stock > 0).length;
  const lowStockProducts = 20;// products.filter((product) => product.stock > 0 && product.stock < 5).length;
  const outOfStockProducts = 4;// products.filter((product) => product.stock === 0).length;
  //const totalItems = 145;// products.reduce((sum, product) => sum + (product.stock || 0), 0);
  return (
    <article style={{ display: "inline-flex", gap: "1rem", marginBottom: "1rem" }}>
      <section style={{ display: "inline-flex", justifyContent: "space-between", minWidth: "300px", fontSize: "16px", border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
        <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>PRODUCTS
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#7769ca" }}>{totalProducts}</p>
        </div>
        <img src="/icons/product.svg" alt="Product Icon" width={30} height={30} /> {/* Adjust the path to your icon */}
      </section>
      <section style={{ display: "inline-flex", justifyContent: "space-between", minWidth: "300px", fontSize: "16px", border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
        <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>IN STOCK</div>
        <p>{inStockProducts}</p>
        <img src="/icons/check-circle.svg" alt="In Stock Icon" width={30} height={30} /> {/* Adjust the path to your icon */}
      </section>
      <section style={{ display: "inline-flex", justifyContent: "space-between", minWidth: "300px", fontSize: "16px", border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
        <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>LOW STOCK</div>
        <p>{lowStockProducts}</p>
        <img src="/icons/warning.svg" alt="Low Stock Icon" width={30} height={30} /> {/* Adjust the path to your icon */}
      </section>
      <section style={{ display: "inline-flex", justifyContent: "space-between", minWidth: "300px", fontSize: "16px", border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem", backgroundColor: "#f1f1f1", borderRadius: "8px" }}>
        <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>OUT OF STOCK</div>
          <p>{outOfStockProducts}</p>
          <img src="/icons/cancel.svg" alt="Out of Stock Icon" width={30} height={30  } /> {/* Adjust the path to your icon */}
      </section>
    </article>
  );
}