export default function ProductFilters() {
    return (
        <article className="flex product-filters mt-5 mb-5 w-full bg-white">
            <form className="flex shrink items-center justify-between gap-4 p-4">
            {<input type="text" className="w-245 shrink ... rounded-md border border-gray-300 p-2" placeholder="Search products..." />}
            {<select className="w-32 rounded-md border border-gray-300 p-2">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
            </select>}
            {<select className="w-32 rounded-md border border-gray-300 p-2">
                <option value="">All Stock</option>
                <option value="brand1">Brand 1</option> 
            </select>}
            {<button type="submit" className="w-15 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600">Filter</button>}
            </form>
        </article>
    );
}