import React from 'react'
import {FaReact} from 'react-icons/fa'
import {GrNode} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {TbHtml} from 'react-icons/tb'
import {DiCss3} from 'react-icons/di'
import {SiTsnode , SiPostman ,SiMongodb , SiExpress , SiMysql} from 'react-icons/si'
const data = 
    {
        s : { 'width': "100%", 'height': "14px", 'background-color': 'grey'},
        d : [
            {
              h: 'sql',
              b :{'background-color': '#3e6e93' ,'width': "40%", 'height': "100%",},
              icon:<SiMysql style={{ color :'##3e6e93', fontSize : '2rem' ,margin: '0rem 1rem' }}/>
            },
            {
                h: 'react',
                b :{'background-color': 'blue' ,'width': "40%", 'height': "100%",},
                icon:<FaReact style={{ color :'#2c98f0', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              },
              {
                h: 'node',
                b :{'background-color': '#87bf00' ,'width': "40%", 'height': "100%",},
                icon:<GrNode style={{ color :'#87bf00', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              },
              {
                h: 'postman',
                b :{'background-color': '#f76935' ,'width': "40%", 'height': "100%",},
                icon:<SiPostman style={{ color :'#f76935', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              },
              {
                h: 'express',
                b :{'background-color': '#87bf00' ,'width': "40%", 'height': "100%",},
                icon:<SiExpress style={{ color :'#87bf00', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              },
              {
                h: 'git & github',
                b :{'background-color': '#171515' ,'width': "40%", 'height': "100%",},
                icon:<BsGithub style={{ color :'#171515', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              },
              {
                h: 'Mongodb',
                b :{'background-color': '#4ca449' ,'width': "40%", 'height': "100%",},
                icon:<SiMongodb style={{ color :'#4ca449', fontSize : '2rem', margin: '0rem 1rem'}}/>
              },
              {
                h: 'typeScript',
                b :{'background-color': '#2f74c0' ,'width': "40%", 'height': "100%",},
                icon:<SiTsnode style={{ color :'#2f74c0', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              },
              {
                h: 'html',
                b :{'background-color': '#dd4b25' ,'width': "40%", 'height': "100%",},
                icon:<TbHtml style={{ color :'#dd4b25', fontSize : '2rem', margin: '0rem 1rem'}}/>
              },
              {
                h: 'css',
                b :{'background-color': '#254bdd' ,'width': "40%", 'height': "100%",},
                icon:<DiCss3 style={{ color :'#254bdd', fontSize : '2rem' , margin: '0rem 1rem'}}/>
              }

    ]
        
//          
    }


export default data