import styles from "./InventoryStats.module.css";

export default function InventoryStats(){//{ products }: { products: ProductsResponse["products"] }) {
  const totalProducts = 193;// products.length;
  const inStockProducts = 169;// products.filter((product) => product.stock > 0).length;
  const lowStockProducts = 20;// products.filter((product) => product.stock > 0 && product.stock < 5).length;
  const outOfStockProducts = 4;// products.filter((product) => product.stock === 0).length;
  //const totalItems = 145;// products.reduce((sum, product) => sum + (product.stock || 0), 0);
  return (
    <article className={styles.inventorystatsArticle}>
      <section className={styles.inventorystatsCard}>
        <div>
          <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>TOTAL ITEMS</div>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#7769ca" }}>{totalProducts}</div>
        </div>
        <img src="/icons/product.svg" alt="Total Items Icon" width={30} height={30} /> {/* Adjust the path to your icon */}
      </section>
      <section className={styles.inventorystatsCard}>
        <div>
            <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>IN STOCK</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#23a72d" }}>{inStockProducts}</div>
        </div>
        <img src="/icons/check-circle.svg" alt="In Stock Icon" width={30} height={30} /> {/* Adjust the path to your icon */}
      </section>
      <section className={styles.inventorystatsCard}>
        <div>
            <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>LOW STOCK</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#e79b3c" }}>{lowStockProducts}</div>
        </div>
        <img src="/icons/warning.svg" alt="Low Stock Icon" width={30} height={30} /> {/* Adjust the path to your icon */}
      </section>
      <section className={styles.inventorystatsCard}>
        <div>
            <div style={{ fontSize: "12px", color: "#757575", fontWeight: "600" }}>OUT OF STOCK</div>
            <div style={{ fontSize: "24px", fontWeight: "bold", color: "#dc4d32" }}>{outOfStockProducts}</div>
        </div>
        <img src="/icons/cancel.svg" alt="Out of Stock Icon" width={30} height={30  } /> {/* Adjust the path to your icon */}
      </section>
    </article>
  );
}