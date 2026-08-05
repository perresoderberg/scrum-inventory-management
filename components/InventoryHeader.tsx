import styles from "./InventoryHeader.module.css";

export default function InventoryHeader() {
    return (
        <header className={styles.inventoryHeader}>
            <div className={styles.headerContent}>
                <h1>Inventory Management</h1>
                <p>Manage and track your global product catalogue across all categories</p>
            </div>

            <button type="button" className={styles.primaryButton}>
                <span aria-hidden="true">+</span>
                Add Product
            </button>
        </header>
    );
}