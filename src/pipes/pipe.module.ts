import { NgModule } from '@angular/core';

import { TruncPipe } from './truncate';
import { AgePipe } from './age';

@NgModule({
    declarations: [
        TruncPipe,
        AgePipe
    ],
    imports: [],
    exports: [
        TruncPipe,
        AgePipe
    ],
    providers: [],
})
export class PipeModule { }