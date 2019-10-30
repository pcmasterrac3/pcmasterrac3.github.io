import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'


function Copyright() {
	return (
		<Typography variant="body2" color="white" align="center">
		{'Copyright © '}
		<Link color="white" href="https://pcmasterrac3.github.io/">
			PCMASTERRACE
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
}

function Footer() {
	return(
		<footer >
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					PCMASTERRACE
				</Typography>
				<Copyright />
			</Container>
    	</footer>
		
	)
}

export default Footer