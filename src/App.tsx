/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';

export default function App() {
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#1C1917] flex flex-col font-sans">
      {/* Top Header */}
      <Header />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Simple Minimalist Title */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#1C1917] uppercase">
            Uniformes e Vestuário Personalizado
          </h1>
        </div>

        {/* Product Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={(p) => setDetailProduct(p)}
            />
          ))}
        </div>
      </main>


      {/* Clean Photo Zoom Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
