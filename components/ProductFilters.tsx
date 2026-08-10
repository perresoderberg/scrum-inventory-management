/* Surfplatta och desktop */import Image from "next/image";
import styles from "./ProductFilters.module.css";

export default function ProductFilters() {
    return (
        // Formulär för sökning och filtrering av produkter
        <form className={styles.productFilters}>

            {/* Etikett för tillgänglighet (visas endast för skärmläsare) */}
            <label className={styles.srOnly} htmlFor="search">
                Search products
            </label>

            {/* Sökfält */}
            <input
                id="search"
                name="query"
                type="search"
                placeholder="Search products..."
            />

            {/* Dold etikett för kategorifiltret */}
            <label className={styles.srOnly} htmlFor="category">
                Category
            </label>

            {/* Lista med produktkategorier */}
            <select id="category" name="category" defaultValue="">
                <option value="">All categories</option>
            </select>

            {/* Dold etikett för lagerstatus */}
            <label className={styles.srOnly} htmlFor="stock">
                Stock status
            </label>
            
            {/* Lista med lagerstatus */}
            <select id="stock" name="stock" defaultValue="">
                <option value="">All stock</option>
            </select>

            {/* Filterknapp med dekorativ ikon */}
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