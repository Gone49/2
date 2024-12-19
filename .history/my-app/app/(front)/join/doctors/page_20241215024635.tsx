import React from "react";

const DoctorSignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif text-blue-600 md:text-5xl">
          Welcome to a New Era in Healthcare
        </h1>
        <p className="mt-2 text-lg text-gray-700 md:text-xl">
          Where healthcare meets innovation and every decision drives progress.
        </p>
      </div>

      {/* Vision Section */}
      <section className="bg-teal-50 p-6 rounded-lg shadow-sm w-full md:w-3/4 lg:w-1/2 text-center mb-8">
        <blockquote className="text-lg italic text-gray-600 md:text-xl">
          "The future of healthcare lies not in individual efforts, but in the
          strength of collaboration. Every patient, every colleague, every
          connection has the power to improve lives and reshape outcomes for the
          better."
          <br />
          <span className="font-semibold text-gray-800">- Our Vision</span>
        </blockquote>
      </section>

      {/* About Our Mission */}
      <div className="bg-teal-50 p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4 md:text-3xl">
          Our Mission: Transforming Healthcare Worldwide
        </h2>
        <p className="text-lg text-gray-600 text-center mb-6 md:text-xl">
          We aren’t just a platform; we’re the bridge to a new healthcare
          system—one that connects patients, doctors, and healthcare
          professionals in ways never seen before.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-green-500">🌍</span>
            <p className="text-lg text-gray-600">
              Global Network, Local Impact
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-blue-500">⚡</span>
            <p className="text-lg text-gray-600">
              Instant Access to Critical Data
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-500">🚀</span>
            <p className="text-lg text-gray-600">
              Accelerating Healthcare Delivery
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-purple-500">💡</span>
            <p className="text-lg text-gray-600">
              Empowering Professionals with Knowledge
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Impact Section */}
      <div className="bg-gradient-to-r from-teal-100 via-blue-200 to-purple-300 p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-1/2 mb-8 flex flex-col items-center text-center text-gray-800">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">
          Shaping the Future of Healthcare
        </h2>
        <p className="text-lg mb-6 md:text-xl">
          The future of healthcare is built on connections, where every
          interaction counts, improving outcomes for both patients and
          professionals.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-teal-500">🌟</span>
            <p className="text-lg">Collaborating for Better Patient Care</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-teal-500">📊</span>
            <p className="text-lg">
              Data-Powered Decisions, Empowered Healthcare
            </p>
          </div>
        </div>
      </div>

    {/* Call to Action */} 
<div className="bg-gradient-to-r from-teal-200 via-blue-300 to-purple-400 p-6 md:p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-1/2 mb-8 flex flex-col items-center text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:text-3xl">
    Be Part of the Change
  </h2>
  <p className="text-lg text-gray-800 mb-6 md:text-xl">
    By joining us, you're not just adopting a service—you're stepping into
    a transformative journey that’s revolutionizing healthcare delivery
    across the globe.
  </p>
  <a
    href="/signup" // Replace with the actual link to your signup form
    className="block text-center text-lg text-white bg-orange-500 py-3 px-6 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
  >
    Join Now
  </a>
</div>


      {/* Already a Member Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-700">
          Already a member?{" "}
          <a href="/login" className="text-teal-500 hover:underline">
            Login here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default DoctorSignUpPage;
