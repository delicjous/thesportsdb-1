import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppStoreService } from './app.store';
import { RestService } from './rest.api';
import { UrlService } from './url.service';

//This module is to group all the services needed in different lazy loaded pages
//So that we don't have to import them for each page/module
//Also We need one unique instance of AppStoreService, as it will be used accross all Pages


@NgModule({})
export class SharedServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedServicesModule,
            providers: [
                AppStoreService,
                RestService,
                UrlService
            ]
        };
    }
}