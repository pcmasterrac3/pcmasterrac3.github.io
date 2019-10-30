import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Markdown from './Markdown'
import Header from './Header'
import Footer from './Footer'

export default function(props) {
	return(
		<>
			<Header />
			<Container maxWidth="lg">
				<Grid container spacing={5} className="mainGrid">
					<Grid item xs={12} md={8}>
						<Markdown>
							{props.location.state.content}
						</Markdown>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	)
}