import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IProps, IState } from './types'
import {
	selectSubreddit,
	fetchPostsIfNeeded,
	invalidateSubreddit
} from '../../app/reddit/actions'
import Picker from './picker'
import Posts from './posts'

class AsyncApp extends Component<IProps, IState, any> {
	constructor(props:any) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRefreshClick = this.handleRefreshClick.bind(this)
	}

	componentDidMount() {
		const { dispatch, selectedSubreddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	componentDidUpdate(prevProps:any) {
		if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
			const { dispatch, selectedSubreddit } = this.props
			dispatch(fetchPostsIfNeeded(selectedSubreddit))
		}
	}

	handleChange(nextSubreddit:any) {
		this.props.dispatch(selectSubreddit(nextSubreddit))
		this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
	}

	handleRefreshClick(e:any) {
		e.preventDefault()

		const { dispatch, selectedSubreddit } = this.props
		dispatch(invalidateSubreddit(selectedSubreddit))
		dispatch(fetchPostsIfNeeded(selectedSubreddit))
	}

	render() {
		const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
		return (
			<div>
				<Picker
					value={selectedSubreddit}
					onChange={this.handleChange}
					options={['reactjs', 'frontend']}
				/>
				<p>
					{lastUpdated &&
						<span>
							Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
							{' '}
						</span>}
					{!isFetching &&
						<button onClick={this.handleRefreshClick}>
							Refresh
						</button>}
				</p>
				{isFetching && posts.length === 0 && <h2>Loading...</h2>}
				{!isFetching && posts.length === 0 && <h2>Empty.</h2>}
				{posts.length > 0 &&
					<div style={{ opacity: isFetching ? 0.5 : 1 }}>
						<Posts  posts={posts} onChange={() => {

						}} />
					</div>}
			</div>
		)
	}
}

function mapStateToProps(state:any) {
	const { selectedSubreddit, postsBySubreddit } = state
	const {
		isFetching,
		lastUpdated = '',
		items: posts
	} = postsBySubreddit[selectedSubreddit] || {
		isFetching: true,
		items: []
	}

	return {
		selectedSubreddit,
		posts,
		isFetching,
		lastUpdated
	}
}

export default connect(mapStateToProps)(AsyncApp as any)