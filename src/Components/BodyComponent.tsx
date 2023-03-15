import Video from "../assets/ufc.mp4";
export const BodyComponent = () => {
  return (
    <main>
      <video width="50%" controls autoPlay muted>
        <source src={Video} />
      </video>
      <div id="content">
        The Ultimate Fighting Championship (UFC) is a mixed martial arts (MMA)
        organization that hosts events featuring professional fighters from
        around the world. The sport combines striking and grappling techniques
        from various martial arts disciplines, and has grown in popularity in
        recent years due to its exciting, high-intensity fights and skilled
        athletes.
      </div>
    </main>
  );
};
