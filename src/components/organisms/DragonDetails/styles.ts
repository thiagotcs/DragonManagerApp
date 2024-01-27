import styled from 'styled-components'

export const ItemDetails = styled.div`
  background-color: #fff;

  .title {
    background: #f8f9fa;
    padding: 24px;
    text-align: center;

    @media only screen and (max-width: 768px) {
      padding: 16px;
    }
  }
  .Container {
    margin: 24px 24px 40px;
    border-radius: 10px;
    border: 1px solid #cbd5e0;

    @media only screen and (max-width: 768px) {
      margin: 16px 16px 20px;
    }

    .description {
      display: flex;
      padding: 24px;
      justify-content: space-between;
      border-bottom: 1px solid #cbd5e0;
      color: #323c32;
    }
    .date-create {
      display: flex;
      padding: 24px;
      justify-content: space-between;
      color: #323c32;

      @media only screen and (max-width: 768px) {
        padding: 16px;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`
