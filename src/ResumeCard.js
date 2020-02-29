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
                <div>
                    <CardHeader
                        info={this.props.info}
                        onClick={this.flipOver}
                    />
                    <div>
                        <ul>
                            {this.props.info.achievements.map(achievement => ( <li>{achievement}</li> )) }
                        </ul>
                    </div>
                    <Typography variant="h6">
                        Projects
                    </Typography>
                    <ul>
                        {this.props.info.projects.map(achievement => ( <li>{achievement}</li> )) }
                    </ul>
                    
                </div>
            )
        } else {
            return (
                <div>
                    <CardHeader
                        info={this.props.info}
                        onClick={this.flipOver}
                    />
                </div>
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
                            'margin-bottom': '10px',
                        }
                    }
                >
                    {this.cardContent(this.state.showBack)}
                </Card>
            </Grid>
        );
    } 
}

export default ResumeCard;