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
                <Grid item>
                    <div
                        style={
                            {
                                width: '50px',
                                height: '75px',
                                'background-color': 'silver',
                                'margin': '0 10px 10px 0'
                            }
                        }>
                    </div>
                </Grid>
                <Grid
                    item
                >
                    <Grid
                        container
                        item
                        justify="space-between"
                        alignItems="baseline"
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
                    <Grid>
                        <Typography variant="overline">
                            {props.info.role}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
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
                        item
                        xs={1}
                    >
                        <div
                            style={
                                {
                                    width: '50px',
                                    height: '50px',
                                    'background-color': 'silver',
                                }
                            }>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={11}
                    >
                        <Typography variant="h6">
                            Contributions
                        </Typography>
                        <div>
                            <ul>
                                {this.props.info.achievements.map(achievement => ( <li>{achievement}</li> )) }
                            </ul>
                        </div>
                        <Typography variant="h6">
                            Notable Projects
                        </Typography>
                        <ul>
                            {this.props.info.projects.map(achievement => ( <li>{achievement}</li> )) }
                        </ul>
                    </Grid>
                </Grid>
            )
        }
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
                            'min-height': '50px',
                            'border-radius': '0',
                            margin: '0 0 5px 0'
                        }
                    }
                    className="not-hovered-resume-card"
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