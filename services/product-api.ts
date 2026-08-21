import { API_URL } from "./api";
import type { ProductsResponse } from "@/types/product";

const DEFAULT_LIMIT = 8;

export async function getProducts(
  page: number = 1,
  limit: number = DEFAULT_LIMIT,
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?_page=${page}&_limit=${limit}&_sort=id&_order=desc&_expand=category`,
  );

  if (!response.ok) {
    throw new Error("Failed to load products.");
  }

  return response.json();
}

export async function getAllProducts(
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?_sort=id&_order=desc&_expand=category`,
  );

  if (!response.ok) {
    throw new Error("Failed to load products.");
  }

  return response.json();
}
