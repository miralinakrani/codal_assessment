import { ProductListType } from '@/types/productListingpage.type'
import Image from 'next/image'

const ProductList = ({ currentPage, itemsPerPage, filteredProducts, setCurrentPage, totalPages, paginatedProducts }: ProductListType) => {
    return (
        <div className="lg:w-3/4 w-full">
            <div className="text-sm text-gray-600 mb-4">
                Showing {(currentPage - 1) * itemsPerPage + 1} -{' '}
                {Math.min(currentPage * itemsPerPage, filteredProducts?.length)} of{' '}
                {filteredProducts?.length}
            </div>

            {/* Pagination */}
            {filteredProducts?.length > 0 && (
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 border rounded ${currentPage === 1
                            ? 'text-gray-400 border-gray-300'
                            : 'hover:bg-gray-200'
                            }`}
                    >
                        Prev
                    </button>
                    <p className="text-sm">
                        Page {currentPage} of {totalPages}
                    </p>
                    <button
                        onClick={() =>
                            setCurrentPage(Math.min(currentPage + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 border rounded ${currentPage === totalPages
                            ? 'text-gray-400 border-gray-300'
                            : 'hover:bg-gray-200'
                            }`}
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts?.length > 0 ? (
                    paginatedProducts?.map((product) => (
                        <div
                            key={product?.id}
                            className="border border-gray-200 rounded-lg p-4"
                        >
                            <Image
                                src={product?.image}
                                alt={product?.name}
                                className="h-40 w-full object-cover mb-4"
                                width={600}
                                height={400}
                            />
                            <h3 className="text-sm font-bold capitalize mb-1">
                                {product?.brand}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">{product?.name}</p>
                            <p className="font-bold text-lg mb-4">${product?.price}</p>
                            <button className="bg-yellow-400 text-black rounded px-4 py-2 text-sm font-bold">
                                VIEW PRODUCT
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-gray-500">
                        No products found.
                    </p>
                )}
            </div>

        </div>
    )
}

export default ProductList