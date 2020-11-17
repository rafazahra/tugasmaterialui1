import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                  <Mui.Container fixed>
                 <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={12} sm={6}>
                              <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2019–present.jpg" width="150" /><br/><br/>
                              <h1 style={{ fontFamily: 'New York', color: 'blue', fontSize: 50}}>Selamat datang di Komunitas Profesional ini </h1>
                              
                            </Mui.Grid>
                            
                            <Mui.Grid item xs={12} sm={6}>
                             <h4 style={{marginLeft: 350, color: 'blue' }} >Bergabung sekarang  
                             <Mui.Button variant="outlined" color="primary" style={{float: 'right',marginTop: -10 }}>
                                 Log in
                            </Mui.Button></h4><br/><br/>
                            <img src="https://static-exp1.licdn.com/sc/h/3m4tgpbdz7gbldapvl63mrnxz" width="700px"/>

                            </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
            </div>

        )
    }
}

export default Home;