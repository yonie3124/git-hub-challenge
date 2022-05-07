import axios from 'axios'
import React, { Component } from 'react'

class Api extends Component {
    constructor() {
        super()
        this.state = ({
            fullName: '',
            email: '',
            userName: '',
            location: '',
            image: '',  
        })
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/yonie3124?client_id=bb799e6636b687073da7&client_secret=ff910e1d75ce436c93c710ac80dcac81c27991cb&sort=created')
            .then((response) => {
                console.log(response)
                this.setState({
                    fullName: response.data.name,
                    email: response.data.email,
                    userName: response.data.login,
                    location: response.data.location,
                    image: response.data.avatar_url,
                })
            })
            .catch((er) =>{
                console.log('error')
            })
    }
    render() {
        return (
            <div>
               <div id='PartOne'>
                   <div>
                       <img src={this.state.image} alt='gitImage'></img>
                   </div>
                    <div id='backgroundDetails'>     
                       <span className='span'>Full Name: {this.state.fullName}</span>                           
                       <span className='span'>User Name: {this.state.userName}</span>                              
                       <span className='span'>Location: {this.state.location}</span>                              
                       <span className='span'>Email Address: {this.state.email}</span>                              
                    </div>
               </div>         
             </div>     
        )
    }
}
export default Api







