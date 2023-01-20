/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Reward() {
  return (
    <section className="grid grid-cols-3 justify-between items-center">
      <div className="grid justify-items-center space-y-8">
        <h3 className=" text-center w-9/12 text-gray-400 text-2xl font-semibold">
          Winner stands a chance to pitch and win upto
        </h3>
        <h3 className="text-7xl font-semibold">$1MM</h3>
        <h3 className="text-center w-7/12 text-gray-400 text-2xl font-semibold">
          in funding from
        </h3>
        <img src="/coindcx.png" alt="" />
      </div>
      <img className="mx-auto" src="/fadeline.svg" alt="" />

      <div className="grid justify-items-center space-y-8">
        <h3 className="text-center w-7/12 text-gray-400 text-2xl font-semibold">
          upto
        </h3>
        <h3 className="text-7xl font-semibold">$25000</h3>
        <h3 className="text-center text-gray-400 text-2xl font-semibold">
          grants and mentorship to select founders via BeliefDAO
        </h3>
      </div>
    </section>
  );
}

export default Reward;
