"use server";

import { revalidatePath } from "next/cache";
import { deleteProduct } from "@/services/product-api";

export async function deleteProductAction(formData: FormData) {
  const id = formData.get("id");

  if (!id) {
    throw new Error("Product id is missing.");
  }

  await deleteProduct(Number(id));

  revalidatePath("/");
}
