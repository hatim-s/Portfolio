const ExperienceCard = () => {
  return (
    <div
      className="flex rounded-2xl border-l border-t p-10 border-fuchsia-200"
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
          <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-violet-950">
            02
          </h2>
        </div>
        <p
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
<div 
    style={{
        width: 542, 
        height: 255, 
        position: 'relative', 
        background: 'linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)', 
        borderRadius: 16, 
        overflow: 'hidden', 
        borderLeft: '1px #E45FFD solid', 
        borderTop: '1px #E45FFD solid', 
        backdropFilter: 'blur(16px)'
}}>
  <div 
    style={{
        left: 162, 
        top: 42, 
        position: 'absolute', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        gap: 16, 
        display: 'inline-flex'
    }}>
    <div style={{color: '#E45FFD', fontSize: 24, fontFamily: 'Clash Display', fontWeight: '600', letterSpacing: 1.20, wordWrap: 'break-word'}}>Sprinkler</div>
    <div style={{width: 361, textAlign: 'justify', color: '#F5C2FF', fontSize: 20, fontFamily: 'Clash Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word'}}>UI design stands for User Interface Design. It is the process of designing the interface of a digital product, such as a website or an app, that users interact with.</div>
  </div>
  <div style={{left: 440, top: 8, position: 'absolute', color: 'rgba(123.95, 73.08, 252.01, 0.20)', fontSize: 64, fontFamily: 'Clash Display', fontWeight: '600', letterSpacing: 3.20, wordWrap: 'break-word'}}>01</div>
</div>
*/
