import React from 'react';

function Event() {
  return (
    <section className="w-9/12">
      <h2 className=" text-4xl pb-6">Pitch to</h2>
      <h3 className="text-6xl font-semibold">CoinDCX</h3>
      <p className="py-6 text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also.
      </p>
      <p className="lg:pl-16">
        <span></span> 26th July - 10th August
      </p>
      <button className="bg-[#407BFF] hover:bg-[#0d58fb] text-white font-bold py-2 my-8 px-16 rounded-lg">
        Apply Now
      </button>
    </section>
  );
}

export default Event;
