import React from "react";

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      desc: "Free for individual doctors.",
      price: "Free Forever",
      isMostPop: false,
      features: [
        "1 Doctor Profile",
        "Basic Appointment Management",
        "Limited Patient Records",
        "Upto 200 "
      ],
      buttonLabel: "Get Started",
    },
    {
      name: "Professional",
      desc: "₹1,499/month",
      price: "₹1,499/month",
      isMostPop: true,
      features: [
        "5 Doctor Profiles",
        "Advanced Appointment Scheduling",
        "Unlimited Patient Records",
        "Email Support",
      ],
      buttonLabel: "Start Free Trial",
    },
    {
      name: "Enterprise",
      desc: "₹3,499/month",
      price: "₹3,499/month",
      isMostPop: false,
      features: [
        "Unlimited Doctor Profiles",
        "Priority Support",
        "Customizable Health Records",
        "Advanced Analytics",
      ],
      buttonLabel: "Get Started",
    },
  ];

  return (
    <div className="min-h-screen bg-teal-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Affordable Pricing for Every Doctor and Practice
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Choose a plan that works best for you. Get started with a free trial and scale as needed!
        </p>

        {/* Responsive Pricing Section */}
        <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:overflow-x-auto no-scrollbar px-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-shrink-0 bg-white p-6 rounded-lg shadow-md border border-gray-200 w-80 relative ${
                plan.isMostPop ? "ring-2 ring-amber-300" : ""
              }`}
            >
              {/* "Most Popular" Tag */}
              {plan.isMostPop && (
                <span className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 bg-amber-200 text-black text-xs font-semibold px-4 py-1 rounded-md border-4 border-white">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {plan.name}
              </h2>
              <p className="text-lg text-gray-600 mb-4">{plan.price}</p>
              <ul className="text-left text-gray-600 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="w-full py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-400 transition">
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Not sure which plan is right for you?{" "}
            <span className="text-teal-500 font-semibold">
              Contact our support team
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

