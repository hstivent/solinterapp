import { Injectable } from '@angular/core';
import { configuration } from '../configuration/configuration';
import { Message } from '../configuration/message'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration
  message =  Message

  constructor() { }

  getConfig()
  {
    return this.config
  }

  getMessage()
  {
    return this.message
  }
  
}
