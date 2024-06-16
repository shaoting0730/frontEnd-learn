import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style.js';
import Topic from './components/Topic';
import List from './components/List';
import Recommed from './components/Recommed';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from './style';
class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src='https://upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommed />
                    <Writer />
                </HomeRight>
                {
                   this.props.showScroll
                   ?
                   <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
                   : 
                   null
                }
            </HomeWrapper>
        )
    }

    handleScrollTop() {
       window.scrollTo(0,0);
    }

    componentDidMount (){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollToShow)
    }
    
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollToShow)
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.home.get('showScroll'),
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollToShow(){
        if(document.documentElement.scrollTop > 300){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }

})
export default connect(mapStateToProps, mapDispatch)(Home);