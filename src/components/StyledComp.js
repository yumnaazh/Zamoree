import styled from "styled-components";

export const TestiStyle = styled.div`
  display: grid;
  grid-template-columns: repeat (auto-fit, minmax (280px, auto));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 20px;

  .box {
    padding: 20px;
    border-radius: 0.5rem;
    text-align: center;
    background: #788ba9;
    P {
      font-size: 0.938rem;
    }
    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0.5rem 0 0.5rem;
    }
    button {
      border-radius: 0.5rem;
      border-style: none;
      padding: 5px 10px 5px 10px;
    }
  }
`;
