import React from 'react';

const faqs = [
  {
    ques: 'I have an idea but not implemented it yet, can I still apply',
    ans: 'Yes. It’s recommended that you have a core team assembled already that is able to carry out your idea and a clear articulation on your path forward prior to applying.Remember that we are looking to fund the best crypto projects and founders in India, and companies will be evaluated against that bar.',
  },
  {
    ques: 'Can I attend the event in a virtual capacity?',
    ans: 'If your project is selected to pitch, we will require your attendance in person. The pitch day will be held in Bangalore on August 26th 2022.',
  },
  {
    ques: 'How much funding can I receive?',
    ans: ' We will provide up to $1M in funding. Note this is the maximum possible, individual investments may be less and will be decided on a case by case basis.',
  },
  {
    ques: 'What industry/ sector are the startups from?',
    ans: 'Web3 Startups from all sectors and industries are encouraged to join.',
  },
  {
    ques: 'Do I have to build on a specific chain to be eligible?',
    ans: 'No, we support builders building on all chains, with brownie points for projects with inter-chain operability.',
  },
  {
    ques: 'How can I improve my chances of securing a grant?',
    ans: "Consistent weekly updates on your buidl.so startup profile go a long way in showing a founder's perseverance. Proof of progress is at the centre of our evaluation process.",
  },
];

function Faqs() {
  return (
    <section className="w-9/12 pt-16">
      <h2 className="text-3xl font-normal">Frequently Asked Questions</h2>
      {faqs.map((items, index) => (
        <div key={index} className="py-3 font-medium">
          <h3>Q. {items.ques}</h3>
          <h3>{items.ans}</h3>
        </div>
      ))}

      <button className="bg-[#407BFF] hover:bg-[#0d58fb] text-white font-bold my-12 py-2 px-16 rounded-lg">
        Apply Now
      </button>
    </section>
  );
}

export default Faqs;
