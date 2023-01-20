/* eslint-disable @next/next/no-img-element */
import React from 'react';

const profiles = [
  {
    name: 'Dharmi Kumbhani',
    photo: '/user1.png',
  },
  {
    name: 'Dharmi Kumbhani',
    photo: '/user2.png',
  },
  {
    name: 'Dharmi Kumbhani',
    photo: '/user3.png',
  },
  {
    name: 'Dharmi Kumbhani',
    photo: '/user4.png',
  },
];

function Mentors() {
  return (
    <section>
      <h2 className="flex justify-center text-2xl font-semibold text-gray-600 p-12">
        Mentoring Sessions
      </h2>
      <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
        {profiles.map((items, index) => (
          <div key={index}>
            <img className="w-full" src={items.photo} alt="" />
            <h4 className=" text-center text-lg font-semibold py-4">
              {items.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mentors;
