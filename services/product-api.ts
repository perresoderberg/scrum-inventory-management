import { API_URL } from "./api";
import type { ProductsResponse } from "@/types/product";

const DEFAULT_LIMIT = 8;

// Beskriver vilka filter som kan skickas till API-anropet
type ProductFilters = {
  search?: string;
  categoryId?: string;
  stock?: string;
};

// Hämtar produkter från API:t med paginering och valda filter
export async function getProducts(
  page: number = 1,
  limit: number = DEFAULT_LIMIT,
  filters: ProductFilters = {},
): Promise<ProductsResponse> {
  const params = new URLSearchParams({  // Bygger query-parametrarna som skickas med i API-anropet
    _page: page.toString(),             // Aktuell sida
    _limit: limit.toString(),           // Antal produkter per sida
    _sort: "id",                        // Sorterar efter produktens id
    _order: "desc",                     // Nyaste/högsta id först
    _expand: "category",                // Hämtar även produktens kategori
  });

  // json-server använder q för fulltextsökning
  if (filters.search) {
    params.set("q", filters.search);
  }

  // Filtrerar produkter på valt categoryId
  if (filters.categoryId) {
    params.set("categoryId", filters.categoryId);
  }

  // Visar produkter som är slut i lager
  if (filters.stock === "out-of-stock") {
    params.set("stock", "0");
  }

  // Visar produkter med 1–10 i lager
  if (filters.stock === "low-stock") {
    params.set("stock_gte", "1");
    params.set("stock_lte", "10");
  }

  // Visar produkter med minst 11 i lager
  if (filters.stock === "in-stock") {
    params.set("stock_gte", "11");
  }

  // Skickar GET-anropet till API:t med alla query-parametrar
  const response = await fetch(
    `${API_URL}/products?${params.toString()}`
  );

  // Kastar ett fel om API-anropet misslyckas
  if (!response.ok) {
    throw new Error("Failed to load products.");
  }

  // Omvandlar JSON-svaret och returnerar produktdatan
  return response.json();
}