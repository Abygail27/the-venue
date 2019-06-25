import  React, { Component } from 'react';

class Pricing extends Component {

   state = {
       prices: [100, 150, 250],
       positions: ['Balcony', 'Medium', 'Star'],
       desc: [
           'a descriptioon lorem impusum lorfb lorem conrempor contrs retcg conthu',
           'a descriptioon lorem impusum lorfb lorem conrempor contrs retcg conthu',
           'a descriptioon lorem impusum lorfb lorem conrempor contrs retcg conthu'
       ],
       linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s']
   }

   showBoxes = () => (
      this.state.prices.map((box, i)=> (
          <div className = "pricing_item">
              <div className = "pricing_inner_wrapper">
                  <div className = "pricing_title">
                      Title
                  </div>
                  <div className = "pricing_description">
                      Description
                  </div>
                  <div className= "pricing_buttons">
                      Button
                  </div>
              </div>
            
          </div>
      ))
   )

    render() {
        return (
            <div className = "bck_black">
                <div className = "center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className = "pricing_wrapper">
                   {this.showBoxes()}
                    </div>
                </div>
              
            </div>
        );
    }
}

export default Pricing;