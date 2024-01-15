const ExperienceCard = () => {
  return (
    <div
      className="exp-card flex-1 p-4 xl:p-10 flex flex-col lg:flex-row gap-4 xl:gap-10 rounded-2xl border-l border-t border-fuchsia-200"
      style={{
        background:
          "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
      }}
    >
      <img
        className="sm:pb-0 mx-auto max-w-24 xl:max-w-max"
        src="https://placehold.co/150"
      />
      <div>
        <div className="flex justify-between items-end">
          <h2
            className="text-3xl xl:text-5xl"
            style={{
              color: "#E45FFD",
            }}
          >
            Company
          </h2>
          <h2 className="text-4xl xl:text-6xl text-white">02</h2>
        </div>
        <p
          className="pt-4 xl:text-2xl"
          style={{
            color: "#F5C2FF",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          quo qui assumenda consequuntur debitis adipisci at reiciendis mollitia
          repudiandae voluptatem saepe aut est enim sunt voluptate possimus
          dolore consequatur optio, perferendis expedita non tenetur facilis rem
          nostrum. Tenetur, facilis aperiam omnis corporis incidunt architecto,
          voluptas, dolorum dolorem minima natus fugit?
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;

/* 
text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-violet-950 }
*/
