import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoogleBooksService } from './services/google-books.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ],
    declarations: [],
    exports: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
              GoogleBooksService
            ]
        };
    }
}
