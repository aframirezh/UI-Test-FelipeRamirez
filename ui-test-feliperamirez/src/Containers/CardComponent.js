import React, { Component } from 'react';
import './CardComponent.scss';
import PostulatesComponent from '../Components/PostulatesComponent';
 
class CardComponent extends Component  {
 
   constructor(props) {
       super(props);
       this.state = {
           profilesInfo: []
       };
     }

   render (){
       const info = this.props;
       const containerClass = info.cardFlag ? "card-container--header":"card-container";
       const containerBackgroundClass = "card-container_background card-container_background--"+ info.position;
       return (
               <div className={containerClass}>
                   <div className={ info.cardFlag ? " card-container_background--header" : containerBackgroundClass}>
                       <div className="grid box" >
                       </div>
                       <div className="grid box--good">
                           <span className="oi oi-thumb-up"></span>
                       </div>
                       <div className="grid box--bad">
                           <span className="oi oi-thumb-down box-bad-down"></span>
                       </div>
                   </div>
               </div>
       );
   }
}
 
export default CardComponent;