import React from 'react';

const DoctorSignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to CareBridge</h1>
        <p className="mt-2 text-lg text-gray-600">We're excited to have you join our team of healthcare providers.</p>
      </div>

      {/* Quote Section */}
      <section className="bg-blue-100 p-6 rounded-lg shadow-md w-3/4 md:w-1/2 text-center mb-8">
        <blockquote className="text-xl italic text-gray-800">
          "Healing is a matter of time, but it is sometimes also a matter of opportunity." <br />
          <span className="font-semibold">- Hippocrates</span>
        </blockquote>
      </section>

      {/* Call to Action */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">Join Our Healthcare Network</h2>
        <p className="mt-2 text-gray-600">
          As a provider, you'll have access to a platform that helps you manage your appointments, track patient records, and connect with more patients. 
        </p>

        {/* Sign-Up Button */}
        <div className="mt-6">
          <a
            href="/signup" // Replace with the actual link to your signup form
            className="block text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Sign Up as a Doctor
          </a>
        </div>
      </div>
      
      {/* Already a member section */}
      <div className="mt-8">
        <p className="text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here</a>.
        </p>
      </div>
    </div>
  );
};

export default DoctorSignUpPage;
