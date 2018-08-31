import fetch from 'cross-fetch'
import {
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from './types';

export function selectSubreddit(subreddit: any) {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	}
}

export function invalidateSubreddit(subreddit: any) {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	}
}

function requestPosts(subreddit: any) {
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}

function receivePosts(subreddit: any, json: any) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: json.data.children.map((child: any) => child.data),
		receivedAt: Date.now()
	}
}

function fetchPosts(subreddit: any) {
	return (dispatch: any) => {
		dispatch(requestPosts(subreddit))
		return fetch(`https://www.reddit.com/r/${subreddit}.json`)
			.then(response => response.json())
			.then(json => dispatch(receivePosts(subreddit, json)))
	}
}

function shouldFetchPosts(state: any, subreddit: any) {
	const posts = state.postsBySubreddit[subreddit]
	if (!posts) {
		return true
	} else if (posts.isFetching) {
		return false
	} else {
		return posts.didInvalidate
	}
}

export function fetchPostsIfNeeded(subreddit: any) {
	return (dispatch: any, getState: any) => {
		if (shouldFetchPosts(getState(), subreddit)) {
			return dispatch(fetchPosts(subreddit))
		}
	}
}