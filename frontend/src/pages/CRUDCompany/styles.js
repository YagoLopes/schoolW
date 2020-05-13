import styled from 'styled-components';
const Styles = styled.div`
.panel{
  .btn-circle {
    
    width: 130px;
    text-align: center;
    padding: 6px 0;
    border-radius: 15px;

    @media only screen and (max-device-width: 900px) {
     
      margin-top: 10px;
      }
}
  table{
    .btn-circle {
      width: 30px;
      height: 30px;
      text-align: center;
      padding: 6px 0;
      font-size: 12px;
      line-height: 1.428571429;
      border-radius: 15px;

      .btn-lg {
        width: 50px;
        height: 50px;
        padding: 10px 16px;
        font-size: 18px;
        line-height: 1.33;
        border-radius: 25px;
      }
      .btn-xl {
        width: 70px;
        height: 70px;
        padding: 10px 16px;
        font-size: 24px;
        line-height: 1.33;
        border-radius: 35px;
      }
    }
  }
  .pager {
    cursor: pointer;
  }
`;
export default Styles;
