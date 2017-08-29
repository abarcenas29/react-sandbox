import { fromJS } from 'immutable'

import { DEFAULT_ACTION } from './constants'

const initialState = fromJS({
  test: 'You can see me'
})

function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state.set(payload)
    default:
      return state
  }
}

export default reducer
