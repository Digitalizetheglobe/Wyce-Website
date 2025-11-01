import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply for NRI Home Loan in India",
  description: "Explore NRI home loan solutions tailored for you. Apply today to benefit from attractive interest rates and easy processing for your property in India.",
  keywords: "NRI Home Loan India, Home Loan for NRI, NRI Housing Loan Eligibility, NRI Home Loan Documents, NRI Loan Interest Rates, RBI Rules for NRI Home Loan, NRI Property Loan India, NRI Home Loan Process, Apply NRI Home Loan Online, NRI Home Loan Requirements",
  robots: "index, follow",
  authors: [{ name: "WYCE Corp" }],
  publisher: "WYCE Corp",
  alternates: {
    canonical: "https://www.wycecorp.com/loan-help"
  }
};

export default function BlogPage() {


  return (
    <>

      <section className="w-full text-white py-10 md:py-16 bg-[#0a0a0a] border-b border-white/20 ">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4">
            <span className="font-breathney text-[#b6a16b] mr-1 sm:mr-2 text-[20px] sm:text-2xl md:text-2xl lg:text-2xl">Loan</span>Help
          </h2>
          <p className="text-gray-200 text-sm md:text-base">
            At WYCE Corp, we believe a home is more than bricks and beams
            it&apos;s the space where your most beautiful moments begin.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
          {/* Image Section */}
        
        </div>
      </section>

      {/* Loan Help Section */}
      <section className="w-full bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-4xl font-bold mb-8">Loan Help</h1>
          
          <p className="text-lg leading-relaxed mb-8">
            If you are a Non-Resident Indian (NRI), acquiring a home loan in India can be a confusing process. Here is some information to help you understand the process.
          </p>

          {/* Eligible NRI Categories */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b6a16b]">Eligible NRI Categories</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed ml-4">
              <li>Indian citizens residing abroad for employment, business, or any indefinite purpose.</li>
              <li>Government employees posted abroad with Indian missions, drawing salaries from Government resources.</li>
              <li>Officials deputed abroad with foreign governments or agencies like the World Bank, IMF, WHO, and ESCAP.</li>
              <li>State Government or PSU officials on temporary assignments abroad.</li>
            </ul>
          </div>

          {/* Home Loan Uses */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b6a16b]">Home Loan Uses</h2>
            <p className="text-lg leading-relaxed">
              Home loans are available for various purposes, including the purchase of new or resale residential properties and the construction of new houses or flats. You can also get a loan for home improvement, extension, or renovation.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b6a16b]">Eligibility Criteria</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed ml-4">
              <li><strong>Age:</strong> The minimum age to qualify for a loan is typically 21 years.</li>
              <li><strong>Education:</strong> A graduate degree is a common requirement.</li>
              <li><strong>Employment:</strong> You must be a salaried or self-employed individual with a steady income abroad. Most lenders require a minimum of three years of overseas work experience.</li>
              <li><strong>Income:</strong> Minimum income requirements vary, but a stable income is always evaluated.</li>
              <li><strong>Co-applicants:</strong> You can apply individually or with co-applicants, who can be your spouse, parents, or major children. All co-owners of a property must be co-applicants.</li>
            </ul>
          </div>

          {/* Loan Terms */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b6a16b]">Loan Terms</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed ml-4">
              <li><strong>Loan Amount:</strong> Lenders typically provide a loan amount between 75% and 90% of the property cost. The loan amount depends on your income and the value of the property.</li>
              <li><strong>Loan Tenure:</strong> You can opt for a loan period of up to 20 to 30 years, depending on the lender and your profile.</li>
              <li><strong>Interest Rates:</strong> NRIs should expect slightly higher interest rates compared to resident Indians, as they are considered higher-risk borrowers.</li>
            </ul>
          </div>

          {/* RBI Directives */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b6a16b]">RBI Directives</h2>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed ml-4">
              <li>Repayment of NRI home loans must be made through Non-Resident External (NRE) or Non-Resident Ordinary (NRO) accounts.</li>
              <li>The repayment of the loan can also be made through international money transfers from overseas.</li>
            </ul>
          </div>

          {/* Required Documents */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#b6a16b]">Required Documents</h2>
            <p className="text-lg leading-relaxed mb-4">
              NRIs need to furnish additional documents compared to resident Indians. These include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed ml-4">
              <li><strong>Identity & Status Proof:</strong> Valid passport and visa copies. A valid work permit is also required. If you are a PIO or OCI, a valid card is needed.</li>
              <li><strong>Income Proof:</strong> Latest salary slips, bank statements (NRE/NRO and overseas), and income tax returns.</li>
              <li><strong>Employment Proof:</strong> Appointment or employment letters, work contracts, or Continuous Discharge Certificate (for those in the Merchant Navy).</li>
              <li><strong>Property Documents:</strong> Allotment letter, buyer agreement, and title deeds. Approved building plans and other required clearance certificates are also necessary.</li>
              <li><strong>Power of Attorney (POA):</strong> It is desirable to appoint a relative as a POA holder to act on your behalf in India.</li>
            </ul>
          </div>
          
        </div>
      </section>


    </>
  );
}

