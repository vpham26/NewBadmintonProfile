import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import avatar from '../img/avatar512x512.png';
import Education from './education.js'
import Experience from './experience.js'
import Skills from './skills.js';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                            <img src={avatar} alt="avatar" style={{height:'400px'}}/>
                       </div> 
                        <h2 style={{paddingTop:'0.5em'}}>Kevin Pham</h2>
                        <h4 style={{color:'grey'}}>Badminton Coach</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <p>
                            
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                        <h5>Current Club</h5>
                        <p>Orlando Racket Sports</p>
                        <h5>Phone</h5>
                        <p>(321) 948-5737</p>
                        <h5>Email</h5>
                        <p>vulong.pham26@gmail.com</p>
                        <h5>Porfolio</h5>
                        <p>https://k-react-porfolio.herokuapp.com/</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Formal Training</h2>
                    <Education
                        startYear={2012}
                        endYear={2017}
                        schoolName="ClearOne Badminton Centre (Orlando, FL)"
                        schoolDescription="Head Coach // Hendry Winarto"
                        />
                    <Education
                        startYear={2016}
                        endYear={2016}
                        schoolName="Sports Affair (Kuala Lumpur, Malaysia)"
                        schoolDescription="Assistant Coach // Nova Armada"
                        />
                    <Education
                        startYear={2020}
                        endYear={2020}
                        schoolName="Hi-Cock Club (Daejeon, South Korea)"
                        schoolDescription="Head Coach // Ho-Jeon Hong"
                        />
                    <Education
                        startYear={2021}
                        endYear={2021}
                        schoolName="Club28 (Philadelphia, PA)"
                        schoolDescription="Head Coach // Suthichon Pol-Gul"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        
                        <h2>Experience</h2>

                        <Experience
                         startYear={2012}
                         endYear={2017}
                         jobName="Various Universities Tournaments"
                         jobDescription="Men Singles // Doubles // Mixed - Winner // Runner-Up"
                        />    

                        <Experience
                         startYear={2014}
                         endYear={2015}
                         jobName="US International Challenge"
                         jobDescription="Participated in Men Singles // Doubles"
                        />    

                        <Experience
                         startYear={2014}
                         endYear={2015}
                         jobName="US Adult National"
                         jobDescription="Participated in Men Singles // Doubles"
                        />    

                        <Experience
                         startYear={2014}
                         endYear={2016}
                         jobName="Florida Southern Regional"
                         jobDescription="Men Doubles Winner"
                        />    

                        <Experience
                         startYear={2015}
                         endYear={2015}
                         jobName="North Carolina Forza Open"
                         jobDescription="Men Doubles Quarter-Finalist // Consolation Men Single Semi-Finalist"
                        />    

                        <Experience
                         startYear={2017}
                         endYear={2019}
                         jobName="Various City Tournaments, Daejeon, South Korea"
                         jobDescription="Men // Mixed Doubles Finalist"
                        />    

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>

                        <Skills
                        skill="Foot Work"
                        progress={85}
                        />

                        <Skills
                        skill="Hand Skill"
                        progress={75}
                        />
                        
                        <Skills
                        skill="Multi-Feed"
                        progress={80}
                        />

                        <Skills
                        skill="Single"
                        progress={85}
                        />

                        <Skills
                        skill="Double"
                        progress={95}
                        />

                        <Skills
                        skill="Mixed"
                        progress={80}
                        />

                    </Cell>
                </Grid>
              
            </div>
        );
    }

}
export default Resume;
