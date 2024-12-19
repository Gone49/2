import React from 'react';

const DoctorSignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-serif text-blue-600 md:text-5xl">Welcome to a New Era in Healthcare</h1>
        <p className="mt-2 text-lg text-gray-700 md:text-xl">Where healthcare meets innovation and every decision drives progress.</p>
      </div>

     {/* Vision Section */}
<section className="bg-teal-50 p-6 rounded-lg shadow-sm w-full md:w-3/4 lg:w-1/2 text-center mb-8">
  <blockquote className="text-lg italic text-gray-600 md:text-xl">
    "The future of healthcare lies not in individual efforts, but in the strength of collaboration. Every patient, every colleague, every connection has the power to improve lives and reshape outcomes for the better." 
    <br />
    <span className="font-semibold text-gray-800">- Our Vision</span>
  </blockquote>
</section>



      {/* About Our Mission */}
      <div className="bg-teal-50 p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4 md:text-3xl">Our Mission: Transforming Healthcare Worldwide</h2>
        <p className="text-lg text-gray-600 text-center mb-6 md:text-xl">
          We aren’t just a platform; we’re the bridge to a new healthcare system—one that connects patients, doctors, and healthcare professionals in ways never seen before.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-green-500">🌍</span>
            <p className="text-lg text-gray-600">Global Network, Local Impact</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-blue-500">⚡</span>
            <p className="text-lg text-gray-600">Instant Access to Critical Data</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-500">🚀</span>
            <p className="text-lg text-gray-600">Accelerating Healthcare Delivery</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-purple-500">💡</span>
            <p className="text-lg text-gray-600">Empowering Professionals with Knowledge</p>
          </div>
        </div>
      </div>

      {/* Subtle Impact Section */}
      <div className="bg-gradient-to-r from-teal-200 via-blue-300 to-purple-400 p-8 rounded-lg shadow-xl w-full md:w-3/4 lg:w-1/2 mb-8 flex flex-col items-center text-center text-white">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Redefining Healthcare's Future</h2>
        <p className="text-lg mb-6 md:text-xl">
          Healthcare is evolving—connecting professionals and patients faster, better, and smarter. Together, we can accelerate this transformation and redefine the way healthcare is delivered.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-300">🌟</span>
            <p className="text-lg">Seamless Collaboration, Better Outcomes</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-300">📊</span>
            <p className="text-lg">Data-Driven Care, Revolutionized Delivery</p>
          </div>
        </div>
      </div>
      {/* Doctor Listing Form Section */}
<div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 text-center mb-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:text-3xl">Doctor Service Registration</h2>
  <p className="text-lg text-gray-600 mb-6 md:text-xl">
    Share your expertise, experience, and specialties to be a part of our trusted healthcare network.
  </p>
  
  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-left text-gray-700">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div>
      <label htmlFor="specialization" className="block text-left text-gray-700">Specialization</label>
      <input
        type="text"
        id="specialization"
        name="specialization"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your area of expertise"
        required
      />
    </div>

    <div>
      <label htmlFor="experience" className="block text-left text-gray-700">Years of Experience</label>
      <input
        type="number"
        id="experience"
        name="experience"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Years of experience"
        required
      />
    </div>

    <div>
      <label htmlFor="education" className="block text-left text-gray-700">Highest Education</label>
      <input
        type="text"
        id="education"
        name="education"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Your highest qualification"
        required
      />
    </div>

    <div>
      <label htmlFor="services" className="block text-left text-gray-700">Services Offered</label>
      <textarea
        id="services"
        name="services"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="List the services you provide"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full text-lg text-white bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Submit Your Listing
    </button>
  </form>
</div>

{/* Already Registered Section */}
<div className="mt-8 text-center">
  <p className="text-gray-700">
    Already listed? <a href="/login" className="text-blue-500 hover:underline">Login to update your profile</a>.
  </p>
</div>

     
    </div>
  );
};

export default DoctorSignUpPage;
