import Visitation from "./Visitation";

const Goddess = (props) => {
  console.log(props, 'phase')
  return (
    <>
      <div>
        <h2>
          {props.goddess.name}
        </h2>
      </div>
      <div>
        <h3>
          {props.goddess.about}
        </h3>
      </div>
      {props.goddess.visitations.map((visitation, idx) =>
        <Visitation visitation={visitation}
          goddessName={props.goddess?.name} key={idx}/>
      )}
    </>
  )
}

export default Goddess;