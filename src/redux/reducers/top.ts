import { ActionTypes } from '../../constants/ActionTypes'
import { IBlog } from '../../interfaces/IBlog'
import { IGetLatestBlogsRequest, IGetLatestBlogsSuccess } from '../actions/Top'

export type TopActions = IGetLatestBlogsRequest | IGetLatestBlogsSuccess;

export interface ITopState {
    latestBlogs: IBlog[]
}

const initialState: ITopState = {
    latestBlogs: []
};

export default (state = initialState, action: TopActions) => {
    switch (action.type) {
        case ActionTypes.GET_LATEST_BLOGS_REQUEST:
            return state;
        case ActionTypes.GET_LATEST_BLOGS_SUCCESS:
            return {
                ...state,
                latestBlogs: action.payload.latestBlogs
            };
        default:
            return state;
    }
}