/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface dataSearch {
  data: any,
  filterProp: string
  renderItem: (e: any) => any
  [key: string]: any
}

const SearchBar = ({ data, filterProp, renderItem }: dataSearch) => {
  const [value, setValue] = useState("")

  const filterData = (e:any ) => {
    setValue(e.target.value)
  }

  const filteredData = data.filter((item: any) =>
    value == '' ?  item : item[filterProp].toLowerCase().includes(value.toLowerCase())
  );
  return (
    <div className="flex flex-col flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-2"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                  onChange={filterData}
                />
          </form>
          {filteredData.map(renderItem)}
    </div>
  )
}

export default SearchBar

