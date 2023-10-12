import React from 'react';

const plans = [
  {
    title: 'Standard plan',
    price: '49',
    teamMembers: '2 team members',
    storage: '20GB Cloud storage',
    integration: 'Integration help',
    features: ['Sketch Files'],
  },
  // Add more plan objects here
  {
    title: 'Premium plan',
    price: '99',
    teamMembers: '5 team members',
    storage: '50GB Cloud storage',
    integration: 'Advanced Integration help',
    features: ['Sketch Files', 'Advanced Features'],
  },
  // {
  //   title: 'Pro plan',
  //   price: '$149',
  //   teamMembers: '10 team members',
  //   storage: '100GB Cloud storage',
  //   integration: 'Full Integration Support',
  //   features: ['Sketch Files', 'Advanced Features', 'Priority Support'],
  // },
];

const Page = () => {
  return (
    <div className='p-4 justify-center items-center flex flex-row space-x-5 flex-wrap sm:space-x-4'>
      {plans.map((plan, index) => (
        <div key={index} className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow  sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.title}</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3 items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{plan.teamMembers}</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{plan.storage}</span>
            </li>
            <li className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{plan.integration}</span>
            </li>
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-white bg-gtahidiPurple hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
