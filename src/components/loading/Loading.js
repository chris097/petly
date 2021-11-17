import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({color, size}) => {
  return <ClipLoader color={color} loading={true} size={size} />
}

export default Loading;