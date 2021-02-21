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
          title: "Applicant Portal",
          link: "https://applicants.planning.nyc.gov/",
          description: (
            <span>
              The "21st century" tool for submitting land use application to City Planning.
            </span>
          ),
          photoUrl: "",
        },
        {
          title: "Land Use Participation Portal",
          link: "https://zap.planning.nyc.gov/",
          description: (
              <span>
                A tool for New York's borough boards, borough presidents, and community boards to submit hearings
                and recommendations for land use applications as a part of the Uniform Land Use Review Procedure (ULURP).
             </span>),
          photoUrl: "",
        },
        {
          title: "City Environmental Quality Review",
          link: "https://www.ceqr.app/",
          description: (
            <span>
              A tool for planners and consultants to review environmental impacts of proposed developments across the city.
            </span>
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
          link: "http://evatool.oregonmetro.gov/",
          description: (
            <span>
              A tool for exploring economic, demographic and infrastructure indicator data through dynamic maps and D3 graphs.
              Developed in collaboration with the Brookings Institute and Metro's Planning division.
            </span>
          ),
          photoUrl: ""
        },
        {
          title: "Regional Illegal Dumping",
          link: "https://ridpatrol.oregonmetro.gov/report",
          description: (
            <span>
              A mobile-friendly, flexbox application where Metro citizens can report illegally dumped garbage. A mapping and geocoding component helps users
              report the illegal dumping location, or determine if it was already reported by someone else.
            </span>
          ),
          photoUrl: "",
        },
        {
          title: "Trail Counts",
          description: (
            <span>
              I led development for a pair of mobile-friendly tools, one for volunteers and one for administrators, for counting usage types (pedestrian, cyclists, scooter, etc) at trails around the region.
            </span>
          ),
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
      startDate: "July 2016",
      endDate: "Feb 2017",
      achievements: [],
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
      achievements: [], 
      description: "",
      projects: [
        {
          title: 'Real-time pedestrian visualization',
          description: (
            <div>
              A real-time visualization of foot traffic from sensors around Union Square, Manhattan, and Dilworth Park, Philadelphia.
            </div>
          )
        }
      ],
      logoUrl: "placemeter-logo.png",
    },
  ]

  return (
      <Grid
        container
        className="root"
        justify="space-between"
        style={{
          backgroundColor: "rgb(253,253,253)",
        }}
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
            Past and Present Work
          </Typography>
          <div>
            {experiences.map((experience, idx) => (<ResumeCard info={experience} key={idx} />))}
          </div>
        </Grid>
      </Grid>
  );
}

export default App;
