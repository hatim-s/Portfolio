const ProjectCard = () => {
  return (
    <div
      className="flex m-10 py-10 px-8 border-b rounded-2xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
      }}
    >
      <img className="pr-10" src="https://placehold.co/200" />
      <div>
        <div className="flex justify-between">
          <h2
            className="text-3xl"
            style={{
              color: "#E45FFD",
            }}
          >
            Company
          </h2>
          <h2 className="text-5xl text-white">02</h2>
        </div>
        <p
          className="pt-4"
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

export default ProjectCard;
