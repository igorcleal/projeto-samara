import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatFormFieldModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatFormFieldModule],
})
export class MaterialComponentsModule { }
