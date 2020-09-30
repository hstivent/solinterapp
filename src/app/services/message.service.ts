import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public alertController: AlertController)
  {
  }

  async presentAlert(header: string, subtitle: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subtitle,
      message: message,
      buttons: ['Cerrar']
    })
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Recuperar contraseña',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Ingrese el correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');

          }
        }, {
          text: 'Enviar',
          handler: () => {
            console.log('Confirm Ok ',name);
          }
        }
      ]
    });

    await alert.present();
  }


  

}
