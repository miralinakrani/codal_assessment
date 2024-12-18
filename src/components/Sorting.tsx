import { SortingType } from '@/types/productListingpage.type'

const Sorting = ({ sortOption, setSortOption }: SortingType) => {
    return (
        <div className="mb-6">
            <h4 className="font-bold mb-2">Sort By</h4>
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e?.target?.value)}
                className="border border-gray-300 rounded p-2 text-sm w-full"
            >
                <option value="">Default</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>
        </div>
    )
}

export default Sorting