import React from 'react';
import axios from 'axios';


export default class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    async componentDidMount() {
        const response = await this.fetchTeams()
        this.setState({teams: response})
    }

    formatTeams(teams_data) {
        console.log(teams_data)
        let teams = []
        teams_data['data']['data']['teams'].forEach(e => {
                console.log(e)
                teams.push(<div><img src={e.image} height='42' width='42'/>{e.name}</div>)
        })
        return teams
    }

    async fetch(url, params) {
        const resp = await axios.get(url, params)
        const teams = this.formatTeams(resp)
        return teams
    }

    async fetchTeams() {
        const teams_resp = await this.fetch('http://localhost:5000/lol/v1/teams', {crossdomain: true}).then(v => {return v}).catch(e => {console.log(e)})
        console.log("TEAMS ", teams_resp)
        return teams_resp
    }

    render() {
        console.log("yo")
        return (
            <div>
                test
                {this.state.teams}
            </div>
        )
    }
}