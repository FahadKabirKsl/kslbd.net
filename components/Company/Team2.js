import React from "react";

function Team2({ data }) {
  return (
    <div className="bg-ksl_light_red">
      <div className="xsm:px-5 sm:px-5 md:px-10 mdl:px-10 xl:px-10 px-80">
        <div>
          <div className="text-center py-10">
            <p
              className="text-text_41 xsm:text-3xl sm:text-3xl font-lato font-bold pt-10 xsm:mt-28 sm:mt-28"
              data-aos="zoom-in"
              data-aos-offset="210"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
            >
              Meet Our Team
            </p>
          </div>
        </div>

        <div className="my-20">
          <div className="grid grid-cols-3 gap-4">
            {data.slice(0, 4).map((employee, index) => (
              <div key={index} className="bg-gray-200 p-4">
                {employee.employee_name}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.slice(4, 6).map((employee, index) => (
              <div key={index} className="bg-gray-200 p-4">
                {employee.employee_name}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {data.slice(6).map((employee, index) => (
              <div key={index} className="bg-gray-200 p-4">
                {employee.employee_name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team2;

// import React, { useEffect, useState } from 'react';

// const EmployeeGrid = () => {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/employee`);
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         console.error('Error fetching employee data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="grid grid-rows-2 gap-4">
//       <div className="grid grid-cols-3 gap-4">
//         {/* First grid */}
//         <div className="bg-gray-200 p-4">
//           {employees.length > 0 ? employees[0].name : 'Loading...'}
//         </div>

//         {/* Second grid */}
//         <div className="col-span-2 grid grid-cols-2 gap-4">
//           <div className="bg-gray-300 p-4">
//             {employees.length > 1 ? employees[1].name : 'Loading...'}
//           </div>
//           <div className="bg-gray-300 p-4">
//             {employees.length > 2 ? employees[2].name : 'Loading...'}
//           </div>
//         </div>

//         {/* Third grid */}
//         <div className="bg-gray-200 p-4">
//           {employees.length > 3 ? employees[3].name : 'Loading...'}
//         </div>
//       </div>

//       {/* Second row */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-gray-200 p-4">
//           {employees.length > 4 ? employees[4].name : 'Loading...'}
//         </div>
//         <div className="bg-gray-200 p-4">
//           {employees.length > 5 ? employees[5].name : 'Loading...'}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeGrid;
