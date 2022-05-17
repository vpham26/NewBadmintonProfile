import React, { Component } from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';
// import IMG from "../../src/img/bad.jpg";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kevin Pham</h2>
                            {/* <img className="IMG"
                            src={ IMG } /> */}
                            {/* alt="avatar"
                            style={{height:'250px'}}
                            /> */}
                            <p style={{width:'75%', margin:'auto',paddingTop:'1em',}}>
                            <ul>
                            <li> Best way to reach me, text message

                            </li>
                            <li> Leave your name and request

                            </li>
                            <li> I will get back to you very soon!

                            </li>
                            </ul>
                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (321) 948-5737
                                </ListItemContent>
                            </ListItem>
                          {/* <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-fax" aria-hidden="true"/>
                                (+34 123-24-45)
                                </ListItemContent>
                            </ListItem> */}
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                vulong.pham26@gmail.com
                                </ListItemContent>
                            </ListItem>

                            {/* <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                
                                </ListItemContent>
                            </ListItem> */}
                        </List>
                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        );
    }

}
export default Contact;
