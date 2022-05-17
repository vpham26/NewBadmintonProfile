import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../img/avatar.png';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
              { /* <img
                    src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
                    alt="avatar"
                    className="avatar-image"
              /> */ }          
           

                  <img  src={avatar} alt="avatar" className="avatar-image" />


                  <div className="banner-text">
                    <h1>Full Stack Web Developer // Badminton Coach</h1>
                    <hr/>
                    <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoBD </p>
                      
                      <div className="social-links"> 
                        {/*LinkedIn*/}
                        <a href="www.linkedin.com/in/vulong-pham-a86305127" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-linkedin-square" aria-hidden="true"/> 
                        </a>
                        {/*Github*/}
                        <a href="http://github.com/vpham26" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-github-square" aria-hidden="true"/> 
                        </a>

                        {/*Free Code camp*/}
                        {<a href="https://k-react-porfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-connectdevelop" aria-hidden="true"/> 
                        </a>}
                        </div>
                  
                  </div>
              
                </Cell>
            </Grid>
            </div>
        );
    }

}
export default Landing;
