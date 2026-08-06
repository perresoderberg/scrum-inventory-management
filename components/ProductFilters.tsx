/* Surfplatta och desktop */import Image from "next/image";
import styles from "./ProductFilters.module.css";

export default function ProductFilters() {
    return (
        <form className={styles.productFilters}>
            <label className={styles.srOnly} htmlFor="search">
                Search products
            </label>
            <input
                id="search"
                name="query"
                type="search"
                placeholder="Search products..."
            />

            <label className={styles.srOnly} htmlFor="category">
                Category
            </label>

            <select id="category" name="category" defaultValue="">
                <option value="">All categories</option>
            </select>

            <label className={styles.srOnly} htmlFor="stock">
                Stock status
            </label>

            <select id="stock" name="stock" defaultValue="">
                <option value="">All stock</option>
            </select>

            <button type="submit" className={styles.filterButton}>
                <Image
                    src="/icons/filter.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                />

                <span>Filter</span>
            </button>
        </form>
    );
}