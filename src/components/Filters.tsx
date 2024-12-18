import { FiltersType } from '@/types/productListingpage.type'

const Filters = ({ selectedBrands, handleBrandChange, handleClearFilters }: FiltersType) => {
    return (
        <>
            {selectedBrands?.length > 0 && (
                <div className="mb-4">
                    <h4 className="font-bold mb-2">Active Filters</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedBrands?.map((brand) => (
                            <span
                                key={brand}
                                className="bg-gray-200 px-2 py-1 rounded text-sm flex items-center"
                            >
                                {brand}
                                <button
                                    className="ml-2 text-red-500"
                                    onClick={() => handleBrandChange(brand)}
                                >
                                    ✕
                                </button>
                            </span>
                        ))}
                        <button
                            onClick={handleClearFilters}
                            className="text-sm text-red-500 underline"
                        >
                            Clear All
                        </button>
                    </div>
                </div>
            )}

            <div className="mb-6">
                <h4 className="font-bold mb-2">Brand</h4>
                {['mobil', 'peak', 'old world'].map((brand) => (
                    <label key={brand} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                        />
                        <span className="capitalize">{brand}</span>
                    </label>
                ))}
            </div></>
    )
}

export default Filters