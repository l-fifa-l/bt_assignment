/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Banner() {
  return (
    <section className="pt-8">
      <h2 className="h-3 text-4xl bold pb-6">Exa Protocol</h2>
      <br />
      <hr />
      <img className="flex mx-auto" src="/banner.png" alt="" />
    </section>
  );
}

export default Banner;
