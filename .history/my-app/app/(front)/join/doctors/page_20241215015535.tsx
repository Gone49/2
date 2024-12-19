import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen'>
         {/* Quote Section */}
      <section className="bg-blue-100 p-6 rounded-lg shadow-md w-3/4 md:w-1/2 text-center mb-8">
        <blockquote className="text-xl italic text-gray-800">
          "The best way to find yourself is to lose yourself in the service of others." <br />
          <span className="font-semibold">- Mahatma Gandhi</span>
        </blockquote>
      </section>
     </div>
  )
}
