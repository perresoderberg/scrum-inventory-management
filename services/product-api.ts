import { API_URL } from "./api";
import type { ProductsResponse } from "@/types/product";

export async function getProducts(
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?_sort=id&_order=desc&_expand=category`,
  );

  if (!response.ok) {
    throw new Error("Failed to load products.");
  }

  return response.json();
}