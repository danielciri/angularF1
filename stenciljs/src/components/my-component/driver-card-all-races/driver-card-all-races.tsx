import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'driver-card-all-races',
  styleUrl: 'driver-card-all-races.css',


})
export class DriverCardAllRaces {

  @Prop() position: number;
  @Prop() name: string = " ";
  @Prop() age: number;
  @Prop() team: string = " "; 
  @Prop() rank: number = 2;
  render() {
    return (
      <div class="container">
      
            <div class="card card-driver" >
              <div class="header header-driver" > Driver Card</div>
              <img src="http://placehold.it/64x64" class="card-img-top" alt="..." />
              <div class="card-body driver-body">
                <h7 class="card-title"><small>Name</small></h7>
                <p><small>{this.name}</small></p>

                <h7 class="card-title"><small>Age</small></h7>
                <p><small>{this.age}</small></p>

                <h7 class="card-title"><small>Team</small></h7>
                <p><small>{this.team}</small></p>

                <h7 class="card-title"><small>Ranking Global</small></h7>
                <p><small>{this.rank}</small></p>


              </div>
          
        
        </div>
      </div>




    );
  }
}
