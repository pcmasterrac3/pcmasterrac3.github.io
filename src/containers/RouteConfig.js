import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainBlogPage from '../components/Blog'
import SingleArticle from '../components/SingleArticle'

export default function() {
	return(
		<Fragment>
			<Router>
				<Route exact path="/">
					<MainBlogPage />
				</Route>
				<Route path="/:articleId"
					   render={props => {
						  return <SingleArticle {...props} />
					   }}>
				</Route>
			</Router>
		</Fragment>
	)
}