import style from 'styled-components';

export const HomeWrapper = style.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;  
`

export const HomeLeft = style.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img{
      width: 625px;
      height: 270px;
  }
`

export const HomeRight = style.div`
  width: 280px;
  float: right;
`
// Topic
export const TopicWrapper = style.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = style.div`
   float:left;
   height: 32px;
   line-height: 32px;
   background: #f7f7f7;
   padding-right:10px;
   margin-bottom: 18px;
   margin-left: 18px;
   font-size: 14px;
   color:#000;
   border: 1px solid #dcdcdc;
   border-radius: 4px;
   .topic-pic{
     width: 32px;
     height: 32px;
     display: block;
     float: left;
     margin-right: 10px;
   }
`
// List 
export const ListItem = style.div`
  padding: 20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 125px;
    height: 100px;
    float: right;
    dispaly:block;
    border-radius: 10px;
  }

`
export const ListInfo = style.div`
  width: 500px;
  float: left
  .title {
    line-height: 27px;
    font-size:18px;
    font-widght: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-sie: 13px;
    color: #999;
  }
`

export const LoadMore = style.div`
   width: 100%;
   height: 40px;
   margin: 30px 0;
   background: #a5a5a5;
   line-height: 40px;
   text-align: center;
   border-radius: 20px;
   color: #fff;
   cursor: pointer;
`
// RecommedItem 
export const RecommedWrapper = style.div`
   margin: 30px 0;
   width: 280px;

`

export const RecommedItem = style.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

// Writer
export const WriterWrapper = style.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    height: 300px;
    border-radius: 3px;
    line-height: 300px;
    text-align: center
`

// 回到顶部 
export const BackTop = style.div`
   position: fixed;
   right:100px;
   bottom: 100px;
   width: 60px;
   height: 60px;
   text-align:center;
   line-height: 60px;
   border: 1px solid #ccc;
   font-size: 14px;
`
