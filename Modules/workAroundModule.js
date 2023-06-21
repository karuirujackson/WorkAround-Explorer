//imports from salary.js
import { getDataByRole, getDataByCompany } from "./salary.js";
import salaryData from "./salary.js";
// Initialized empty array replaced with the appropriate imported function.
const getAverageSalaryByRole = role => {
    const roleData = getDataByRole(role);
    const salariesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfRole);
  }
  
  // Initialized empty array replaced with the appropriate imported function.
  const getAverageSalaryByCompany = company => {
    const companyData = getDataByCompany(company);
    const salariesAtCompany = companyData.map(obj => obj.salary);
    return calculateAverage(salariesAtCompany);
  }
  
  // Initialized empty array replaced with the appropriate imported function.
  const getSalaryAtCompany = (role, company) => {
    const companyData = getDataByCompany(company);
    const roleAtCompany = companyData.find(obj => obj.role === role);
    return roleAtCompany.salary;
  }
  
  // Initialized empty array replaced with the appropriate imported function.
  const getIndustryAverageSalary = () => {
    const allSalaries = salaryData.map(obj => obj.salary);
    return calculateAverage(allSalaries);
  }

  // Note: This function does not need to be exported since it is only used by the functions contained within this module.
  function calculateAverage(arrayOfNumbers) {
    let total = 0;
    arrayOfNumbers.forEach(number => total += number);
    return (total / arrayOfNumbers.length).toFixed(2);
  }
  
  //Exporting functions to main.js 
  export {getAverageSalaryByRole,
        getAverageSalaryByCompany,
        getSalaryAtCompany,
        getIndustryAverageSalary
      };
  