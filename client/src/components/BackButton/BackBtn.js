import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import styled from "styled-components";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <BackButton onClick={() => navigate(-1)}>
      <IoArrowBack style={{ fontSize: "45px" }} />
      Go Back
    </BackButton>
  );
};

const BackButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
  width: 150px;
  gap: 10px;
  transition: 300ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;
export default BackBtn;
