import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { GlobalStorage } from '../../Hook/GlobalContext'

export default function FilterControls() {

  const { handleAllData } = React.useContext(GlobalStorage)

  const [filters, setFilters] = React.useState({
    storeID: "",
    title: "",
    lowerPrice: "0",
    upperPrice: "1000",
    minDiscount: "",
    sortBy: "Price"
  })

  function handleSubmit() {
    let urlFinal = ''
    if (Number(filters.lowerPrice) > Number(filters.upperPrice)) {
      window.alert('Lower Price nao pode ser maior que Upper Price!')
      return
    }

    if (filters.title != '') {
      urlFinal = `${urlFinal}&title=${filters.title}`
    }
    if (filters.storeID != '') {
      urlFinal = `${urlFinal}&storeID=${filters.storeID}`
    }
    if (filters.lowerPrice != '') {
      urlFinal = `${urlFinal}&lowerPrice=${filters.lowerPrice}`
    }
    if (filters.upperPrice != '') {
      urlFinal = `${urlFinal}&upperPrice=${filters.upperPrice}`
    }
    if (filters.minDiscount != '') {
      urlFinal = `${urlFinal}&minDiscount=${filters.minDiscount}`
    }

    setFilters({
      storeID: "",
      title: "",
      lowerPrice: "0",
      upperPrice: "1000",
      minDiscount: "",
      sortBy: "Price"
    })

    handleAllData(`/deals?${urlFinal}&sortBy=${filters.sortBy}`)
  }

  return (
    <div className='shadow-2xs shadow-[#c9c9c9] rounded-b-2xl p-1 bg-white'>
      <div className='flex w-full mt-5 flex-col md:justify-around md:flex-row md:items-center'>
        <div>
          <Label htmlFor="title" className="mb-2">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            value={filters.title}
            onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="storeID" className="mb-2 text-black">Store ID</Label>
          <Input
            type="number"
            id="storeID"
            placeholder="Store ID"
            value={filters.storeID}
            onChange={(e) => setFilters({ ...filters, storeID: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="lowerPrice">Lower Price</Label>
          <span>{filters.lowerPrice}</span>
          <Input
            type="range"
            min="0"
            max="1000"
            step="1"
            id="lowerPrice"
            placeholder="Lower Price"
            value={filters.lowerPrice}
            onChange={(e) => setFilters({ ...filters, lowerPrice: e.target.value })}
          />
        </div>

        <div>

          <Label htmlFor="upperPrice">Upper Price</Label>
          <span>{filters.upperPrice}</span>
          <Input
            type="range"
            min="0"
            max="1000"
            step="1"
            id="upperPrice"
            placeholder="Upper Price"
            value={filters.upperPrice}
            onChange={(e) => setFilters({ ...filters, upperPrice: e.target.value })}

          />
        </div>
        <div>

          <Label htmlFor="minDiscount" className="mb-2 text-black">Min Descount</Label>
          <Input
            type="number"
            id="minDiscount"
            placeholder="Min Descount"
            value={filters.minDiscount}
            onChange={(e) => setFilters({ ...filters, minDiscount: e.target.value })}

          />
        </div>
        <div>
          <Label htmlFor="sortBy" className="mb-2 text-black">Ordenar por:</Label>
          <select
            id="sortBy"
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            className="border rounded px-2 py-1"
          >
            <option value="Price">Preço</option>
            <option value="Savings">Desconto</option>
            <option value="DealRating">Nota do negócio</option>
          </select>
        </div>

        <div className='mt-4'>
          <Button onClick={handleSubmit} className="cursor-pointer w-[120px] bg-blue-600 text-white hover:text-white">Submit</Button>
        </div>
      </div>
    </div>
  )
}