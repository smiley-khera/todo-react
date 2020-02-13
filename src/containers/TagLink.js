import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/menu'
import TagList from '../components/TagList'

const mapStateToProps = state => ({
    tags: state.tags
});
const mapDispatchToProps = dispatch => ({
    setVisibilityFilter: item => dispatch(setVisibilityFilter(item)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList)