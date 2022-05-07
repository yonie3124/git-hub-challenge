import axios from 'axios'
import RepositoryBranch from './RepositoriesBranch';
import React, { Component } from 'react'

class Api extends Component {
    constructor() {
        super()
        this.state = ({
           links: []
        })
    }
    componentDidMount() {
        axios.get('http://api.github.com/users/yonie3124/repos?client_id=bb799e6636b687073da7&client_secret=ff910e1d75ce436c93c710ac80dcac81c27991cb&sort=created')
            .then((response) => {
                console.log(response)
                this.setState({
                    links: response.data
                })
            })
    }
    render() {
        return (
            <div>
                <div>
                    <div> <p id='userRepositories'>User Repositories</p></div>
                </div>
                {
                    <ol>
                        {
                            this.state.links.map((quotes, index) => {
                                return (
                                    <div key={index} >
                                        <RepositoryBranch quote={quotes} index={index} />                                      
                                    </div>
                                )
                            })
                        }
                    </ol>
                }
            </div>
        )
    }
}
export default Api


