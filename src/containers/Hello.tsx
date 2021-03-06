import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actions from '../actions';
import Hello from '../Components/Hello';
import { StoreState } from '../types/index';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel, 
        name: languageName,
    }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hello);