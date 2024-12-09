import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 51px;
  background: var (--backgound-color-1);
  width: 100%;
  min-height: 100vh;

  .container__logo {
    width: 100%;
    img: {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .container__content {
    display: flex;
    background: var (--backgound-color-2);
    padding: 40px;
    border-radius: 12px;
    max-width: 476px;
    width: 100%;
  }
`;

export default Container;
