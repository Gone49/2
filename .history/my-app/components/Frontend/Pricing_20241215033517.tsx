import React from "react";

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Affordable Pricing for Every Doctor and Practice
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Choose a plan that works best for you. Get started with a free trial and scale as needed!
        </p>

        {/* Pricing Plans Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Basic</h2>
            <p className="text-lg text-gray-600 mb-4">Free for individual doctors.</p>
            <ul className="text-left text-gray-600 mb-6">
              <li>1 Doctor Profile</li>
              <li>Basic Appointment Management</li>
              <li>Limited Patient Records</li>
            </ul>
            <button className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-6 shadow-md border border-gray-200 rounded-s-lg relative">
            {/* "Most Popular" tag */}
            <span className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white text-xs font-semibold px-4 py-1 rounded-md border-4 border-white">
              Most Popular
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional</h2>
            <p className="text-lg text-gray-600 mb-4">₹1,499/month</p>
            <ul className="text-left text-gray-600 mb-6">
              <li>5 Doctor Profiles</li>
              <li>Advanced Appointment Scheduling</li>
              <li>Unlimited Patient Records</li>
              <li>Email Support</li>
            </ul>
            <button className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
              Start Free Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise</h2>
            <p className="text-lg text-gray-600 mb-4">₹3,499/month</p>
            <ul className="text-left text-gray-600 mb-6">
              <li>Unlimited Doctor Profiles</li>
              <li>Priority Support</li>
              <li>Customizable Health Records</li>
              <li>Advanced Analytics</li>
            </ul>
            <button className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Not sure which plan is right for you? <span className="text-teal-500 font-semibold">Contact our support team</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
