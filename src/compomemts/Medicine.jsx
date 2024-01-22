/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Cart from "../assets/Icons/Cart";
import LoveFill from "../assets/Icons/LoveFill";
import LoveLine from "../assets/Icons/LoveLine";

const Medicine = ({ filter }) => {
  const [medicine, setMedicine] = useState([]);
  const [filteredMedicine, setFilteredMedicine] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [priceRange, setPriceRange] = useState(100);
  // console.log(filteredMedicine);
  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  useEffect(() => {
    fetch("./medicine.json")
      .then((res) => res.json())
      .then((data) => {
        const rangeMedicine = data.filter((item) => item.Price <= priceRange);
        setMedicine(rangeMedicine);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [priceRange]);

  const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((medicineId) => medicineId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    fetch("./medicine.json")
      .then((res) => res.json())
      .then((data) => setMedicine(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    const debounceFilter = setTimeout(() => {
      let tempFilteredMedicine = [...medicine];
      if (filter.keyword) {
        tempFilteredMedicine = tempFilteredMedicine?.filter((item) =>
          item.Medname.toLowerCase().includes(filter.keyword.toLowerCase())
        );
      }

      if (filter.sortBy === "category_Herbal_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Herbal Care"
        );
      } else if (filter.sortBy === "category_Womens_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Women's Care"
        );
      } else if (filter.sortBy === "category_COVID_Special") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "COVID Special"
        );
      } else if (filter.sortBy === "category_Baby_and_Mom_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Baby and Mom Care"
        );
      } else if (filter.sortBy === "category_Supplements") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Supplements"
        );
      } else if (filter.sortBy === "category_Nutrition") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Nutrition"
        );
      } else if (filter.sortBy === "category_Personal_Care") {
        tempFilteredMedicine = tempFilteredMedicine?.filter(
          (item) => item.Category === "Personal Care"
        );
      } else if (filter.sortBy === "price_asc") {
        tempFilteredMedicine = tempFilteredMedicine?.sort(
          (a, b) => a.Price - b.Price
        );
      } else if (filter.sortBy === "price_desc") {
        tempFilteredMedicine = tempFilteredMedicine?.sort(
          (a, b) => b.Price - a.Price
        );
      }

      setFilteredMedicine(tempFilteredMedicine);
    }, 600);
    return () => clearTimeout(debounceFilter);
  }, [filter, medicine]);

  const isFavorite = (id) => favorites.includes(id);

  return (
    <>
      <div className="mx-2 space-y-3 mb-5 -mt-2">
        <h1 className="text-xl text-[#021526] font-bold text-center">
          Set Price Range
        </h1>
        <input
          className="w-full range"
          type="range"
          value={priceRange}
          onChange={handlePriceChange}
          max={100}
          min={0}
          step={20}
        />
        <div className="w-full flex justify-between text-xs px-2 text-[#021526]">
          <span></span>
          <span className="text-[#021526] font-medium">$20</span>
          <span className="text-[#021526] font-medium">$40</span>
          <span className="text-[#021526] font-medium">$60</span>
          <span className="text-[#021526] font-medium">$80</span>
          <span className="text-[#021526] font-medium">$100</span>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
        {filteredMedicine?.map((medicine) => (
          <div className="space-y-3" key={medicine?.ID}>
            <div className="flex items-center justify-center rounded-md border border-[#0360D9]/30 bg-white p-4">
              <img
                className="max-w-[144px] h-40"
                src={medicine?.Image}
                alt={medicine?.Medname}
              />
            </div>
            <div className="space-y-3">
              <div className="space-y-3 pl-2">
                <h4 className="text-lg font-bold lg:text-xl">
                  {medicine?.Medname}
                </h4>
                <p className="text-xs lg:text-sm flex gap-2">
                  <input type="checkbox" name="" id="" checked readOnly />
                  By : <span>{medicine?.Company}</span>
                </p>
                <p className="text-xs lg:text-sm flex gap-2">
                  <input type="checkbox" name="" id="" checked readOnly />
                  Category : <span>{medicine?.Category}</span>
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold lg:text-xl">
                    Price : ${medicine?.Price}
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs lg:text-sm justify-between md:px-2">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#0360D9] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <Cart />
                  Add to Cart
                </button>
                <button
                  onClick={() => handleToggleFavorite(medicine?.ID)}
                  className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md ${
                    isFavorite(medicine?.ID)
                      ? "bg-[#DC2954]/[14%] text-[#0360D9] hover:bg-[#DC2954]/[24%]"
                      : "bg-[#0360D9]/[14%] text-[#1C4336] hover:bg-[#0360D9]/[24%]"
                  } py-1.5 transition-all lg:py-1.5`}
                >
                  {isFavorite(medicine?.ID) ? <LoveFill /> : <LoveLine />}
                  Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Medicine;
