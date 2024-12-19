import React from 'react';

const DoctorSignUpPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 flex flex-col items-center py-10">
      {/* Welcome Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-blue-600">Welcome to the Future of Healthcare</h1>
        <p className="mt-2 text-lg text-gray-700">A platform that works as hard as you do.</p>
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
          We understand that as a healthcare professional, time is as valuable as care itself. Imagine a practice where technology complements your workflow, rather than complicating it.
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
            <p className="text-lg text-gray-600">Collaborate with Healthcare Professionals</p>
          </div>
        </div>
      </div>

      {/* Subtle Time and Cost Benefits */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 mb-8">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-4">For Those Who Value Efficiency</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          A system that adapts to your needs can make all the difference. Whether it's streamlining workflows or providing insightful data, we believe in providing tools that are as effective as they are intuitive.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Your schedule, effortlessly organized.</li>
          <li>Data that helps guide decisions, without the hassle.</li>
          <li>Seamless communication and collaboration with peers.</li>
          <li>A reliable system that ensures your practice stays on track.</li>
        </ul>
      </div>

      {/* Join Call to Action */}
      <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center mb-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Join a Network of Innovators</h2>
        <p className="text-lg text-white mb-6">
          By choosing to be part of this community, you’re not just adopting a new tool—you’re stepping into a future where your practice, patients, and colleagues are all better connected.
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
