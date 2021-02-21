import React, { ReactDom, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';

const CardHeader = (props) => {
    return (
        <Grid
            container
            onClick={props.onClick}
            style={
                {
                    cursor: 'pointer',
                }
            }
        >
            <Grid
                container
                item
            >   
                <Grid
                    container
                    item
                    xs={2}
                    lg={1}
                    justify="center"
                    alignItems="center"
                >
                    <Grid
                        item
                    >
                        <img
                            src={props.info.logoUrl}
                            alt={"Logo of " + props.info.company}
                            style={
                                {
                                    maxWidth: '50px',
                                    'margin': '0 10px 10px 0'
                                }
                            }
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={10}
                    lg={11}
                >
                    <Grid
                        container
                        item
                        justify="space-between"
                    >
                        <Grid item>
                            <Typography variant="h5">
                                {props.info.company}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2"> {props.info.startDate} - {props.info.endDate} </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        justify="space-between"
                    >
                        <Grid item>
                            <Typography variant="overline">
                                {props.info.role}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">{props.info.city}, {props.info.state}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ProjectSection = (props) => {
    let projectTitle;

    if (props.project.link) {
        projectTitle = (
            <Typography
                variant="overline"
            >
                <a
                    href={props.project.link}
                    style={
                        {
                            color: "inherit",
                            textDecoration: "none",
                        }
                    }
                >
                    {props.project.title}&nbsp;
                    <LaunchIcon
                        style={
                            {
                                fontSize: "16px",
                                marginBottom: "-2px",
                            }
                        }
                        color="primary"
                    />
                </a>
            </Typography>
        )
    } else {
        projectTitle = (
            <Typography
                variant="overline"
            >
                {props.project.title}
            </Typography>
        )
    }

    return (
        <Grid
            item
            xs={12}
            key={props.project.title}
            style={
                {
                    marginBottom: "24px",
                }
            }
        >
                {projectTitle}
                <br />
                {props.project.description}
        </Grid>
    )
}

function ProjectsList (props) {
    if (props.projects.length > 0) {
        return (
            <Grid item>
                <Typography
                    variant="h6"
                    style={
                        {
                            padding: "16px 0 4px 0",
                        }
                    }
                >
                    Notable Projects
                </Typography>

                {props.projects.map((project, idx) => ( <ProjectSection project={project} key={idx} />))}
            </Grid>            
        )
    }

    return null;
}

class ResumeCard extends React.Component {
    state = {
        showBack: false,
    }

    flipOver = () => {
        this.setState(prevState => ({
            showBack: !prevState.showBack,
        }));
    }

    cardContent = (showBack) => {
        if (showBack) {
            return (
                <Grid
                    container
                    item
                >
                    <Grid
                        container
                        item
                    >
                        <Typography>
                            {this.props.info.description}
                        </Typography>

                        <ProjectsList
                            projects={this.props.info.projects}
                        />
                    </Grid>
                </Grid>
            )
        }
    }

    cardStyles = () => {
        let cardStyles = "resumeCard";
        if (this.state.showBack) {
            cardStyles += " hoveredCard";
        }
        return cardStyles;
    }

    render() {
        return (
            <Grid
                item
            >
                <Card
                    style={
                        {
                            padding: '15px',
                            minHeight: '50px',
                            borderRadius: '0',
                            margin: '0 0 5px 0',
                            boxShadow: 'none',
                            backgroundColor: "rgb(253,253,253)",
                        }
                    }
                    className={this.cardStyles()}
                >
                    <CardHeader
                        info={this.props.info}
                        onClick={this.flipOver}
                    />
                    {this.cardContent(this.state.showBack)}
                </Card>
            </Grid>
        );
    } 
}

export default ResumeCard;