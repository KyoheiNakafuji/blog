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
                description: "",
                id: "1",
                img: "",
                title: "test"
            },
            {
                content: "content",
                description: "",
                id: "2",
                img: "",
                title: "test2"
            },
            {
                content: "content",
                description: "",
                id: "3",
                img: "",
                title: "test2"
            },
            {
                content: "content",
                description: "",
                id: "4",
                img: "",
                title: "test2"
            },
            {
                content: "content",
                description: "",
                id: "5",
                img: "",
                title: "test2"
            },
            {
                content: "content",
                description: "",
                id: "6",
                img: "",
                title: "test2"
            },
            {
                content: "content",
                description: "",
                id: "7",
                img: "",
                title: "test2"
            },
            {
                content: "content",
                description: "",
                id: "8",
                img: "",
                title: "test2"
            },
        ];
        dispatch(getLatestBlogsSuccess(latestBlogs));
    };
}
