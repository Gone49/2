import React from 'react'

export default function page() {
  return (
    <div className='min-h-screen'>
         {/* Quote Section */}
         <section className="bg-blue-100 p-6 rounded-lg shadow-md w-3/4 md:w-1/2 text-center mb-8">
        <blockquote className="text-xl italic text-gray-800">
          "Take care to get what you like or you will be forced to like what you get." <br />
          <span className="font-semibold">- George Bernard Shaw</span>
        </blockquote>
      </section>
     </div>
  )
}
