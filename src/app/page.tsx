'use client';
import { useState, useMemo } from 'react';
import { productsList } from './data/data';
import Breadcrumb from '@/components/Breadcrumb';
import Filters from '@/components/Filters';
import Sorting from '@/components/Sorting';
import ProductList from '@/components/ProductList';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('');

  const handleBrandChange = (brand: string) => {
    setCurrentPage(1);
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setCurrentPage(1);
  };

  const filteredProducts = useMemo(() => {
    let filtered = productsList;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (sortOption === 'low-to-high') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedBrands, sortOption]);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Breadcrumb />

      <h1 className="text-2xl font-bold mb-6">Hydraulic Fluids</h1>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 w-full lg:pr-4 mb-6 lg:mb-0">
          <h3 className="font-bold text-lg mb-4">Filters</h3>

          <Filters selectedBrands={selectedBrands} handleBrandChange={handleBrandChange} handleClearFilters={handleClearFilters} />

          <Sorting sortOption={sortOption} setSortOption={setSortOption} />
        </div>

        <ProductList currentPage={currentPage} itemsPerPage={itemsPerPage} filteredProducts={filteredProducts} setCurrentPage={setCurrentPage} totalPages={totalPages} paginatedProducts={paginatedProducts} />
      </div>
    </div>
  );
}
