import React, { Component } from 'react';
import { Button, Card, CardActions, CardMenu, CardText, CardTitle, Cell, Grid, IconButton, Tab, Tabs } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }
    toggleCategories(){
        if(this.state.activeTab===0){
         return(
            <div  className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}> 
                        <CardTitle style={{color:'#fff',height:'176px',
                        background:'url(https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg) center/cover'}}>
                        React project #1</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}> 
                    <CardTitle style={{color:'#fff',height:'176px',
                    background:'url(https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg) center/cover'}}>
                    React project #2</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codepen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>


                {/*Project 3*/}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}> 
                    <CardTitle style={{color:'#fff',height:'176px',
                    background:'url(https://miro.medium.com/max/1200/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg) center/cover'}}>
                    React project #3</CardTitle>
                    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codepen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            </div>
           
         )
        }
        else if(this.state.activeTab===1){
            return(

<div  className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}> 
                        <CardTitle style={{color:'#fff',height:'176px',
                        background:'url(https://desarrolloweb.com/storage/manual_images/Ob3Wz6y0TnJCyccfIdXn1sdD7HWevyrbSyIxICHP.jpeg)'}}>
                        Angular project #1</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Codepen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                


               

            </div>

            )
           }
        else if(this.state.activeTab===2){
        return(<div><h1>THIS IS VUEJS</h1></div>)
        }   
        if(this.state.activeTab===3){
        return(<div><h1>THIS IS MONGOBD</h1></div>)
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})}ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Vuejs</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs> 
          
                    <Grid>
                        <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
         
            </div>
        );
    }

}
export default Projects;
