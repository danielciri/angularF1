import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'card-driver-component-races',
    styleUrl: 'card-driver-component-races.css',

})
export class DriverCardAllRaces {
    @Prop() raceName: String;
    @Prop() time: string;
    @Prop() position: number;
    render() {
        return (

                

            <div class="contentTable">

                <table class="">
                    <thead>
                        <tr>

                            <th>Race</th>
                            <th>Rank</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody>
                      <slot name='driver-all-races'/>
                  </tbody>
            
                </table>

            </div>




        );
    }
}
