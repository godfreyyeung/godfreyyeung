import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { flexbox } from '@material-ui/system';
import ResumeCard from './ResumeCard.js';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));
 
function App() {
  const classes = useStyles();

  const experiences = [
    {
      role: "Software Engineer",
      company: "NYC Department of City Planning",
      division: "Planning Labs",
      city: "New York",
      state: "New York",
      startDate: "May 2019",
      endDate: "Present",
      achievements: [
        "Collaborated in a close-knit, agile team, engaging in pair programming, code reviews, and teaching",
        "Built complex, model-driven end-to-end features using Ember, React, Nest, Express, and Ruby on Rails",
        "Wrote extensive acceptance, integration and unit tests with endpoint stubbing and database mocking",
        "Pioneered an end-to-end file-upload feature using Ember, NestJS and the Microsoft Dynamics Web API",
      ],
      description: "",
      projects: [
        "Zoning Application Portal",
        "City Environmental Quality Review",
      ],
      logoUrl: "",
    },
    {
      role: "Geospatial Developer",
      company: "Oregon Metro",
      division: "Research Center",
      city: "Portland",
      state: "Oregon",
      startDate: "Feb 2017",
      endDate: "May 2019",
      achievements: [
        "",
      ],
      description: "",
      projects: [
        "Economic Value Atlas",
        "Regional Illegal Dumping",
        "Trail Counts",
      ],
      logoUrl: "",
    },
    {
      role: "IT GIS Intern",
      company: "City of Salem",
      division: "IT",
      city: "Salem",
      state: "Oregon",
      startDate: "Feb 2017",
      endDate: "May 2019",
      achievements: [
        "",
        "",
        "",
        "",
      ],
      description: "",
      projects: [],
      logoUrl: "",
    },
    {
      role: "Software Engineering Intern",
      company: "Placemeter",
      division: "",
      city: "New York",
      state: "New York",
      startDate: "June 2015",
      endDate: "September 2015",
      achievements: [
        "",
        "",
        "",
        "",
      ],
      description: "",
      projects: [],
      logoUrl: "",
    },
  ]

  return (
      <Grid
        container
        className="root"
        justify="space-between"
      >
        <Grid
          container
          item
          direction="column"
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={4}
        >
            <Grid
              item
            >
            </Grid>
            <Grid
              item
              style={
                {
                  padding: "50px 0 0 0"
                }
              }
            >
              <Typography variant="h5">
                Godfrey Yeung
              </Typography>
            </Grid>
            <Grid
              item
            >
              <Typography variant="subtitle1">
                <Link href="https://github.com/godfreyyeung">
                  GitHub
                </Link>
                &nbsp;|&nbsp;
                <Link href="https://www.linkedin.com/in/godfreyyeung">
                  LinkedIn
                </Link> 
                &nbsp;|&nbsp;
                <Link href="https://medium.com/@godfreyyeung">
                  Medium
                </Link>
              </Typography>
            </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          justify="flex-start"
          direction="column"
          container
          style={
            {
              padding: '30px 20px',
            }
          }
        >
        <Typography variant="h5">
          Skills
        </Typography>
        <p>
          <Typography variant="overline">
            Languages: JavaScript, Python, HTML, (S)CSS, C/C++ <br />
            Frameworks: EmberJS, NestJS, React, AngularJS, VueJS, Rails <br />
            Visualization: D3, Leaflet, ArcGIS JS API, Mapbox, Carto, Google Maps API <br />
            Tools: Git, Docker, Heroku, Jupyter Notebooks
          </Typography>
        </p>
          <Typography variant="h5">
            Experience
          </Typography>
         <div>
          {experiences.map((experience) => (<ResumeCard info={experience} />))}
         </div> 
        </Grid>
      </Grid>
  );
}

export default App;
