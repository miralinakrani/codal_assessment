export interface ProductListType  {
    currentPage: number;
    itemsPerPage: number;
    filteredProducts: Product[];
    setCurrentPage: (page: number) => void;
    totalPages: number;
    paginatedProducts: Product[];
}

export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
}

export interface SortingType {
    sortOption: string;
    setSortOption: (value: string) => void;
  }

export interface FiltersType {
    selectedBrands: string[];
    handleBrandChange: (brand: string) => void;
    handleClearFilters: () => void;
  }