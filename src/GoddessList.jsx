import Goddess from "./Goddess";

const GoddessList = (props) => {
  return (
    <>
      {props.goddesses.map((goddess, idx) =>
        <Goddess goddess={goddess} key={idx} />
      )}
    </>
  );
}

export default GoddessList;