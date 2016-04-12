function QuarterEllipse(props) {
  let size = props.size;
  let ratio = props.ratio;
  let rx = size, ry = size;
  if (ratio > 1)
    ry = ry / ratio;
  else
    rx = rx * ratio;
  size += props.unit;
  rx += props.unit;
  ry += props.unit;
  return (
    <svg width={size} height={size}>
      <ellipse cx={size} cy={size} rx={rx} ry={ry} fill="white" stroke="black" strokeWidth="1" />
    </svg>
  );
}
export default QuarterEllipse;
