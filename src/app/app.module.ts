import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductService } from './services/product.service';
import { ConfigService } from './services/config-service';
import { DataService } from './services/data.service';
import { LoginService } from './services/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { UsuariosService } from './services/usuarios.service';
import { RolesService } from './services/roles.service';
import { VentasService } from './services/ventas-service';
import { CartService } from './services/cart-service';
import { TipoObraService } from './services/tipo-obra.service';
import { TipocontratoService } from './services/tipocontrato.service';
import { HerramientaService } from './services/herramienta.service';
import { MaquinariaService } from './services/maquinaria.service';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { UploadComponent } from './pages/upload/upload.component';
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { ScheduleModalPage } from './pages/schedule-modal/schedule-modal.page';
import { UserModalComponent } from './pages/user-modal/user-modal.component';
import { ClientModalComponent } from './pages/client-modal/client-modal.component';
import { SectionModalComponent } from './pages/section-modal/section-modal.component';
import { ModalSectionComponent } from './pages/modal-section/modal-section.component';

@NgModule({
  declarations: [AppComponent, UploadComponent, ScheduleModalPage, UserModalComponent, ClientModalComponent,ModalSectionComponent, SectionModalComponent],
  entryComponents: [ScheduleModalPage, UserModalComponent, SectionModalComponent, ModalSectionComponent, ClientModalComponent ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    LocalNotifications,
    ConfigService,
    DataService,
    LoginService,
    UsuariosService,
    RolesService,
    File,
    FileTransfer,
    HTTP,
    FileChooser,
    VentasService,
    CartService,
    TipoObraService,
    TipocontratoService,
    HerramientaService,
    MaquinariaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
