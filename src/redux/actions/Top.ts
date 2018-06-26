import {Action, Dispatch} from 'redux';
import { ActionTypes } from '../../constants/ActionTypes';
import { IBlog } from '../../interfaces/IBlog';

export interface IGetLatestBlogsRequest extends Action {
    type: ActionTypes.GET_LATEST_BLOGS_REQUEST
}

export interface IGetLatestBlogsSuccess extends Action {
    payload: {
        latestBlogs: IBlog[]
    },
    type: ActionTypes.GET_LATEST_BLOGS_SUCCESS
}

const getLatestBlogsRequest = (): IGetLatestBlogsRequest => ({
    type: ActionTypes.GET_LATEST_BLOGS_REQUEST,
})

const getLatestBlogsSuccess = (blogs: IBlog[]): IGetLatestBlogsSuccess => ({
    payload: {
        latestBlogs: blogs
    },
    type: ActionTypes.GET_LATEST_BLOGS_SUCCESS,
})

export function getLatestBlogs() {
    return async (dispatch: Dispatch) => {
        dispatch(getLatestBlogsRequest());
        const latestBlogs: IBlog[] = [
            {
                content: "content",
                id: "1",
                name: "test"
            }
        ];
        dispatch(getLatestBlogsSuccess(latestBlogs));
    };
}
