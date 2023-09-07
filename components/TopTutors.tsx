import React from "react";

const TopTutors = () => {
  const tutors = [
    {
      name: "Matt Gibson",
      plans: 800,
      img: "https://picsum.photos/500/300?random=1",
    },
    {
      name: "Matt Gibson",
      plans: 800,
      img: "https://picsum.photos/500/300?random=2",
    },
    {
      name: "Matt Gibson",
      plans: 800,
      img: "https://picsum.photos/500/300?random=3",
    },
    {
      name: "Matt Gibson",
      plans: 800,
      img: "https://picsum.photos/500/300?random=4",
    },
    {
      name: "Matt Gibson",
      plans: 800,
      img: "https://picsum.photos/500/300?random=5",
    },
  ];
  return (
    <div className="w-full sm:w-1/3 rounded bg-white p-[3%]">
      <div className="flex items-center justify-between">
        <p className="text-gtahidiDarkBlue">Top Tutors</p>
        <p className="text-gtahidiPink">View All</p>
      </div>
      {tutors.map((tutor, i) => (
        <div key={i} className="flex mt-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tutor.img}
            alt=""
            className="w-10 aspect-square rounded-full mr-3"
          />
          <div className="text-sm">
            <p className="text-gtahidiDarkBlue">{tutor.name}</p>
            <p className="text-gtahidiPink">{tutor.plans} plans</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTutors;
