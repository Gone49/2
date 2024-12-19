import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-cyan-500 text-white py-2">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between px-4">
        {/* Copyright Section */}
        {/* <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CareBridge. All rights reserved.
          </p>
        </div> */}

        {/* as Section */}
        <div className="mt-1 flex pb-2 space-x-4">
          <Link href="#" className="text-white hover:underline">Privacy Policy</Link>
          <Link href="#" className="text-white hover:underline">Terms of Service</Link>
          <Link href="#" className="text-white hover:underline">Contact Us</Link>
          <Link href="#" className="text-white hover:underline">Help Center</Link>
        </div>
                    
        {/* Additional Info */}
        <div className="mt-1 pb-2 text-center">
          <p className="text-sm">
            Built with ❤️ by CareBridge
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
