type reduxState = {
  temp: Object
}

export const initialState: reduxState = {
  temp: {},
}
export const UPDATE_DATA = 'UPDATE_DATA' as const

export default (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA: {
      return {
        ...state,
        temp: { ...action.data },
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}
