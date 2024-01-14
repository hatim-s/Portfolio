const ProjectCard = () => {
  return (
    <div className="flex m-10 py-10 px-8 border-b rounded-2xl">
      <img className="pr-10" src="https://placehold.co/200" />
      <div>
        <div className="flex justify-between">
          <div className="text-3xl">Company</div>
          <div className="text-5xl">02</div>
        </div>
        <p>
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
