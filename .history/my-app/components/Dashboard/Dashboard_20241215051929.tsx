import React from "react";
import { Button } from/ui";
import { FiMenu, FiBox, FiPlus, FiSettings } from "react-icons/fi";

const InventoryDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        </div>
        <nav className="px-4">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <FiBox className="mr-3" />
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <FiSettings className="mr-3" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <button className="lg:hidden">
              <FiMenu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          <div>
            <Button variant="default">
              <FiPlus className="mr-2" />
              Add Product
            </Button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card Example */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Product A</h3>
              <p className="text-gray-600 mt-2">Stock: 25</p>
              <p className="text-gray-600 mt-2">Price: ₹500</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Product B</h3>
              <p className="text-gray-600 mt-2">Stock: 50</p>
              <p className="text-gray-600 mt-2">Price: ₹1,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Product C</h3>
              <p className="text-gray-600 mt-2">Stock: 10</p>
              <p className="text-gray-600 mt-2">Price: ₹2,000</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryDashboard;
