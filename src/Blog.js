import React, {Component, Fragment} from "react"

import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import TablePagination from "@material-ui/core/TablePagination"
import Markdown from "./Markdown"
import post1 from './blog-post.1.md'
import post2 from './blog-post.2.md'
import post3 from './blog-post.3.md'

console.log(post1)

const sections = [
	'Home',
	'About',
	'Source code'
]

const featuredPosts = [
	{
	  title: 'Featured post',
	  date: 'Nov 12',
	  description:
		'This is a wider card with supporting text below as a natural lead-in to additional content.',
	},
	{
	  title: 'Post title',
	  date: 'Nov 11',
	  description:
		'This is a wider card with supporting text below as a natural lead-in to additional content.',
	},
];

const posts = [post1, post2, post3]  

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

class Blog extends Component {
	constructor(props) {
		super(props)
		this.posts = [post1, post2, post3]
		console.log(this.posts)
	}
  render() {
    return (
      <Fragment>
        <Toolbar className="mainToolbar toolbarDivider">
        <Container maxWidth="lg" className="mainToolbarInner">
          <Button size="small" color="secondary">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="white"
            align="center"
            noWrap
            className="toolbarTitle"
          >
            PCMASTERRACE
          </Typography>
          <Button variant="outlined" size="small" color="secondary">
            Sign up
          </Button>
          </Container>
        </Toolbar>
		
    <Container maxWidth="lg">
		<main>	
        <Paper className="mainFeaturedPost">
          <div className="overlay" />
          <Grid container>
            <Grid item md={6}>
              <div className="mainFeaturedPostContent">
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  PCMASTERRACE
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
					<br />
					<br />
                  React blog about computer hardware
					<br />
					<br />
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
		<Toolbar component="nav" variant="dense" className="toolbarSecondary toolbar">
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body1"
			  href="#"
			  underline="hover"
              className="toolbarLink"
            >
              {section}
            </Link>
          ))}
        </Toolbar>
		<Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className="card">
                    <div className="cardDetails">
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className="cardMedia"
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
		  <Grid container spacing={5} className="mainGrid">
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
				    Blog Posts
			    </Typography>
			    <Divider />
			    {posts.map(post => (
				    <Markdown className="markdown" key={post1.substring(0, 40)}>
					    {post}
				    </Markdown>
				  ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className="sidebarAboutBox">
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
              amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </Typography>
          </Paper>
        </Grid>

		  </Grid>
      
      
		</main>
      </Container>
      <footer >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          PCMASTERRACE
        </Typography>
        <Copyright />
      </Container>
    </footer>
    </Fragment>
    )
  }
}

export default Blog
