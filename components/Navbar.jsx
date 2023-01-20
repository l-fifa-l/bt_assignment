import React from 'react';

const navItems = [
  'dashboard',
  'add fund profile',
  'add startup profile',
  'add mentor profile',
  'my account',
  'logout',
  'login',
  'apply',
];

function Navbar() {
  return (
    <nav className="flex justify-between">
      <div>
        <span className="bg-indigo-500 rounded-lg text-xs text-white text-center uppercase p-1">
          alpha
        </span>
        <h3 className="text-4xl">buidl.so</h3>
      </div>
      <div className="flex">
        {navItems.map((item) => (
          <div key={item} className="capitalize px-3">
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
