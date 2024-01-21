/* eslint-disable react/prop-types */

const SideBar = ({ filter, setFilter }) => {
  return (
    <section className="mb-8 lg:mb-10 mx-auto  px-2">
      <div className="mx-auto flex flex-col max-md:items-start max-md:space-y-4">
        <div>
          <form>
            <div className="flex">
              <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#1C4336] text-[#1C4336] ">
                <input
                  type="search"
                  id="search-dropdown"
                  className="z-20 block w-full bg-white px-4 py-2.5 pr-10 text-[#1C4336] placeholder:text-[#1C4336] focus:outline-none"
                  placeholder="Search Medicine"
                  value={filter.keyword}
                  required
                  onChange={(e) =>
                    setFilter((previousValue) => ({
                      ...previousValue,
                      keyword: e.target.value,
                    }))
                  }
                />
                <div className="absolute right-0 top-0 flex h-full items-center">
                  <button
                    type="submit"
                    className="mr-1.5 flex items-center space-x-1.5 rounded-md rounded-e-lg bg-[#1C4336] px-3 py-2.5 text-sm text-white"
                  >
                    <svg
                      className="h-[14px] w-[14px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-stretch space-x-3 mt-4">
          <select
            className="cursor-pointer  w-full rounded-md border px-7 md:px-1 py-2 text-center text-gray-600"
            name="sortBy"
            id="sortBy"
            value={filter.sortBy}
            onChange={(e) =>
              setFilter((previousValue) => ({
                ...previousValue,
                sortBy: e.target.value,
              }))
            }
          >
            <option value="">Sort By Category</option>
            <option value="price_asc">Price (Lower to Higher)</option>
            <option value="price_desc">Price (Higher to Lower)</option>
            <option value="category_Herbal_Care">Herbal Care</option>
            <option value="category_Womens_Care">Womens Care</option>
            <option value="category_COVID_Special">COVID Special</option>
            <option value="category_Baby_and_Mom_Care">Baby and Mom Care</option>
            <option value="category_Supplements">Supplements</option>
            <option value="category_Nutrition">Nutrition</option>
            <option value="category_Personal_Care">Personal Care</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
