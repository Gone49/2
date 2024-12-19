import React from 'react';

const DoctorSignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 flex flex-col items-center py-10">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-600">Welcome to the Future of Healthcare</h1>
        <p className="mt-2 text-lg text-gray-700">A place where your practice evolves with the times.</p>
      </div>

      {/* Quote Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center mb-8">
        <blockquote className="text-xl italic text-gray-800">
          "The good physician treats the disease; the great physician treats the patient who has the disease." <br />
          <span className="font-semibold">- William Osler</span>
        </blockquote>
      </section>

      {/* About Our Application */}
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4 md:w-1/2 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">What We Offer</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Imagine a practice where you spend less time on administrative tasks and more time focusing on what truly matters—your patients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-green-500">📅</span>
            <p className="text-lg text-gray-600">Appointment Scheduling, Seamlessly Integrated</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-blue-500">💉</span>
            <p className="text-lg text-gray-600">Patient Records, All in One Place</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-yellow-500">📊</span>
            <p className="text-lg text-gray-600">Analytics to Guide Better Care, Effortlessly</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-3xl text-purple-500">🤝</span>
            <p className="text-lg text-gray-600">Building Connections Across Healthcare Professionals</p>
          </div>
        </div>
      </div>

      {/* Time and Cost Savings Message */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">For the Innovators</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          In an ever-changing world, the tools you use should evolve just as fast. What if your practice could flow more smoothly, with less disruption? 
          Imagine a system that’s as efficient as you are, so you can focus on what you do best.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>A system that keeps your schedule organized and your patients informed.</li>
          <li>Data at your fingertips, ready to help you make quicker, informed decisions.</li>
          <li>Tools that support collaboration—making connections easier than ever before.</li>
          <li>A seamless experience that just works, day in and day out.</li>
        </ul>
      </div>

      {/* Join Call to Action */}
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Become Part of the Change</h2>
        <p className="text-lg text-white mb-6">
          Technology should enhance the way you practice. It should make it easier, faster, and more impactful. Here’s your chance to embrace that change.
          Your practice, your patients, your future—now more connected than ever before.
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
          Already part of our network? <a href="/login" className="text-blue-500 hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default DoctorSignUpPage;
