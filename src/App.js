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
      description: (
        <span>
          I am part of <a href="https://labs.planning.nyc.gov">Labs</a>, a division practicing
          open-source, modern web development to deliver a large suite of applications to
          City Planning.
        </span>
      ),
      projects: [
        {
          title: "Zoning Application Portal",
          description: (<div>
                A tool for New York's borough boards, borough presidents, and community boards to submit hearings
                and recommendations.
             </div>),
          photoUrl: "",
        },
        {
          title: "City Environmental Quality Review",
          description: (
            <div>
              A tool for planners and consultants to review environmental impacts of proposed developments across the city.
            </div>
          ),
          photoUrl: "",
        }
      ],
      logoUrl: "dcp-logo.png",
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
      description: (
        <span>
          Part of the Research Center, I delivered a number of progressive, spatially enabled web applications
          to different departments like Parks &amp; Nature, Planning, and Regional Illegal Dumping. 
        </span>
      ),
      projects: [
        {
          title: "Economic Value Atlas",
          description: "A project in collaboration with Brookings",
          photoUrl: ""
        },
        {
          title: "Regional Illegal Dumping",
          description: "",
          photoUrl: "",
        },
        {
          title: "Trail Counts",
          description: "",
          photoUrl: "",
        },
      ],
      logoUrl: "metro-logo.png",
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
      ],
      description: "",
      projects: [],
      logoUrl: "salem-logo.png",
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
      logoUrl: "placemeter-logo.png",
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

            <Grid item>
              <p>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  align="center"
                  style={
                    {
                      padding: '15px',
                    }
                  }
                >
                  Hello! I'm a sustainable urban planning enthusiast and a software engineer.
                  For the past four years I've had the opportunity to work in local
                  government, building software used by both planners and citizens to 
                  improve quality of life in their region.
                </Typography>
              </p>
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
          <p>
            <Typography variant="h5">
              Past and Present Work
            </Typography>
          </p>
          <div>
            {experiences.map((experience) => (<ResumeCard info={experience} />))}
          </div>
        </Grid>
      </Grid>
  );
}

export default App;
