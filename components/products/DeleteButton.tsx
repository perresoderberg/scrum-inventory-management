"use client";

import { useFormStatus } from "react-dom";

import Image from "next/image";
import { deleteProductAction } from "@/app/actions/deleteProductAction";

function DeleteButtonIcon() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-label="Delete product"
      disabled={pending}
      className="cursor-pointer disabled:cursor-not-allowed"
    >
      <Image src="/icons/trash.svg" alt="" width={20} height={20} />
    </button>
  );
}

export default function DeleteButton({ id }: { id: number }) {
  return (
    <form action={deleteProductAction}>
      <input type="hidden" name="id" value={id} />

      <DeleteButtonIcon />
    </form>
  );
}
