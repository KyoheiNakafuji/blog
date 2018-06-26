import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Top from '../components/Top/Top';
import * as actions from '../redux/actions/Top';
import { IReduxState, ReduxAction } from '../redux/CreateStore';

const mapStateToProps = (state: IReduxState, ownProps = {}) => ({
  latestBlogs: state.top.latestBlogs
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IReduxState, void, ReduxAction>) => ({
  getLatestBlogs () {
    dispatch (actions.getLatestBlogs())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
