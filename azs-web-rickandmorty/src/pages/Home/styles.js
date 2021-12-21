import styled from 'styled-components';

export const FilterContent = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  input {
    width: 250px;
    padding: 0.8rem;
    border-color: #4CA986;
    border-radius: 0.5rem;
    margin-left: 1rem;

    &::placeholder {
      color: #bcbcbc;
    }
  }

  @media (max-width: 486px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SectionDivider = styled.div`
  padding: 1rem 0 0 1.5rem;

   span {
    color: #4CA986;
    font-weight: 900;
    font-size: 2.5rem;
   }
`;
