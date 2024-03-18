import { NewspaperIcon, BoltIcon, CpuChipIcon, PowerIcon } from "@heroicons/react/24/outline"
import { products } from '../data'
import React, { useState } from "react"

export default function Product() {
  const [carType, setCarType] = useState('');
  const [controlType, setControlType] = useState('');
  const [makeYear, setMakeYear] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const uniqueCarTypes = [...new Set(products.map(product => product.carType))];
  const uniqueControlTypes = [...new Set(products.map(product => product.controlType))];
  const uniqueMakeYears = [...new Set(products.map(product => product.makeYear))];

  const handleSearch = () => {
    const newFilteredProducts = products.filter(product =>
      (carType === '' || product.carType === carType) &&
      (controlType === '' || product.controlType === controlType) &&
      (makeYear === '' || product.makeYear === makeYear)
    );
    setFilteredProducts(newFilteredProducts);
  };
  return (

    <div className="bg-white max-x-7xl">
      <form className="px-8 mb-8">
        <div className="mx-auto sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
          <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] ">
            <label className="block text-sm font-medium "><span className="sr-only">Car type</span></label>
            <select id="carType" value={carType} onChange={e => setCarType(e.target.value)} className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 ">
              <option value="">Car type</option>
              {uniqueCarTypes.map(type => <option value={type}>{type}</option>)}
            </select>
          </div>
          <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] ">
            <label className="block text-sm font-medium "><span className="sr-only">Control type</span></label>
            <select id="controlType" value={controlType} onChange={e => setControlType(e.target.value)} className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 ">
              <option value="">Control type</option>
              {uniqueControlTypes.map(type => <option value={type}>{type}</option>)}
            </select>
          </div>
          <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s sm:flex-[1_0_0%] ">
            <label className="block text-sm font-medium "><span className="sr-only">Make year</span></label>
            <select id="makeYear" value={makeYear} onChange={e => setMakeYear(e.target.value)} className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 ">
              <option value="">Make year</option>
              {uniqueMakeYears.map(year => <option value={year}>{year}</option>)}
            </select>
          </div>
          <div className="pt-2 sm:pt-0 grid sm:block sm:flex-[0_0_auto]">
            <button type="button" onClick={handleSearch} className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="mx-auto  overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pb-4 pt-10 text-left">
                <div className="flex">
                  <h3 className="text-sm font-medium text-gray-900 flex-auto w-48">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <span className="text-sm font-medium text-gray-900 justify-end flex-auto bg-gray-100 round-xl text-center">{product.makeYear}</span>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-2 pt-5 *:p-2 *:rounded-lg">
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
                <div className="flex justify-center">
                  <span className="mt-5 block py-2 text-base font-medium text-gray-900 hover:bg-gray-50  w-24 flex-auto">{product.price} /month</span>
                  <button type="button" className="mt-5 block bg-white border border-gray-200 rounded-md py-2 text-base font-medium text-gray-900 hover:bg-gray-50 flex-auto">Rent now</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}