import styled from 'styled-components';

export const BackTo = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    color: #2B0174;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  span {
    color: #2B0174;
    font-weight: 900;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const TableContainer = styled.div`
  padding: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  background-color: #ffffff;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  th {
    padding: 1rem;

    :first-child {
      text-align: start;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    border-top: 1px solid #E9E5F1;
    border-bottom: 1px solid #E9E5F1;
    :nth-child(odd) {
      background-color: #E9E5F1;
    }
    td {
      text-align: center;
    }
  }

  img {
    width: 100px;
    margin-right: 0.5rem;

    @media (max-width: 360px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

export const ProductQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    margin: 0 0.5rem 0 0.5rem;
    text-align: center;
  }

  svg {
    margin-left: 0;
  }
`;

export const TotalPrice = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;

  span {
    :last-child {
      font-weight: bold;
      margin-left: 0.2rem;
    }
  }
`;

export const NotFound = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 2.5rem;
  }

  svg {
    font-size: 3rem;
    margin-left: 1rem
  }
`;
