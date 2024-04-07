import React from "react";

type Props = {};

const AddCustomerPage = (props: Props) => {
  return (
    <>
      <div className="bg-[#EBF4F8] py-[16px] pb-[48px] px-[9px] lg:p-[27px] lg:rounded-[40px] w-full lg:mr-[40px]">
        <div className="bg-gradient-white2 p-[19px] md:p-[35px] rounded-[20px] md:px-[25%]">
          <div className="flex justify-between items-center mb-[26px] flex-wrap md:flex-nowrap">
            <h2 className="text-[24px] leading-[36px] text-[#003F6C] font-semibold">
              Add new customer
            </h2>
            <a
              href="./sales_customers.php"
              className="montserrat font-bold text-[12px] leading-[14.6px] text-[#0D7AFF]"
            >
              Back
            </a>
          </div>

          <label className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]">
            Customer name*
          </label>
          <input className="mb-[20px] w-full rounded-[10px] min-h-[45px] bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] py-[11px] px-[15px] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />

          <label className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]">
            Email
          </label>
          <input className="mb-[20px] w-full rounded-[10px] min-h-[45px] bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] py-[11px] px-[15px] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />

          <label className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]">
            Phone
          </label>
          <input className="mb-[20px] w-full rounded-[10px] min-h-[45px] bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] py-[11px] px-[15px] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />

          <label className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]">
            Address
          </label>
          <input className="mb-[40px] w-full rounded-[10px] min-h-[45px] bg-[#003F6C0D] border-2 border-[#003F6C0D] focus:bg-white focus:border-[#0D7AFF] py-[11px] px-[15px] placeholder:text-[#003F6C] outline-0 text-[#003F6C]" />

          <hr className="bg-[#E4E4E4] mb-[33px]" />

          <h2 className="text-[24px] leading-[36px] text-[#003F6C] font-semibold mb-[25px]">
            Add new customer
          </h2>

          <label className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]">
            Country
          </label>
          <div className="mb-[20px]">
            <div className="md:mb-0 custom-select custom-select7">
              <select
                id="countries"
                className="bg-white md:w-auto box-shadow select-custom outline-0 min-w-[337px] max-w-[100%] montserrat font-semibold text-[14px] leading-[17px] text-[#3E3E3E] text-sm rounded-[10px] block w-full px-[14px] py-[18px]"
              >
                <option selected>All customers</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="mb-[40px]">
            <label className="mb-[5px] text-[#A9AFB5] text-[12px] leading-[18px]">
              Currency
            </label>
            <div className="md:mb-0 custom-select custom-select7">
              <select
                id="countries"
                className="bg-white md:w-auto box-shadow select-custom outline-0 min-w-[337px] max-w-[100%] montserrat font-semibold text-[14px] leading-[17px] text-[#3E3E3E] text-sm rounded-[10px] block w-full px-[14px] py-[18px]"
              >
                <option selected>All customers</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className="text-right flex items-end justify-end">
            <button className="bg-[#003F6C] hover:bg-[#002743] w-full md:w-auto box-shadow text-white rounded-[10px] min-w-[180px] montserrat font-semibold text-[14px] leading-[17px] px-[37px] py-[15px]">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCustomerPage;
