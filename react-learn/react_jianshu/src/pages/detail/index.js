import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';


class Detail extends Component {
    render() {
        const {title,content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}} />
                
            </DetailWrapper>
        )
    }

    
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
    
    
}

const mapStateToProps = (state) => {
    return {
        title: state.detail.get('title'),
        content: state.detail.get('content'),
    }
}
const mapDispatch = (dispatch) => ({
    getDetail(id){
dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapStateToProps, mapDispatch)(withRouter(Detail));