import React, { useEffect, useRef } from 'react';
import ApexCharts from "apexcharts";

const DashboardPage: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const options: ApexCharts.ApexOptions = {
        chart: {
          type: 'area',
          height: 350,
        },
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
      };

      const chart = new ApexCharts(chartRef.current, options);

      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <>
      <div className="bg-[#EBF4F8] py-[16px] pb-[48px] px-[9px] lg:p-[27px] lg:rounded-[40px] w-full lg:mr-[40px]">
        <div className="grid grid-cols-12 gap-[18px] xl:gap-[29px] mb-[18px] xl:mb-[32px]">
          <div className="col-span-12 xl:col-span-3">
            <button className="bg-[#0D7AFF] hover:bg-[#002743] text-white h-[100%] font-semibold text-xl xl:text-base flex items-center w-full button-shadow rounded-[20px] p-[23px]">
              <div className="bg-gradient-blue  min-h-[65px] min-w-[65px] xl:min-h-[63px] xl:min-w-[58px] p-[16px] rounded-[10px] mr-[24px] flex items-center justify-center">
                <svg
                  width="26"
                  height="31"
                  viewBox="0 0 26 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5417 17.1806H16.1806V14.1232H19.1722V12.4483H16.1806V9.39084H14.5417V12.4483H11.55V14.1232H14.5417V17.1806ZM6.80563 26.174C6.23919 26.174 5.75035 25.9638 5.33911 25.5435C4.92788 25.1233 4.72226 24.6237 4.72226 24.0448V2.12915C4.72226 1.55026 4.92788 1.05068 5.33911 0.630408C5.75035 0.210136 6.23919 0 6.80563 0H18.6223L26 7.53988V24.0448C26 24.6237 25.7944 25.1233 25.3831 25.5435C24.9719 25.9638 24.4831 26.174 23.9166 26.174H6.80563ZM6.80563 24.4991H23.9166C24.0278 24.4991 24.1296 24.4518 24.2222 24.3571C24.3148 24.2625 24.3611 24.1584 24.3611 24.0448V8.25809L17.8028 1.67489H6.80563C6.6945 1.67489 6.59263 1.7222 6.50002 1.81683C6.40743 1.91147 6.36113 2.01558 6.36113 2.12915V24.0448C6.36113 24.1584 6.40743 24.2625 6.50002 24.3571C6.59263 24.4518 6.6945 24.4991 6.80563 24.4991ZM2.08336 31C1.51692 31 1.02809 30.7899 0.616852 30.3696C0.205617 29.9493 0 29.4497 0 28.8708V7.80117H1.63887V28.8708C1.63887 28.9844 1.68517 29.0885 1.77775 29.1832C1.87037 29.2778 1.97224 29.3251 2.08336 29.3251H18.3305V31H2.08336Z"
                    fill="white"
                  />
                </svg>
              </div>
              New invoice
            </button>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <button className="hover-icon-white bg-white hover:bg-[#0D7AFF] hover:text-white text-[#003F6C] h-[100%] font-semibold text-sm xl:text-base flex flex-col xl:flex-row text-center xl:text-left items-center w-full button-shadow rounded-[20px] p-[23px]">
              <div className="hidden xl:flex bg-gradient-silver min-h-[65px] min-w-[65px] xl:min-h-[63px] xl:min-w-[58px] p-[16px] mb-[13px] xl:mb-0 rounded-[10px] xl:mr-[24px] items-center justify-center">
                <svg
                  width="31"
                  height="23"
                  viewBox="0 0 31 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#003F6C"
                    d="M17.8118 13.338C16.7742 13.338 15.8962 12.9787 15.1775 12.26C14.4589 11.5414 14.0995 10.6633 14.0995 9.62577C14.0995 8.58826 14.4589 7.71018 15.1775 6.99153C15.8962 6.27288 16.7742 5.91355 17.8118 5.91355C18.8493 5.91355 19.7274 6.27288 20.446 6.99153C21.1647 7.71018 21.524 8.58826 21.524 9.62577C21.524 10.6633 21.1647 11.5414 20.446 12.26C19.7274 12.9787 18.8493 13.338 17.8118 13.338ZM6.93195 18.4781C6.35036 18.4781 5.84801 18.2665 5.42491 17.8434C5.00181 17.4203 4.79026 16.918 4.79026 16.3364V2.91513C4.79026 2.33354 5.00181 1.83119 5.42491 1.40809C5.84801 0.984989 6.35036 0.773438 6.93195 0.773438H28.6916C29.2731 0.773438 29.7755 0.984989 30.1986 1.40809C30.6217 1.83119 30.8332 2.33354 30.8332 2.91513V16.3364C30.8332 16.918 30.6217 17.4203 30.1986 17.8434C29.7755 18.2665 29.2731 18.4781 28.6916 18.4781H6.93195ZM9.70184 16.7934H25.9217C25.9217 15.8967 26.2359 15.1347 26.8644 14.5074C27.4929 13.8802 28.2542 13.5665 29.1485 13.5665V5.68502C28.2518 5.68502 27.4899 5.37079 26.8626 4.74232C26.2353 4.11386 25.9217 3.35249 25.9217 2.45822H9.70184C9.70184 3.35487 9.38761 4.11683 8.75914 4.7441C8.13067 5.37138 7.36931 5.68502 6.47504 5.68502V13.5665C7.37168 13.5665 8.13364 13.8807 8.76092 14.5092C9.3882 15.1377 9.70184 15.8991 9.70184 16.7934ZM26.4071 22.5902H2.81992C2.23833 22.5902 1.73598 22.3786 1.31288 21.9555C0.889774 21.5324 0.678223 21.03 0.678223 20.4485V5.19964H2.36297V20.4485C2.36297 20.5627 2.41058 20.6674 2.50578 20.7626C2.60097 20.8578 2.70568 20.9054 2.81992 20.9054H26.4071V22.5902ZM6.93195 16.7934H6.47504V2.45822H6.93195C6.80821 2.45822 6.70112 2.50344 6.61069 2.59387C6.52026 2.6843 6.47504 2.79139 6.47504 2.91513V16.3364C6.47504 16.4601 6.52026 16.5672 6.61069 16.6577C6.70112 16.7481 6.80821 16.7934 6.93195 16.7934Z"
                  />
                </svg>
              </div>
              New <br className="block xl:hidden" />
              expense
            </button>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <button className="hover-icon-white bg-white hover:bg-[#0D7AFF] hover:text-white text-[#54B7BE] h-[100%] font-semibold text-sm xl:text-base flex flex-col xl:flex-row text-center xl:text-left items-center w-full button-shadow rounded-[20px] p-[23px]">
              <div className="hidden xl:flex bg-gradient-green min-h-[65px] min-w-[65px] xl:min-h-[63px] xl:min-w-[58px] p-[16px] mb-[13px] xl:mb-0 rounded-[10px] xl:mr-[24px] items-center justify-center">
                <svg
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#54B7BE"
                    d="M11.3693 24.5884H13.1846V23.062H15.7693C16.0269 23.062 16.2426 22.9792 16.4164 22.8134C16.5901 22.6477 16.6769 22.442 16.6769 22.1962V17.3383C16.6769 17.0925 16.5901 16.8868 16.4164 16.7211C16.2426 16.5554 16.0269 16.4725 15.7693 16.4725H9.69231V13.3464H16.6769V11.6147H13.1846V10.0884H11.3693V11.6147H8.78463C8.52695 11.6147 8.31125 11.6975 8.13755 11.8632C7.96381 12.029 7.87695 12.2348 7.87695 12.4806V17.3383C7.87695 17.5842 7.96381 17.7899 8.13755 17.9557C8.31125 18.1214 8.52695 18.2042 8.78463 18.2042H14.8616V21.3303H7.87695V23.062H11.3693V24.5884ZM2.30773 29C1.68029 29 1.1388 28.7827 0.683282 28.3482C0.22776 27.9136 0 27.3971 0 26.7986V2.20145C0 1.6029 0.22776 1.08636 0.683282 0.651814C1.1388 0.217271 1.68029 0 2.30773 0H16.2093L24 7.43196V26.7986C24 27.3971 23.7722 27.9136 23.3167 28.3482C22.8612 28.7827 22.3197 29 21.6923 29H2.30773ZM14.717 7.63744V1.73176H2.30773C2.18463 1.73176 2.07179 1.78068 1.96921 1.87852C1.86665 1.97638 1.81537 2.08402 1.81537 2.20145V26.7986C1.81537 26.916 1.86665 27.0236 1.96921 27.1215C2.07179 27.2193 2.18463 27.2682 2.30773 27.2682H21.6923C21.8154 27.2682 21.9282 27.2193 22.0308 27.1215C22.1334 27.0236 22.1846 26.916 22.1846 26.7986V7.63744H14.717Z"
                  />
                </svg>
              </div>
              New <br className="block xl:hidden" />
              quotation
            </button>
          </div>
          <div className="col-span-4 xl:col-span-3">
            <button className="hover-icon-white bg-white hover:bg-[#0D7AFF] hover:text-white text-[#B478D9] h-[100%] font-semibold text-sm xl:text-base flex flex-col xl:flex-row text-center xl:text-left items-center w-full button-shadow rounded-[20px] p-[23px]">
              <div className="hidden xl:flex bg-gradient-violet min-h-[65px] min-w-[65px] xl:min-h-[63px] xl:min-w-[58px] p-[16px] mb-[13px] xl:mb-0 rounded-[10px] xl:mr-[24px] items-center justify-center">
                <svg
                  width="37"
                  height="25"
                  viewBox="0 0 37 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#B478D9"
                    d="M12.967 11.713C11.341 11.713 10.0005 11.1994 8.94549 10.1722C7.89046 9.14505 7.36294 7.83729 7.36294 6.24895C7.36294 4.66059 7.89046 3.35544 8.94549 2.33351C10.0005 1.31161 11.341 0.800659 12.967 0.800659C14.593 0.800659 15.9335 1.31161 16.9886 2.33351C18.0436 3.35544 18.5711 4.66059 18.5711 6.24895C18.5711 7.83729 18.0436 9.14505 16.9886 10.1722C15.9335 11.1994 14.593 11.713 12.967 11.713ZM0.296875 24.2639V21.1421C0.296875 20.3197 0.52156 19.5653 0.970931 18.8789C1.42036 18.1926 2.06092 17.6733 2.89263 17.3212C4.83103 16.4903 6.59141 15.8951 8.17375 15.5356C9.75612 15.1761 11.3513 14.9963 12.9592 14.9963C14.5671 14.9963 16.1606 15.1761 17.7395 15.5356C19.3184 15.8951 21.077 16.4903 23.0155 17.3212C23.8471 17.7007 24.492 18.2268 24.9501 18.8995C25.4082 19.5721 25.6372 20.3197 25.6372 21.1421V24.2639H0.296875ZM2.21359 22.3978H23.7205V21.1421C23.7205 20.714 23.5856 20.3039 23.316 19.9116C23.0463 19.5194 22.6787 19.2115 22.213 18.988C20.4089 18.1677 18.8133 17.6084 17.4262 17.3101C16.0391 17.0117 14.5527 16.8625 12.967 16.8625C11.3813 16.8625 9.88791 17.0117 8.48675 17.3101C7.08559 17.6084 5.48835 18.1677 3.69503 18.988C3.21855 19.2115 2.85252 19.5194 2.59695 19.9116C2.34137 20.3039 2.21359 20.714 2.21359 21.1421V22.3978ZM12.967 9.84691C14.0218 9.84691 14.9 9.50529 15.6018 8.82205C16.3035 8.13883 16.6544 7.28377 16.6544 6.25685C16.6544 5.22993 16.3035 4.37486 15.6018 3.69165C14.9 3.00843 14.0218 2.66683 12.967 2.66683C11.9123 2.66683 11.034 3.00843 10.3323 3.69165C9.63056 4.37486 9.27969 5.22993 9.27969 6.25685C9.27969 7.28377 9.63056 8.13883 10.3323 8.82205C11.034 9.50529 11.9123 9.84691 12.967 9.84691Z"
                  />
                  <path
                    fill="#B478D9"
                    d="M29.6352 8.70672V14.0625H31.5444V8.70672H36.9003V6.79741H31.5444V1.44159H29.6352V6.79741H24.2793V8.70672H29.6352Z"
                  />
                </svg>
              </div>
              Add <br className="block xl:hidden" />
              customer
            </button>
          </div>
        </div>

        {/* second */}
        <div className="grid grid-cols-12 gap-[17px] md:gap-[29px] mb-[15px] md:mb-[32px]">
          <div className="col-span-12 md:col-span-7">
            <div className="bg-gradient-white rounded-[20px] py-[22px] px-[20px] md:px-[29px] h-[100%] flex flex-col">
              <div className="flex justify-between items-center mb-[67px] md:mb-[91px] flex-wrap xl:flex-nowrap">
                <h2 className="text-[#003F6C] text-xl leading-[30px] font-semibold">
                  Overview
                </h2>
                <div>
                  <div>
                    <div className="relative md:max-w-sm">
                      <div className="absolute inset-y-0 left-[12px] flex items-center pointer-events-none">
                        <svg
                          className="mr-[13px]"
                          width="15"
                          height="17"
                          viewBox="0 0 15 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.60509 16.535C1.24094 16.535 0.925162 16.4013 0.657763 16.1339C0.390378 15.8665 0.256685 15.5507 0.256685 15.1866V3.00092C0.256685 2.63548 0.390378 2.31859 0.657763 2.05027C0.925162 1.78193 1.24094 1.64777 1.60509 1.64777H2.84896V0.460266H4.21587V1.64777H10.7841V0.460266H12.151V1.64777H13.3949C13.7604 1.64777 14.0772 1.78193 14.3456 2.05027C14.6139 2.31859 14.7481 2.63548 14.7481 3.00092V15.1866C14.7481 15.5507 14.6139 15.8665 14.3456 16.1339C14.0772 16.4013 13.7604 16.535 13.3949 16.535H1.60509ZM1.60509 15.1866H13.3949V6.71875H1.60509V15.1866ZM1.60509 5.53125H13.3949V3.00092H1.60509V5.53125ZM7.50049 10.1117C7.26829 10.1117 7.07348 10.0332 6.91607 9.87611C6.75864 9.71902 6.67993 9.52437 6.67993 9.29216C6.67993 9.05995 6.75847 8.86514 6.91555 8.70773C7.07264 8.55031 7.2673 8.4716 7.49951 8.4716C7.73171 8.4716 7.92652 8.55014 8.08393 8.70722C8.24136 8.86431 8.32007 9.05896 8.32007 9.29117C8.32007 9.52338 8.24153 9.71819 8.08445 9.8756C7.92735 10.033 7.7327 10.1117 7.50049 10.1117ZM4.33383 10.1117C4.10162 10.1117 3.90681 10.0332 3.7494 9.87611C3.59198 9.71902 3.51327 9.52437 3.51327 9.29216C3.51327 9.05995 3.59181 8.86514 3.74889 8.70773C3.90598 8.55031 4.10063 8.4716 4.33284 8.4716C4.56505 8.4716 4.75986 8.55014 4.91727 8.70722C5.07469 8.86431 5.1534 9.05896 5.1534 9.29117C5.1534 9.52338 5.07486 9.71819 4.91778 9.8756C4.76069 10.033 4.56604 10.1117 4.33383 10.1117ZM10.6672 10.1117C10.4394 10.1117 10.2457 10.0332 10.086 9.87611C9.92641 9.71902 9.8466 9.52437 9.8466 9.29216C9.8466 9.05995 9.92625 8.86514 10.0855 8.70773C10.2448 8.55031 10.4392 8.4716 10.6685 8.4716C10.8979 8.4716 11.0916 8.55014 11.2497 8.70722C11.4077 8.86431 11.4867 9.05896 11.4867 9.29117C11.4867 9.52338 11.4082 9.71819 11.2511 9.8756C11.094 10.033 10.8994 10.1117 10.6672 10.1117ZM7.50049 13.2784C7.26829 13.2784 7.07348 13.1988 6.91607 13.0395C6.75864 12.8802 6.67993 12.6858 6.67993 12.4565C6.67993 12.2271 6.75847 12.0334 6.91555 11.8753C7.07264 11.7173 7.2673 11.6383 7.49951 11.6383C7.73171 11.6383 7.92652 11.7168 8.08393 11.8739C8.24136 12.031 8.32007 12.2256 8.32007 12.4578C8.32007 12.6856 8.24153 12.8793 8.08445 13.039C7.92735 13.1986 7.7327 13.2784 7.50049 13.2784ZM4.33383 13.2784C4.10162 13.2784 3.90681 13.1988 3.7494 13.0395C3.59198 12.8802 3.51327 12.6858 3.51327 12.4565C3.51327 12.2271 3.59181 12.0334 3.74889 11.8753C3.90598 11.7173 4.10063 11.6383 4.33284 11.6383C4.56505 11.6383 4.75986 11.7168 4.91727 11.8739C5.07469 12.031 5.1534 12.2256 5.1534 12.4578C5.1534 12.6856 5.07486 12.8793 4.91778 13.039C4.76069 13.1986 4.56604 13.2784 4.33383 13.2784ZM10.6672 13.2784C10.4394 13.2784 10.2457 13.1988 10.086 13.0395C9.92641 12.8802 9.8466 12.6858 9.8466 12.4565C9.8466 12.2271 9.92625 12.0334 10.0855 11.8753C10.2448 11.7173 10.4392 11.6383 10.6685 11.6383C10.8979 11.6383 11.0916 11.7168 11.2497 11.8739C11.4077 12.031 11.4867 12.2256 11.4867 12.4578C11.4867 12.6856 11.4082 12.8793 11.2511 13.039C11.094 13.1986 10.8994 13.2784 10.6672 13.2784Z"
                            fill="#0D7AFF"
                          />
                        </svg>
                      </div>
                      <input
                        defaultValue="01/01/2018 - 01/08/2018"
                        type="text"
                        name="daterange"
                        className="input-datepicker input-datepicker-right outline-0 border border-[#D9D9D9] text-[12px] leading-[12px] rounded-[10px] inline-block px-[15px] py-[7.5px] pl-[40px]"
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                </div>
                <div className="grow-1 xl:grow-0 w-full xl:w-auto mt-[37px] xl:mt-0 flex justify-center items-center">
                  <div className="inline-flex">
                    <input
                      id="bordered-radio-3"
                      type="radio"
                      defaultValue=""
                      name="bordered-radio1"
                      className="hidden w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-radio-3"
                      className="bg-white hover:bg-[#408FEF] hover:text-white text-[#3E3E3E] font-semibold text-[12px] leading-[18px] py-[7px] px-[14px] rounded-[10px] block"
                    >
                      Weekly
                    </label>
                  </div>
                  <div className="inline-flex">
                    <input
                      id="bordered-radio-4"
                      type="radio"
                      defaultValue=""
                      name="bordered-radio1"
                      className="hidden w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-radio-4"
                      className="bg-white hover:bg-[#408FEF] hover:text-white text-[#3E3E3E] ml-[15px] font-semibold text-[12px] leading-[18px] py-[7px] px-[14px] rounded-[10px]"
                    >
                      Monthly
                    </label>
                  </div>
                  <div className="inline-flex">
                    <input
                      id="bordered-radio-5"
                      type="radio"
                      defaultValue=""
                      name="bordered-radio1"
                      className="hidden w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="bordered-radio-5"
                      className="bg-white hover:bg-[#408FEF] hover:text-white text-[#3E3E3E] ml-[15px] font-semibold text-[12px] leading-[18px] py-[7px] px-[14px] rounded-[10px] block"
                    >
                      Yearly
                    </label>
                  </div>
                </div>
              </div>

              {/* charts */}
              <div className="chart-container w-full h-full">
                <div ref={chartRef} className="w-full h-full"></div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="bg-white rounded-[20px] py-[29px] md:py-[22px] px-[21px] md:px-[29px] mb-[15px] md:mb-[34px]">
              <div className="flex justify-between items-end mb-[32px]">
                <h2 className="text-[#003F6C] text-xl leading-[30px] font-semibold">
                  Latest events
                </h2>
                <button className="text-[#0D7AFF] hover:text-[#002743] text-xs leading-[18px] m-0 font-semibold ">
                  See all
                </button>
              </div>

              <div className="flex items-center justify-between mb-[27px]">
                <div>
                  <div className="flex items-center">
                    <div className="mr-[16px]">
                      <span className="bg-[#DCDBFA] h-[40px] w-[40px] flex items-center justify-center rounded-full">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.6581 13.7428L13.7314 12.68L10.2794 9.20491V4.86156H8.85181V9.78112L12.6581 13.7428ZM9.50069 18.3808C8.28345 18.3808 7.13491 18.1478 6.05507 17.682C4.97524 17.2161 4.03228 16.5802 3.2262 15.7742C2.42012 14.9683 1.7841 14.0255 1.31813 12.9458C0.852178 11.8661 0.619202 10.7177 0.619202 9.50057C0.619202 8.28343 0.85252 7.13475 1.31916 6.05451C1.7858 4.97428 2.42162 4.03167 3.22664 3.22667C4.03164 2.42165 4.97409 1.78495 6.054 1.31656C7.1339 0.848177 8.28255 0.613983 9.49997 0.613983C10.7174 0.613983 11.866 0.848177 12.9459 1.31656C14.0259 1.78495 14.9683 2.42165 15.7733 3.22667C16.5783 4.03167 17.215 4.97412 17.6834 6.05403C18.1518 7.13393 18.386 8.28259 18.386 9.5C18.386 10.7174 18.1518 11.8661 17.6834 12.946C17.215 14.0259 16.5783 14.9683 15.7733 15.7733C14.9683 16.5784 14.0259 17.2142 12.9462 17.6808C11.8664 18.1475 10.7179 18.3808 9.50069 18.3808ZM9.4973 16.8904C11.5268 16.8904 13.2663 16.1674 14.716 14.7212C16.1656 13.2751 16.8904 11.5356 16.8904 9.50263C16.8904 7.46967 16.1658 5.72926 14.7167 4.28139C13.2675 2.83352 11.5286 2.10958 9.50001 2.10958C7.46877 2.10958 5.72922 2.8333 4.28136 4.28074C2.83348 5.72818 2.10955 7.46793 2.10955 9.5C2.10955 11.5347 2.83347 13.2751 4.28132 14.7212C5.72915 16.1674 7.46781 16.8904 9.4973 16.8904Z"
                            fill="#8784DF"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#3E3E3E] font-semibold text-[14px] leading-[21px] mb-[2px] md:mb-[8px]">
                        Lorem ipsum dolor
                      </h3>
                      <p className="text-[#818B95] text-[10px] leading-[15px]">
                        04:13 PM 2/12/2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[5px]">
                  <button>
                    <span className="next-icon"></span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[27px]">
                <div>
                  <div className="flex items-center">
                    <div className="mr-[16px]">
                      <span className="bg-[#DCDBFA] h-[40px] w-[40px] flex items-center justify-center rounded-full">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.7006 15.7989L0.547058 11.6404L4.72143 7.46604L5.721 8.4606L3.25089 10.9307H16.6472V12.3501H3.25089L5.70016 14.8044L4.7006 15.7989ZM13.2993 8.53396L12.2998 7.5394L14.7491 5.09013H1.35279V3.67073H14.7491L12.279 1.19565L13.2785 0.201084L17.4529 4.38044L13.2993 8.53396Z"
                            fill="#8784DF"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#3E3E3E] font-semibold text-[14px] leading-[21px] mb-[2px] md:mb-[8px]">
                        Lorem ipsum dolor
                      </h3>
                      <p className="text-[#818B95] text-[10px] leading-[15px]">
                        04:13 PM 2/12/2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[5px]">
                  <button>
                    <span className="next-icon"></span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <div className="mr-[16px]">
                      <span className="bg-[#DCDBFA] h-[40px] w-[40px] flex items-center justify-center rounded-full">
                        <svg
                          width="18"
                          height="16"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.7006 15.7989L0.547058 11.6404L4.72143 7.46604L5.721 8.4606L3.25089 10.9307H16.6472V12.3501H3.25089L5.70016 14.8044L4.7006 15.7989ZM13.2993 8.53396L12.2998 7.5394L14.7491 5.09013H1.35279V3.67073H14.7491L12.279 1.19565L13.2785 0.201084L17.4529 4.38044L13.2993 8.53396Z"
                            fill="#8784DF"
                          />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[#3E3E3E] font-semibold text-[14px] leading-[21px] mb-[2px] md:mb-[8px]">
                        Lorem ipsum dolor
                      </h3>
                      <p className="text-[#818B95] text-[10px] leading-[15px]">
                        04:13 PM 2/12/2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pr-[5px]">
                  <button>
                    <span className="next-icon"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] py-[22px] pb-[32px] px-[21px] md:px-[29px]">
              <div className="flex justify-between items-end mb-[32px]">
                <h2 className="text-[#003F6C] text-xl leading-[30px] font-semibold">
                  Payments due
                </h2>
                <button className="text-[#0D7AFF] hover:text-[#002743] text-xs leading-[18px] m-0 font-semibold ">
                  See all
                </button>
              </div>

              <div className="grid grid-cols-12 items-center my-[31px] md:my-[48px]">
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] rounded-[20px] py-[1.5px] px-[7.5px] bg-[#EBF4F8] text-sm leading-[21px] text-center font-semibold inline-block">
                    #12995
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] text-center font-medium text-sm leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] text-center font-medium text-sm leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 text-right">
                  <p className="text-[#901740] inline rounded-[20px] py-[3px] px-[13px] bg-[#FFE7EF] text-center font-medium text-[10px] leading-[15px]">
                    UNPAID
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center my-[31px] md:my-[48px]">
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] rounded-[20px] py-[1.5px] px-[7.5px] bg-[#EBF4F8] text-sm leading-[21px] text-center font-semibold inline-block">
                    #12995
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] text-center font-medium text-sm leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] text-center font-medium text-sm leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 text-right">
                  <p className="text-[#901740] inline rounded-[20px] py-[3px] px-[13px] bg-[#FFE7EF] text-center font-medium text-[10px] leading-[15px]">
                    UNPAID
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-12 items-center my-[31px] md:my-[48px] mb-0 lg:mb-[38px]">
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] rounded-[20px] py-[1.5px] px-[7.5px] bg-[#EBF4F8] text-sm leading-[21px] text-center font-semibold inline-block">
                    #12995
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] text-center font-medium text-sm leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[#3E3E3E] text-center font-medium text-sm leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 text-right">
                  <p className="text-[#901740] inline rounded-[20px] py-[3px] px-[13px] bg-[#FFE7EF] text-center font-medium text-[10px] leading-[15px]">
                    UNPAID
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[15px] md:gap-[29px]">
          <div className="col-span-12 md:col-span-5">
            <div className="bg-white rounded-[20px] px-[21px] py-[22px] md:px-[29px] h-[100%]">
              <div className="flex justify-between items-end mb-[32px]">
                <h2 className="text-[#003F6C] text-xl leading-[30px] font-semibold">
                  Customers
                </h2>
                <button className="text-[#0D7AFF] hover:text-[#002743] text-xs leading-[18px] m-0 font-semibold ">
                  See all
                </button>
              </div>
              <button className="flex items-center w-full font-semibold text-[#0D7AFF] text-[14px] leading-[17px] bg-[#408FEF1A] hover:bg-[#408FEF]/20 rounded-[15px] p-[9px] mb-[31px]">
                <span className="bg-white rounded-[10px] mr-[14px] h-[40px] w-[40px] flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99533 8.70371C7.73168 8.70371 6.69852 8.29799 5.89585 7.48656C5.09318 6.67512 4.69184 5.63067 4.69184 4.35321C4.69184 3.07576 5.09318 2.03087 5.89585 1.21852C6.69852 0.406174 7.73168 0 8.99533 0C10.259 0 11.2937 0.406174 12.0995 1.21852C12.9053 2.03087 13.3082 3.07576 13.3082 4.35321C13.3082 5.63067 12.9053 6.67512 12.0995 7.48656C11.2937 8.29799 10.259 8.70371 8.99533 8.70371ZM0 18V15.1986C0 14.4628 0.183212 13.83 0.549635 13.3002C0.916059 12.7704 1.38923 12.368 1.96914 12.093C3.21069 11.5306 4.40375 11.1087 5.54832 10.8275C6.69291 10.5463 7.84178 10.4056 8.99492 10.4056C10.1565 10.4056 11.3045 10.5509 12.4391 10.8414C13.5736 11.132 14.7588 11.551 15.9945 12.0984C16.5995 12.3699 17.085 12.7697 17.451 13.298C17.817 13.8262 18 14.4592 18 15.1969V18H0ZM1.88032 16.0991H16.1131V15.2239C16.1131 14.9292 16.0257 14.6482 15.8509 14.3808C15.6761 14.1135 15.4599 13.9153 15.2023 13.7864C14.0423 13.2232 12.9803 12.8368 12.0161 12.6274C11.052 12.4179 10.0444 12.3132 8.99343 12.3132C7.95123 12.3132 6.93666 12.4179 5.9497 12.6274C4.96273 12.8368 3.90162 13.2228 2.76634 13.7854C2.50685 13.9143 2.29431 14.1126 2.12872 14.3801C1.96312 14.6477 1.88032 14.9289 1.88032 15.2239V16.0991ZM8.99533 6.80286C9.6962 6.80286 10.2757 6.5716 10.7339 6.10909C11.1921 5.6466 11.4212 5.06093 11.4212 4.35209C11.4212 3.64143 11.1926 3.05524 10.7353 2.59351C10.278 2.13176 9.69891 1.90088 8.99804 1.90088C8.29717 1.90088 7.71764 2.13186 7.25944 2.59381C6.80125 3.05575 6.57217 3.64075 6.57217 4.3488C6.57217 5.05868 6.80081 5.64515 7.25811 6.10823C7.71539 6.57132 8.29447 6.80286 8.99533 6.80286Z"
                      fill="#0D7AFF"
                    />
                  </svg>
                </span>
                New Customer
              </button>

              <div className="flex justify-between items-center mb-[32px]">
                <div>
                  <div className="flex items-center text-[#3E3E3E] font-medium text-[14px] leading-[17px] break-word md:no-break-word">
                    <img
                      className="mr-[13px] w-[35px] h-[35px]"
                      src="./img/thumbnail.png"
                      alt=""
                    />
                    Customer name
                  </div>
                </div>
                <div>
                  <button className="whitespace-nowrap flex items-center py-[11px] px-[14px] rounded-[10px] bg-[#408FEF1A]  hover:bg-[#408FEF]/20 text-[#0D7AFF] font-semibold text-[14px] leading-[17px]">
                    <span className="mr-[12px] plus-icon"></span>
                    New invoice
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-[32px]">
                <div>
                  <div className="flex items-center text-[#3E3E3E] font-medium text-[14px] leading-[17px] break-word md:no-break-word">
                    <img
                      className="mr-[13px] w-[35px] h-[35px]"
                      src="./img/thumbnail.png"
                      alt=""
                    />
                    Customer name
                  </div>
                </div>
                <div>
                  <button className="whitespace-nowrap flex items-center py-[11px] px-[14px] rounded-[10px] bg-[#408FEF1A] hover:bg-[#408FEF]/20 text-[#0D7AFF] font-semibold text-[14px] leading-[17px]">
                    <span className="mr-[12px] plus-icon"></span>
                    New invoice
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-[32px]">
                <div>
                  <div className="flex items-center text-[#3E3E3E] font-medium text-[14px] leading-[17px] break-word md:no-break-word">
                    <img
                      className="mr-[13px] w-[35px] h-[35px]"
                      src="./img/thumbnail.png"
                      alt=""
                    />
                    Customer name
                  </div>
                </div>
                <div>
                  <button className="whitespace-nowrap flex items-center py-[11px] px-[14px] rounded-[10px] bg-[#408FEF1A] hover:bg-[#408FEF]/20 text-[#0D7AFF] font-semibold text-[14px] leading-[17px]">
                    <span className="mr-[12px] plus-icon"></span>
                    New invoice
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-[32px]">
                <div>
                  <div className="flex items-center text-[#3E3E3E] font-medium text-[14px] leading-[17px] break-word md:no-break-word">
                    <img
                      className="mr-[13px] w-[35px] h-[35px]"
                      src="./img/thumbnail.png"
                      alt=""
                    />
                    Customer name
                  </div>
                </div>
                <div>
                  <button className="whitespace-nowrap flex items-center py-[11px] px-[14px] rounded-[10px] bg-[#408FEF1A] hover:bg-[#408FEF]/20 text-[#0D7AFF] font-semibold text-[14px] leading-[17px]">
                    <span className="mr-[12px] plus-icon"></span>
                    New invoice
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center text-[#3E3E3E] font-medium text-[14px] leading-[17px] break-word md:no-break-word">
                    <img
                      className="mr-[13px] w-[35px] h-[35px]"
                      src="./img/thumbnail.png"
                      alt=""
                    />
                    Customer name
                  </div>
                </div>
                <div>
                  <button className="whitespace-nowrap flex items-center py-[11px] px-[14px] rounded-[10px] bg-[#408FEF1A] hover:bg-[#408FEF]/20 text-[#0D7AFF] font-semibold text-[14px] leading-[17px]">
                    <span className="mr-[12px] plus-icon"></span>
                    New invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div className="bg-gradient-white2 rounded-[20px] py-[22px] px-[21px] md:px-[29px]">
              <div className="flex justify-between items-end mb-[32px]">
                <h2 className="text-[#003F6C] text-xl leading-[30px] font-semibold">
                  Recent invoices
                </h2>
                <button className="text-[#0D7AFF] hover:text-[#002743] text-xs leading-[18px] m-0 font-semibold ">
                  See all
                </button>
              </div>

              <div className="grid-cols-11 bg-white py-[10px] px-[11px] mb-[18px] items-center rounded-[10px] hidden md:grid">
                <div className="col-span-1 h-[19px]">
                  <input
                    className="input-check-all h-[19px] w-[19px] rounded-[5px] border-[#A9AFB5]"
                    type="checkbox"
                    id="coding"
                    name="interest"
                    defaultValue="coding"
                  />
                </div>
                <div className="col-span-2">
                  <p className="m-0 uppercase text-[#A9AFB5] font-semibold text-[10px] leading-[10px]">
                    invoice id
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="m-0 uppercase text-[#A9AFB5] font-semibold text-[10px] leading-[10px]">
                    DUE
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="m-0 uppercase text-[#A9AFB5] font-semibold text-[10px] leading-[10px]">
                    amount
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="m-0 uppercase text-[#A9AFB5] font-semibold text-[10px] leading-[10px]">
                    status
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="m-0 uppercase text-[#A9AFB5] font-semibold text-[10px] leading-[10px]">
                    ACTIONS
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-11 py-[10px] md:px-[11px] mb-[18px] items-center">
                <div className="col-span-1 h-[19px]">
                  <input
                    className="h-[19px] w-[19px] rounded-[5px] border-[#A9AFB5] bg-transparent"
                    type="checkbox"
                    id="coding"
                    name="interest"
                    defaultValue="coding"
                  />
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="m-0 mb-[13.5px] md:mb-0 uppercase py-[1.5px] px-[7.5px] bg-white rounded-[20px] inline-block text-[#3E3E3E] font-semibold text-xs md:text-[14px] md:leading-[21px]">
                    #12995
                  </p>
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px] md:hidden">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right md:text-center">
                  <p className="md:hidden mb-[12px] mb:mb-0 m-0 text-[#3E3E3E] text-sm md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                  <p className="m-0 uppercase bg-[#EDF9F2] text-[#1D6D4F] font-bold text-[10px] leading-[12px] py-[4px] px-[12px] rounded-[10px] inline">
                    PAID
                  </p>
                </div>
                <div className="col-span-2 text-right md:text-center flex justify-end md:justify-center relative">
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
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.93333 20C1.4 20 0.944445 19.8133 0.566667 19.4399C0.188889 19.0664 0 18.6161 0 18.089V14.0033H1.5V18.089C1.5 18.1988 1.54444 18.2976 1.63333 18.3855C1.72222 18.4734 1.82222 18.5173 1.93333 18.5173H18.0667C18.1778 18.5173 18.2778 18.4734 18.3667 18.3855C18.4556 18.2976 18.5 18.1988 18.5 18.089V14.0033H20V18.089C20 18.6161 19.8111 19.0664 19.4333 19.4399C19.0556 19.8133 18.6 20 18.0667 20H1.93333ZM10 15.0577L4.46667 9.58814L5.56667 8.53377L9.23333 12.1582V0H10.7667V12.1582L14.4333 8.53377L15.5333 9.58814L10 15.0577Z"
                            fill="#0D7AFF"
                          />
                        </svg>
                      </a>
                      <a
                        href="./index.php"
                        className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
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

              <hr className="mb-[18px] border-[#E4E4E4] bg-[#E4E4E4]" />

              <div className="grid grid-cols-11 py-[10px] md:px-[11px] mb-[18px] items-center">
                <div className="col-span-1 h-[19px]">
                  <input
                    className="h-[19px] w-[19px] rounded-[5px] border-[#A9AFB5] bg-transparent"
                    type="checkbox"
                    id="coding"
                    name="interest"
                    defaultValue="coding"
                  />
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="m-0 mb-[13.5px] md:mb-0 uppercase py-[1.5px] px-[7.5px] bg-white rounded-[20px] inline-block text-[#3E3E3E] font-semibold text-xs md:text-[14px] md:leading-[21px]">
                    #12995
                  </p>
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px] md:hidden">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right md:text-center">
                  <p className="md:hidden mb-[12px] mb:mb-0 m-0 text-[#3E3E3E] text-sm md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                  <p className="m-0 uppercase bg-[#FFE7EF] text-[#901740] font-bold text-[10px] leading-[12px] py-[4px] px-[12px] rounded-[10px] inline">
                    PAID
                  </p>
                </div>
                <div className="col-span-2 text-right md:text-center flex justify-end md:justify-center relative">
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
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.93333 20C1.4 20 0.944445 19.8133 0.566667 19.4399C0.188889 19.0664 0 18.6161 0 18.089V14.0033H1.5V18.089C1.5 18.1988 1.54444 18.2976 1.63333 18.3855C1.72222 18.4734 1.82222 18.5173 1.93333 18.5173H18.0667C18.1778 18.5173 18.2778 18.4734 18.3667 18.3855C18.4556 18.2976 18.5 18.1988 18.5 18.089V14.0033H20V18.089C20 18.6161 19.8111 19.0664 19.4333 19.4399C19.0556 19.8133 18.6 20 18.0667 20H1.93333ZM10 15.0577L4.46667 9.58814L5.56667 8.53377L9.23333 12.1582V0H10.7667V12.1582L14.4333 8.53377L15.5333 9.58814L10 15.0577Z"
                            fill="#0D7AFF"
                          />
                        </svg>
                      </a>
                      <a
                        href="./index.php"
                        className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
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

              <hr className="mb-[18px] border-[#E4E4E4] bg-[#E4E4E4]" />

              <div className="grid grid-cols-11 py-[10px] md:px-[11px] mb-[18px] items-center">
                <div className="col-span-1 h-[19px]">
                  <input
                    className="h-[19px] w-[19px] rounded-[5px] border-[#A9AFB5] bg-transparent"
                    type="checkbox"
                    id="coding"
                    name="interest"
                    defaultValue="coding"
                  />
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="m-0 mb-[13.5px] md:mb-0 uppercase py-[1.5px] px-[7.5px] bg-white rounded-[20px] inline-block text-[#3E3E3E] font-semibold text-xs md:text-[14px] md:leading-[21px]">
                    #12995
                  </p>
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px] md:hidden">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right md:text-center">
                  <p className="md:hidden mb-[12px] mb:mb-0 m-0 text-[#3E3E3E] text-sm md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                  <p className="m-0 uppercase bg-[#EDF9F2] text-[#1D6D4F] font-bold text-[10px] leading-[12px] py-[4px] px-[12px] rounded-[10px] inline">
                    PAID
                  </p>
                </div>
                <div className="col-span-2 text-right md:text-center flex justify-end md:justify-center relative">
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
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.93333 20C1.4 20 0.944445 19.8133 0.566667 19.4399C0.188889 19.0664 0 18.6161 0 18.089V14.0033H1.5V18.089C1.5 18.1988 1.54444 18.2976 1.63333 18.3855C1.72222 18.4734 1.82222 18.5173 1.93333 18.5173H18.0667C18.1778 18.5173 18.2778 18.4734 18.3667 18.3855C18.4556 18.2976 18.5 18.1988 18.5 18.089V14.0033H20V18.089C20 18.6161 19.8111 19.0664 19.4333 19.4399C19.0556 19.8133 18.6 20 18.0667 20H1.93333ZM10 15.0577L4.46667 9.58814L5.56667 8.53377L9.23333 12.1582V0H10.7667V12.1582L14.4333 8.53377L15.5333 9.58814L10 15.0577Z"
                            fill="#0D7AFF"
                          />
                        </svg>
                      </a>
                      <a
                        href="./index.php"
                        className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
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

              <hr className="mb-[18px] border-[#E4E4E4] bg-[#E4E4E4]" />

              <div className="grid grid-cols-11 py-[10px] md:px-[11px] mb-[18px] items-center">
                <div className="col-span-1 h-[19px]">
                  <input
                    className="h-[19px] w-[19px] rounded-[5px] border-[#A9AFB5] bg-transparent"
                    type="checkbox"
                    id="coding"
                    name="interest"
                    defaultValue="coding"
                  />
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="m-0 mb-[13.5px] md:mb-0 uppercase py-[1.5px] px-[7.5px] bg-white rounded-[20px] inline-block text-[#3E3E3E] font-semibold text-xs md:text-[14px] md:leading-[21px]">
                    #12995
                  </p>
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px] md:hidden">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right md:text-center">
                  <p className="md:hidden mb-[12px] mb:mb-0 m-0 text-[#3E3E3E] text-sm md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                  <p className="m-0 uppercase bg-[#EDF9F2] text-[#1D6D4F] font-bold text-[10px] leading-[12px] py-[4px] px-[12px] rounded-[10px] inline">
                    PAID
                  </p>
                </div>
                <div className="col-span-2 text-right md:text-center flex justify-end md:justify-center relative">
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
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.93333 20C1.4 20 0.944445 19.8133 0.566667 19.4399C0.188889 19.0664 0 18.6161 0 18.089V14.0033H1.5V18.089C1.5 18.1988 1.54444 18.2976 1.63333 18.3855C1.72222 18.4734 1.82222 18.5173 1.93333 18.5173H18.0667C18.1778 18.5173 18.2778 18.4734 18.3667 18.3855C18.4556 18.2976 18.5 18.1988 18.5 18.089V14.0033H20V18.089C20 18.6161 19.8111 19.0664 19.4333 19.4399C19.0556 19.8133 18.6 20 18.0667 20H1.93333ZM10 15.0577L4.46667 9.58814L5.56667 8.53377L9.23333 12.1582V0H10.7667V12.1582L14.4333 8.53377L15.5333 9.58814L10 15.0577Z"
                            fill="#0D7AFF"
                          />
                        </svg>
                      </a>
                      <a
                        href="./index.php"
                        className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
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

              <hr className="mb-[18px] border-[#E4E4E4] bg-[#E4E4E4]" />

              <div className="grid grid-cols-11 py-[10px] md:px-[11px] items-center">
                <div className="col-span-1 h-[19px]">
                  <input
                    className="h-[19px] w-[19px] rounded-[5px] border-[#A9AFB5] bg-transparent"
                    type="checkbox"
                    id="coding"
                    name="interest"
                    defaultValue="coding"
                  />
                </div>
                <div className="col-span-5 md:col-span-2">
                  <p className="m-0 mb-[13.5px] md:mb-0 uppercase py-[1.5px] px-[7.5px] bg-white rounded-[20px] inline-block text-[#3E3E3E] font-semibold text-xs md:text-[14px] md:leading-[21px]">
                    #12995
                  </p>
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px] md:hidden">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    Jan5, 2023
                  </p>
                </div>
                <div className="hidden md:block col-span-2">
                  <p className="m-0 text-[#3E3E3E] text-xs md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                </div>
                <div className="col-span-3 md:col-span-2 text-right md:text-center">
                  <p className="md:hidden mb-[12px] mb:mb-0 m-0 text-[#3E3E3E] text-sm md:text-[14px] md:leading-[21px]">
                    <span className="mr-2">$</span> 500
                  </p>
                  <p className="m-0 uppercase bg-[#FFE7EF] text-[#901740] font-bold text-[10px] leading-[12px] py-[4px] px-[12px] rounded-[10px] inline">
                    PAID
                  </p>
                </div>
                <div className="col-span-2 text-right md:text-center flex justify-end md:justify-center relative">
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
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.93333 20C1.4 20 0.944445 19.8133 0.566667 19.4399C0.188889 19.0664 0 18.6161 0 18.089V14.0033H1.5V18.089C1.5 18.1988 1.54444 18.2976 1.63333 18.3855C1.72222 18.4734 1.82222 18.5173 1.93333 18.5173H18.0667C18.1778 18.5173 18.2778 18.4734 18.3667 18.3855C18.4556 18.2976 18.5 18.1988 18.5 18.089V14.0033H20V18.089C20 18.6161 19.8111 19.0664 19.4333 19.4399C19.0556 19.8133 18.6 20 18.0667 20H1.93333ZM10 15.0577L4.46667 9.58814L5.56667 8.53377L9.23333 12.1582V0H10.7667V12.1582L14.4333 8.53377L15.5333 9.58814L10 15.0577Z"
                            fill="#0D7AFF"
                          />
                        </svg>
                      </a>
                      <a
                        href="./index.php"
                        className="w-[40px] h-[40px] bg-[#408FEF]/10 hover:bg-[#408FEF]/20 rounded-[10px] ml-[15px] inline-flex items-center justify-center"
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
      </div>
    </>
  );
};

export default DashboardPage;
