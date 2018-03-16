import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { MatMenuModule, MatGridListModule, MatStepperModule, MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatGridListModule,
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatStepperModule,
        MatSelectModule],

    exports: [
        MatGridListModule,
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatStepperModule,
        MatSelectModule],
})
export class MaterialComponentsModule { }
