"use client";

import Image from "next/image";
import styles from "./ProductFilters.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import type { Category } from "@/types/category";

type ProductFiltersProps = {
    categories?: Category[];
};

export default function ProductFilters({ categories }: ProductFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Hämtar formulärets värden/all data från formuläret
        const formData = new FormData(event.currentTarget);

        const search = formData.get("search")?.toString().trim() ?? "";
        const category = formData.get("category")?.toString() ?? "";
        const stock = formData.get("stock")?.toString() ?? "";

        // Kopierar befintliga parametrar från URL:en
        const params = new URLSearchParams();

        if (search) {
            params.set("search", search);
        } else {
            params.delete("search"); // Tar bort search parametern från URL:en om den är tom
        }

        if (category) {
            params.set("category", category);
        } else {
            params.delete("category");
        }

        if (stock) {
            params.set("stock", stock);
        } else {
            params.delete("stock");
        }

        // Vid nytt filter börjar vi från första sidan
        params.set("page", "1");
        
        // Uppdaterar URL:en med de valda filtren
        router.push(`?${params.toString()}`);
    }

    return (
        // Formulär för sökning och filtrering av produkter
        <form
            className={styles.productFilters}
            onSubmit={handleSubmit}>

            {/* Etikett för tillgänglighet (visas endast för skärmläsare) */}
            <label className={styles.srOnly} htmlFor="search">
                Search products
            </label>

            {/* Sökfält */}
            <input
                id="search"
                name="search"
                type="search"
                placeholder="Search products..."
                defaultValue={searchParams.get("search") ?? ""} />

            {/* Dold etikett för kategorifiltret */}
            <label className={styles.srOnly} htmlFor="category">
                Category
            </label>

            {/* Lista med produktkategorier */}
            <select
                id="category"
                name="category"
                // Dropdownen kommer ihåg valet efter att sidan laddats om
                defaultValue={searchParams.get("category") ?? ""}>
                <option value="">All categories</option>
                {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>

            {/* Dold etikett för lagerstatus */}
            <label className={styles.srOnly} htmlFor="stock">
                Stock status
            </label>

            {/* Lista med lagerstatus */}
            <select
                id="stock"
                name="stock"
                defaultValue={searchParams.get("stock") ?? ""}>

                <option value="">All stock</option>
                <option value="in-stock">In stock</option>
                <option value="low-stock">Low stock</option>
                <option value="out-of-stock">Out of stock</option>
            </select>

            {/* Filterknapp med dekorativ ikon */}
            <button type="submit" className={styles.filterButton}>
                <Image
                    src="/icons/filter.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true" />

                <span>Filter</span>
            </button>
        </form>
    );
}