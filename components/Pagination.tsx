import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  console.log("currentPage=" + currentPage + " totalPages=" + totalPages);

  if (!totalPages) return null;

  const items: (string | number)[] = [];

  for (let page = 1; page <= Math.min(3, totalPages); page++) {
    items.push(page);
  }
  if (totalPages > 4) {
    items.push("...");
  }
  if (totalPages > 3) {
    items.push(totalPages);
  }

  const paginationButtonStyle = "size-9 grid place-items-center border rounded";
  return (
    <nav className="flex justify-center items-center gap-2 mt-3">
      <Link
        href={`/?page=${currentPage - 1}`}
        aria-disabled={currentPage === 1}
        className={paginationButtonStyle}
      >
        {`<`}
      </Link>
      {items.map((item) =>
        typeof item === "number" ? (
          <Link
            key={item}
            href={`/?page=${item}`}
            className={
              item === currentPage
                ? `${paginationButtonStyle} bg-gray-600 text-white`
                : paginationButtonStyle
            }
          >
            {item}
          </Link>
        ) : (
          <span key="dots">...</span>
        ),
      )}
      <Link
        href={`/?page=${currentPage + 1}`}
        aria-disabled={currentPage === 1}
        className={paginationButtonStyle}
      >
        {`>`}
      </Link>
    </nav>
  );
}
