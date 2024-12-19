import React from 'react';

const DoctorSignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 flex flex-col items-center py-10">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-600">Welcome to a New Era in Healthcare</h1>
        <p className="mt-2 text-lg text-gray-700">Where healthcare meets innovation, and every decision drives progress.</p>
      </div>

      {/* Vision Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center mb-8">
        <blockquote className="text-xl italic text-gray-800">
          "Health is not just about curing illness. It's about improving lives, connecting communities, and transforming healthcare for all." <br />
          <span className="font-semibold">- Our Vision</span>
        </blockquote>
      </section>

      {/* About Our Mission */}
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4 md:w-1/2 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">Our Mission: Transforming Healthcare Worldwide</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          We aren’t just a platform; we’re the bridge to a new healthcare system—one that connects patients, doctors, and healthcare professionals in ways never seen before.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">Redefining How Healthcare Works</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          This is not just about tools; it’s about a fundamental shift in how healthcare operates across the globe. By connecting people, providing timely access to data, and simplifying collaboration, we’re creating a new paradigm.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Connecting healthcare professionals globally, breaking down barriers.</li>
          <li>Empowering you to provide faster, more effective care.</li>
          <li>Reducing inefficiencies, saving time, and improving patient outcomes.</li>
          <li>Building a community where knowledge and expertise flow freely.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Join the Movement, Change the World</h2>
        <p className="text-lg text-white mb-6">
          By joining us, you’re not just signing up for a service—you’re becoming part of a global movement that is reshaping healthcare for everyone.
        </p>
        <a
          href="/signup" // Replace with the actual link to your signup form
          className="block text-center text-lg text-white bg-orange-500 py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Join Now
        </a>
      </div>

      {/* Already a Member Section */}
      <div className="mt-8">
        <p className="text-gray-700">
          Already part of our community? <a href="/login" className="text-blue-500 hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default DoctorSignUpPage;
