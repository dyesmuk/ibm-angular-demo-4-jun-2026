import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterOutlet],
    template: '<div><h1>Home Component</h1><p>This is home component.</p></div>'
})
export class Home {


}

