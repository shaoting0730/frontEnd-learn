import style from 'styled-components';

export const DetailWrapper = style.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;  
  padding-bottom: 100px;
`

export const Header = style.div`
  margin: 50px 0 20px 0;
  font-size: 34px;
   line-height: 44px;
   color: #333;
   font-weight: bold;
`

export const Content = style.div`
   color: #2f2f2f;
   text-align:center;
   img {
       width: 700px;
       height: 466px;
   }
   p {
       margin: 25px 0;
       font-size: 16px;
       line-height: 30px;
       color: #2f2f2f
   }
   b {
       font-weight: bold;
   }
`