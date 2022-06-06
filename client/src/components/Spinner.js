import styled, { keyframes } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

const Spinner = () => {
  return (
    <InfiniteRotate>
      <AiOutlineLoading style={{ color: "white" }} />
    </InfiniteRotate>
  );
};
const rotate = keyframes`
to{
  transform: rotate(360deg);
}`;

const InfiniteRotate = styled.div`
  animation: ${rotate} 4s linear infinite;
`;

export default Spinner;
