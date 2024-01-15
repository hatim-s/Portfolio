const SkillBadge = () => {
  return (
    <div
      className="flex-grow-0 flex-shrink-0 border-b border-r rounded-2xl border-fuchsia-200 px-4 lg:px-10 py-2 lg:py-5 backdrop-blur-sm"
      style={{
        background:
          "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
      }}
    >
      <h2 className="text-md sm:text-lg lg:text-2xl xl:text-3xl text-white">
        Python
      </h2>
    </div>
  );
};

export default SkillBadge;
