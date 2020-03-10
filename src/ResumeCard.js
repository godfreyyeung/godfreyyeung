import React, { ReactDom, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

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
                            <Typography variant="h6">
                                {props.info.company} <Typography variant="caption">({props.info.city}, {props.info.state})</Typography>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2"> {props.info.startDate} - {props.info.endDate} </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                    >
                        <Typography variant="overline">
                            {props.info.role}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const ProjectSection = (props) => {
    return (
        <Grid
            item
            xs={12}
        >
            <Typography variant="overline">
                {props.project.title}
            </Typography>
            <p>
                <Typography
                    variant="overline"
                >
                    {props.project.description}
                </Typography>
            </p>
        </Grid>
    )
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
                        xs={2}
                        lg={1}
                        justify="center"
                    >
                        <Grid
                            item
                        >
                            <div
                                style={
                                    {
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: 'silver',
                                    }
                                }>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        xs={10}
                        lg={11}
                    >
                        <p>
                            <Typography variant="subtitle1">
                                {this.props.info.description}
                            </Typography>
                        </p>
                        <Typography variant="h6">
                            Notable Projects
                        </Typography>
                        {this.props.info.projects.map(project => ( <ProjectSection project={project} />)) }
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