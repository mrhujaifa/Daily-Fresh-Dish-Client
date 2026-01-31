import AllRestaurants from "@/components/layouts/AllRestaurants";
import { FilterSidebarUI } from "@/components/layouts/FilterSidebar";
import SignUpBanner from "@/components/layouts/signUpBanner";

export default function PrimeMeal() {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-35">
        {/* ১. উপরে হিরো সেকশন থাকতে পারে */}
        {/* <Hero /> */}

        {/* ২. মেইন লেআউট কন্টেইনার (Flexbox ব্যবহার করে) */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* বাম পাশে ফিল্টার সাইডবার (ডেক্সটপে ফিক্সড উইডথ) */}
          <div className="w-full md:w-72 flex-shrink-0">
            <FilterSidebarUI />
          </div>

          {/* ডান পাশে ফিল্টার করা কন্টেন্ট বা খাবারের লিস্ট */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                Available Meals
              </h1>
              <span className="text-sm text-gray-500 font-medium">
                Showing 12 results
              </span>
            </div>

            <SignUpBanner />
            {/* খাবারের গ্রিড এখানে হবে */}
            <div>
              <AllRestaurants></AllRestaurants>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
