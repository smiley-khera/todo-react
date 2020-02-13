import { connect } from 'react-redux'
import {addTagRequest} from "../actions/menu";
import AddTag from '../components/AddTag'

const structuredTag = (item) => (
    ({tag: {name: `${item}`}})
);
const mapDispatchToProps = dispatch => ({
    onSubmit: item => dispatch(addTagRequest(structuredTag(item))),
});

export default connect(
    null,
    mapDispatchToProps
)(AddTag)