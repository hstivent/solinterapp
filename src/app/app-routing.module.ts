import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  { path: 'product', loadChildren: './pages/product/product.module#ProductPageModule' },
  { path: 'materials', loadChildren: './pages/materials/materials.module#MaterialsPageModule' },
  { path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  { path: 'clients', loadChildren: './pages/client/client.module#ClientPageModule' },
  { path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'schedulesvisits', loadChildren: './pages/schedulesvisits/schedulesvisits.module#SchedulesvisitsPageModule' },
  { path: 'principal-menu', loadChildren: './pages/principal-menu/principal-menu.module#PrincipalMenuPageModule' },
  { path: 'listschedule', loadChildren: './pages/listschedule/listschedule.module#ListschedulePageModule' },
  { path: 'serviceorder', loadChildren: './pages/serviceorder/serviceorder.module#ServiceorderPageModule' },
  { path: 'tipoobra', loadChildren: './pages/tipo-obra/tipo-obra.module#TipoObraPageModule' },
  { path: 'contrato', loadChildren: './pages/contrato/contrato.module#ContratoPageModule' },
  { path: 'herramienta', loadChildren: './pages/herramienta/herramienta.module#HerramientaPageModule' },
  { path: 'maquinaria', loadChildren: './pages/maquinaria/maquinaria.module#MaquinariaPageModule' },
  { path: 'porcentages', loadChildren: './pages/porcentage/porcentage.module#PorcentagePageModule' },
  { path: 'mano-obra', loadChildren: './pages/mano-obra/mano-obra.module#ManoObraPageModule' },
  { path: 'schedule-modal', loadChildren: './pages/schedule-modal/schedule-modal.module#ScheduleModalPageModule' },
  { path: 'visits', loadChildren: './pages/visits/visits.module#VisitsPageModule' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
