import styled from "styled-components";

export const Content = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--blackCard);
  }
`
export const ContainerGeolocation = styled.div`
    display: flex;
    align-items: center;

    span {
      color: var(--gray);
      padding-right: .5rem;
    }

    input[type='checkbox'] {
      position: relative;
      width: 35px;
      height: 20px;
      appearance: none;
      background-color: var(--gray);
      outline: none;
      border-radius: 20px;
      transition: .5s;
      cursor: pointer;
    }

    input:checked[type='checkbox'] {
      background-color: var(--green);
    }

    input[type='checkbox']:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      top: 0;
      left: 0;
      background-color: #fff;
      transform:  scale(1.1);
      transition: .5s;
      box-shadow: 0 2px 5px rgba(0,0,0,.2);
    }

    input:checked[type='checkbox']:before{
      left: 15px;
    }
`