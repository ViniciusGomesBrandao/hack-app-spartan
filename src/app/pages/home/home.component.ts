import { Component } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  command: string = '';
  constructor(
    // private tauri: TauriService
  ){


  }

  async exec(){ 
    // const response = await this.tauri.exec_command(this.command);
    // console.log(response)
    const resultCommand = await invoke("exec_command", { command: this.command });
    console.log(typeof(resultCommand))
    console.log(resultCommand)
  }
}
