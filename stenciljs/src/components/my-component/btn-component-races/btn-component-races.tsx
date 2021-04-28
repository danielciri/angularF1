import { Component, h } from '@stencil/core';

@Component({
    tag: 'btn-races-component',
    styleUrl: 'btn-component-races.css',

  
})


export class RacesButton {
    render() {
        return (
            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-primary btn-sm dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                  <h6><small>Select race</small></h6>  
    </button>
                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <slot name="btn-races" />
                </ul>
            </div>

        );
    }
}