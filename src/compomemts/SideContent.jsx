import Authentic from "../assets/Images/brands.png";
import cashon from "../assets/Images/cash-delivery.png";
import freeDelivary from "../assets/Images/free-delivery.png";
import hotDeals from "../assets/Images/hot-deals.png";
import installment from "../assets/Images/installments.png";
import verified from "../assets/Images/verified.png";

const SideContent = () => {
  return (
    <div className=" space-y-10">
      <div className="mx-2 space-y-3">
        <h1 className="text-xl">Promotion & Services</h1>
        <hr />
        <div className="flex flex-row mt-4 gap-1">
          <div className="flex items-center border w-28  hover:border-orange-600 rounded-lg gap-1">
            <div className="avatar">
              <div className="w-6 rounded">
                <img src={freeDelivary} alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <small>Free Delivery</small>
          </div>
          <div className="flex items-center border w-24 px-1  hover:border-orange-600 rounded-lg gap-1">
            <div className="avatar">
              <div className="w-4 rounded">
                <img src={hotDeals} alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <small>Hot Deals</small>
          </div>
        </div>
        <div className="flex items-center border w-40 px-1  hover:border-orange-600 rounded-lg gap-1">
          <div className="avatar">
            <div className="w-4 rounded">
              <img src={hotDeals} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <small>Best Price Guaranteed</small>
        </div>
        <div className="flex items-center border w-40 px-1  hover:border-orange-600 rounded-lg gap-1">
          <div className="avatar">
            <div className="w-4 rounded">
              <img src={Authentic} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <small>Authentic Brands</small>
        </div>
        <div className="flex items-center border w-40 px-1  hover:border-orange-600 rounded-lg gap-1">
          <div className="avatar">
            <div className="w-4 rounded">
              <img src={verified} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <small>MediCure Verified</small>
        </div>
        <div className="flex items-center border w-40 px-1  hover:border-orange-600 rounded-lg gap-1">
          <div className="avatar">
            <div className="w-4 rounded">
              <img src={cashon} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <small>Cash on Delivery</small>
        </div>
        <div className="flex items-center border w-40 px-1  hover:border-orange-600 rounded-lg gap-1">
          <div className="avatar">
            <div className="w-4 rounded">
              <img src={installment} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <small>Installment</small>
        </div>
      </div>
      <div className="mx-2 space-y-3">
        <h1 className="text-xl">Category</h1>
        <hr />
        <ul className="text-gray-500">
          <li className="hover:text-orange-500">Herbal Care</li>
          <li className="hover:text-orange-500">Womens Care</li>
          <li className="hover:text-orange-500">COVID Special</li>
          <li className="hover:text-orange-500">Baby and Mom Care</li>
          <li className="hover:text-orange-500">Supplements</li>
          <li className="hover:text-orange-500">Nutrition</li>
          <li className="hover:text-orange-500">Personal Care</li>
        </ul>
      </div>
    
      <div className="mx-2 space-y-3">
        <h1 className="text-xl">Location</h1>
        <hr />
        <ul className="text-gray-500">
          <li className="flex gap-2 cursor-pointer hover:text-orange-500">
            <input type="checkbox" checked="checked" />
            <h4>Bangladesh</h4>
          </li>
          <li className="flex gap-2 cursor-pointer hover:text-orange-500">
            <input type="checkbox" checked="checked" />
            <h4>China</h4>
          </li>
          <li className="flex gap-2 cursor-pointer hover:text-orange-500">
            <input type="checkbox" checked="checked" />
            <h4>Myanmar</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideContent;
