import React from "react";

type Props = {};

const CustomersPage = (props: Props) => {
  return (
    <>
      <div className="bg-[#EBF4F8] py-[16px] pb-[48px] px-[9px] lg:p-[27px] lg:rounded-[40px] w-full lg:mr-[40px]">
        <div className="bg-gradient-white2 p-[19px] md:p-[35px] rounded-[20px]">
          <div className="flex justify-between items-center mb-[23px] flex-wrap md:flex-nowrap">
            <h2 className="text-[20px] leading-[24px] text-[#003F6C] font-semibold">
              All customers
            </h2>
            <a
              href="./customer_new.php"
              className="w-full md:w-auto justify-center md:justify-start mt-[28px] md:mt-0 whitespace-nowrap montserrat flex items-center py-[16px] px-[14px] rounded-[10px] bg-[#408FEF1A]  hover:bg-[#408FEF]/20 text-[#0D7AFF] font-semibold text-[14px] leading-[17px]"
            >
              <span className="mr-[12px] plus-icon"></span>
              Add New Customer
            </a>
          </div>

          <div className="grid grid-cols-12 gap-[15px] items-center py-[14px] pl-[17px] md:grid bg-silver-light rounded-[10px]">
            <div className="col-span-2">
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline mr-[26px]">
                #
              </p>
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline uppercase">
                Name
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline uppercase">
                INFO
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline uppercase">
                EMAIL
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline uppercase">
                PHone
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline uppercase">
                added
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[#A9AFB5] text-[10px] leading-[15px] tracking-[1px] font-semibold inline uppercase">
                Actions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-[15px] items-center py-[17px] md:pl-[17px]">
            <div className="col-span-5 md:col-span-2">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mr-[26px] hidden md:inline">
                1
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] font-semibold inline">
                Johnny
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mt-[6px] font-semibold md:hidden">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mb-[5px] font-semibold">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 mt-[7px]">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-5 md:col-span-2 text-right md:text-left">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                test.name@mail.com
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 text-right md:text-left hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                20 Feb 2023
              </p>
            </div>
            <div className="col-span-2 md:col-span-2 relative">
              <div className="md:flex justify-end md:justify-start hidden">
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:hidden flex justify-end">
                <button className="action-btn w-[40px] h-[40px] flex  items-center justify-center rounded-[10px] hover:bg-[#408FEF]/10">
                  <span className="dots-icon"></span>
                </button>
                <div className="action-btn-controls hidden absolute p-[15px] bg-white rounded-[10px] right-0 top-[3rem] button-shadow z-10">
                  <div className="flex">
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-[#E4E4E4]" />

          <div className="grid grid-cols-12 gap-[15px] items-center py-[17px] md:pl-[17px]">
            <div className="col-span-5 md:col-span-2">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mr-[26px] hidden md:inline">
                1
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] font-semibold inline">
                Johnny
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mt-[6px] font-semibold md:hidden">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mb-[5px] font-semibold">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 mt-[7px]">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-5 md:col-span-2 text-right md:text-left">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                test.name@mail.com
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 text-right md:text-left hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                20 Feb 2023
              </p>
            </div>
            <div className="col-span-2 md:col-span-2 relative">
              <div className="md:flex justify-end md:justify-start hidden">
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:hidden flex justify-end">
                <button className="action-btn w-[40px] h-[40px] flex  items-center justify-center rounded-[10px] hover:bg-[#408FEF]/10">
                  <span className="dots-icon"></span>
                </button>
                <div className="action-btn-controls hidden absolute p-[15px] bg-white rounded-[10px] right-0 top-[3rem] button-shadow z-10">
                  <div className="flex">
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-[#E4E4E4]" />

          <div className="grid grid-cols-12 gap-[15px] items-center py-[17px] md:pl-[17px]">
            <div className="col-span-5 md:col-span-2">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mr-[26px] hidden md:inline">
                1
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] font-semibold inline">
                Johnny
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mt-[6px] font-semibold md:hidden">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mb-[5px] font-semibold">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 mt-[7px]">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-5 md:col-span-2 text-right md:text-left">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                test.name@mail.com
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 text-right md:text-left hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                20 Feb 2023
              </p>
            </div>
            <div className="col-span-2 md:col-span-2 relative">
              <div className="md:flex justify-end md:justify-start hidden">
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:hidden flex justify-end">
                <button className="action-btn w-[40px] h-[40px] flex  items-center justify-center rounded-[10px] hover:bg-[#408FEF]/10">
                  <span className="dots-icon"></span>
                </button>
                <div className="action-btn-controls hidden absolute p-[15px] bg-white rounded-[10px] right-0 top-[3rem] button-shadow z-10">
                  <div className="flex">
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-[#E4E4E4]" />

          <div className="grid grid-cols-12 gap-[15px] items-center py-[17px] md:pl-[17px]">
            <div className="col-span-5 md:col-span-2">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mr-[26px] hidden md:inline">
                1
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] font-semibold inline">
                Johnny
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mt-[6px] font-semibold md:hidden">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mb-[5px] font-semibold">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 mt-[7px]">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-5 md:col-span-2 text-right md:text-left">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                test.name@mail.com
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 text-right md:text-left hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                20 Feb 2023
              </p>
            </div>
            <div className="col-span-2 md:col-span-2 relative">
              <div className="md:flex justify-end md:justify-start hidden">
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:hidden flex justify-end">
                <button className="action-btn w-[40px] h-[40px] flex  items-center justify-center rounded-[10px] hover:bg-[#408FEF]/10">
                  <span className="dots-icon"></span>
                </button>
                <div className="action-btn-controls hidden absolute p-[15px] bg-white rounded-[10px] right-0 top-[3rem] button-shadow z-10">
                  <div className="flex">
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-[#E4E4E4]" />

          <div className="grid grid-cols-12 gap-[15px] items-center py-[17px] md:pl-[17px]">
            <div className="col-span-5 md:col-span-2">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mr-[26px] hidden md:inline">
                1
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] font-semibold inline">
                Johnny
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mt-[6px] font-semibold md:hidden">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] mb-[5px] font-semibold">
                Netherlands
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 mt-[7px]">
                Eur - Euro (€)
              </p>
            </div>
            <div className="col-span-5 md:col-span-2 text-right md:text-left">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                test.name@mail.com
              </p>
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0 md:hidden">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 text-right md:text-left hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                09766023401
              </p>
            </div>
            <div className="col-span-6 md:col-span-2 hidden md:block">
              <p className="text-[#3E3E3E] text-[14px] leading-[21px] m-0">
                20 Feb 2023
              </p>
            </div>
            <div className="col-span-2 md:col-span-2 relative">
              <div className="md:flex justify-end md:justify-start hidden">
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
                <a
                  href="./index.php"
                  className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                >
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:hidden flex justify-end">
                <button className="action-btn w-[40px] h-[40px] flex  items-center justify-center rounded-[10px] hover:bg-[#408FEF]/10">
                  <span className="dots-icon"></span>
                </button>
                <div className="action-btn-controls hidden absolute p-[15px] bg-white rounded-[10px] right-0 top-[3rem] button-shadow z-10">
                  <div className="flex">
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2662 4.74903L12.251 1.7338L13.6844 0.300336C13.8949 0.100112 14.1573 0 14.4716 0C14.7858 0 15.0507 0.100112 15.2662 0.300336L16.6997 1.7338C16.8999 1.95953 17 2.22952 17 2.54376C17 2.85804 16.8999 3.1153 16.6997 3.31556L15.2662 4.74903ZM0 17V13.9848L10.3156 3.66918L13.3308 6.68436L3.01518 17H0Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                    <a
                      href="./index.php"
                      className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
                    >
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.94925 20C2.47867 20 2.07256 19.8314 1.73092 19.4942C1.38929 19.1569 1.21848 18.7561 1.21848 18.2915V2.17539H0.680762C0.487501 2.17539 0.325731 2.11057 0.195451 1.98092C0.0651502 1.85128 0 1.69031 0 1.49803C0 1.30572 0.0651502 1.14654 0.195451 1.02049C0.325731 0.894457 0.487501 0.83144 0.680762 0.83144H5.1323C5.1323 0.589977 5.21668 0.391038 5.38544 0.234622C5.55418 0.0782073 5.75826 0 5.99768 0H12.0023C12.2417 0 12.4458 0.0794906 12.6146 0.238472C12.7833 0.397454 12.8677 0.59511 12.8677 0.83144H17.3192C17.5125 0.83144 17.6743 0.896263 17.8045 1.02591C17.9348 1.15553 18 1.3165 18 1.50881C18 1.70111 17.9348 1.86028 17.8045 1.98631C17.6743 2.11236 17.5125 2.17539 17.3192 2.17539H16.7815V18.2915C16.7815 18.7561 16.6107 19.1569 16.2691 19.4942C15.9274 19.8314 15.5213 20 15.0507 20H2.94925ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H15.0507C15.1507 18.656 15.2373 18.6219 15.3104 18.5535C15.3835 18.4852 15.42 18.3979 15.42 18.2915V2.17539H2.57998ZM6.03695 15.4829C6.03695 15.6737 6.10261 15.8334 6.23393 15.962C6.36527 16.0906 6.52835 16.1549 6.72317 16.1549C6.91797 16.1549 7.07922 16.0906 7.20692 15.962C7.3346 15.8334 7.39844 15.6737 7.39844 15.4829V5.31889C7.39844 5.13552 7.33278 4.97769 7.20146 4.84538C7.07012 4.71307 6.90704 4.64691 6.71222 4.64691C6.51742 4.64691 6.35617 4.71307 6.22847 4.84538C6.10079 4.97769 6.03695 5.13552 6.03695 5.31889V15.4829ZM10.6016 15.4829C10.6016 15.6737 10.6672 15.8334 10.7985 15.962C10.9299 16.0906 11.093 16.1549 11.2878 16.1549C11.4826 16.1549 11.6438 16.0906 11.7715 15.962C11.8992 15.8334 11.963 15.6737 11.963 15.4829V5.31889C11.963 5.13552 11.8974 4.97769 11.7661 4.84538C11.6347 4.71307 11.4716 4.64691 11.2768 4.64691C11.082 4.64691 10.9208 4.71307 10.7931 4.84538C10.6654 4.97769 10.6016 5.13552 10.6016 5.31889V15.4829ZM2.57998 2.17539V18.2915C2.57998 18.3979 2.61652 18.4852 2.6896 18.5535C2.7627 18.6219 2.84925 18.656 2.94925 18.656H2.57998V2.17539Z"
                          fill="#0D7AFF"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersPage;
