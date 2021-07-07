import styled from "styled-components";

export const ContainerCardItem = styled.div`
  max-width: 320px;
  max-height: 320px;
  width: 100%; 
  height: 100%;
  border: 1px solid var(--border);
  border-radius: 6px;
  background-color: transparent;
`

export const HeaderCardItem = styled.div`
  border-bottom: 1px solid var(--border);
  
  p {
    padding: 1rem 1.5rem ;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--gray);
  }
`

export const MainCardItem = styled.div`
  border-bottom: 1px solid var(--border);
  padding: 1rem 1.5rem ;

  div.descriptionAndImage {
    display: flex;
    margin: 1rem 0;

    div.description {
      flex: 1;
      display: flex;
      flex-direction: column;

      p {
        font-size: 1.125rem;
        color: var(--blackCard);
        font-weight: 400;
      }

      span {
        font-size: 0.875rem;
        color: var(--green);
        margin-top: 1rem;
      }
    }

    div.imgContainer {
      width: 100px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;

      img {
        width: 38px;
        height: 38px;
      }
    }
  }

  div.serviceInfo {
    display: flex;
    justify-content: space-between;

    div.information {
      display: flex;

      p {
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--blackCard);
        margin-right: 0.5rem;
      }

      span {
        max-width: 50px;
        font-size: 0.6rem;
        text-transform: uppercase;
        color: var(--gray);
      }
    }

    div.buttonCta {
      display: flex;
      justify-content: flex-end;

      button {
        background-color: var(--green);
        border: 1px solid var(--green);
        border-radius: 5px;
        color: var(--white);
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0.5rem 1rem;
        transition: all 0.2s;

        &:hover {
          background-color: transparent;
          color: var(--green);
          box-shadow: 0px 0px 5px 0px rgba(85,102,92, 0.3);
        }
      }
    }
  }
`

export const FooterCardItem = styled.p`
   /* border-bottom: 1px solid var(--border); */
  
    padding: 1rem 1.5rem ;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--gray);
`