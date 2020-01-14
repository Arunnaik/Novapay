
const initialState = {
  organization:[]
};
export function home(state = initialState, action) {
    switch (action.type) {
      case 'HOTEL_DATA': {
        const { results } = action;
        return Object.assign({}, state, { hotelList:results });
      }


      case 'ADD_ORGANIZATION':{
        const {organization} =action;
        const moreOrganization =[...state.organization,organization]
        return Object.assign({},state,{organization:moreOrganization});
      }
    
      default:
        return state;
    }
  }