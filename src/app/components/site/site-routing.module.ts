import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GreenhouseComponent} from "./greenhouse/greenhouse.component";
import {AccountComponent} from "./account/account.component";
import {SettingsComponent} from "./settings/settings.component";
import {AboutComponent} from "./about/about.component";
import {DiscoverComponent} from "./discover/discover.component";
import {AddPlantComponent} from "./add-plant/add-plant.component";
import {ManagePlantComponent} from "./manage-plant/manage-plant.component";
import {GardenerComponent} from "./gardener/gardener.component";


const routes: Routes = [
    {path: '', redirectTo: 'greenhouse', pathMatch: 'full'},
    {path: 'greenhouse', component: GreenhouseComponent},
    {path: 'greenhouse/manage-plant/:id', component: ManagePlantComponent},
    {path: 'greenhouse/add-plant', component: AddPlantComponent},
    {path: 'gardener', component: GardenerComponent},
    {path: 'discover', component: DiscoverComponent},
    {path: 'account', component: AccountComponent},
    {path: 'account/:id', component: AccountComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule {
}
