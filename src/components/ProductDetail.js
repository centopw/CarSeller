import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import { NewspaperIcon, BoltIcon, CpuChipIcon, PowerIcon } from "@heroicons/react/24/outline"

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

  return (
    <div className='overflow-hidden'>
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
              </div>
            </div>

            {/* Product details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>
                </div>
              </div>

              <div className="gap-2 pt-5 *:p-2 *:rounded-lg">
                <span className="flex">
                  <NewspaperIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {product.capacity} people
                </span>
                <span className="flex">
                  <PowerIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {product.gasUsage} km\1 liter
                </span>
                <span className="flex">
                  <BoltIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {product.carType}
                </span>
                <span className="flex">
                  <CpuChipIcon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {product.controlType}
                </span>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Pay {product.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;