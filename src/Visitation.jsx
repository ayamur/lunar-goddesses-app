const Visitation = (props) => {
  console.log(props, 'visitation')
  return (
    <div>
      {props.goddessName} showed during phase: {props.visitation.phase} with an intensity of: {props.visitation.intensity}.
    </div>
  );
}

export default Visitation;