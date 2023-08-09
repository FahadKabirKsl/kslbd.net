import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import AOS from "aos";
const dummyData = [
  {
    bankname: "City Bank",
    branch: "Probortok",
    accnum: "1122422646001",
    routenum: "225156326",
  },
  {
    bankname: "City Bank",
    branch: "Probortok",
    accnum: "1122422646001",
    routenum: "225156326",
  },
  {
    bankname: "City Bank",
    branch: "Probortok",
    accnum: "1122422646001",
    routenum: "225156326",
  },
];

function BankDetails() {
  useEffect(() => {
    AOS.init();
  }, []);
  const columns = [
    {
      name: "Bank Name",
      selector: (row) => row.bankname,
      // grow: 2,
    },
    {
      name: "Branch",
      selector: (row) => row.branch,
      // grow: 2,
    },
    {
      name: "Account Number",
      selector: (row) => row.accnum,
      // grow: 2,
    },
    {
      name: "Routing Number",
      selector: (row) => row.routenum,
      // grow: 2,
    },
  ];
  return (
    <>
      <div className="bg-ksl_light_red">
        <div className="px-80 xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 py-5 xsm:pt-0 sm:pt-0 ">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex flex-col">
              <div>
                <p
                  className="text-3xl font-semibold text-ksl_dark_black pb-5"
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Bank Details
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-xl font-semibold text-ksl_dark_black pb-5"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                >
                  Account Name- Kabir Securities Limited
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                <DataTable
                  columns={columns}
                  data={dummyData}
                  className="custom-table"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankDetails;
