import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';

import { changeNewsStandSize } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import NewsStandSize from '../enums/newsStandSize';
import toggleSelectSize from '../enums/toggleSelectSize';
import { IAppState } from '../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  newsStandSize: state.options.newsStandSize
})

const mapDispatchToProps= (dispatch: Dispatch) => ({
  changeLayout: (size: NewsStandSize) => dispatch(changeNewsStandSize(size))
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>
}

interface IProps {
  changeLayout: (size: NewsStandSize) => void;
}

interface ILocalState {
  items: Array<{name: string, value: NewsStandSize, selected: boolean}>
}

const initialState = ({items= [{
  name: 'Cozy',
  selected: true,
  value: NewsStandSize.COZY,
}, {
  name: 'Compact',
  selected: false,
  value: NewsStandSize.COMPACT,
}, {
  name: 'Image free',
  selected: false,
  value: NewsStandSize.IMAGE_FREE,
}
]}: ILocalState) => ({
  items
});

const stateHandlers = {
  onToggle: ({items}: ILocalState, {changeLayout}: IProps) => (name: string, value: NewsStandSize) => {
    changeLayout(value);
    return {
      items: items.map(x => {
        let selected = false;
        if(x.value === value) {
          selected = true;
        }
        return Object.assign({}, x , {
          selected
        })
      })
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    label: 'Change Layout',
    size: toggleSelectSize.SMALL
  })
)(ToggleSelect);
