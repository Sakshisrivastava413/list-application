import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // <!-- sachme lovely code written by you <3 -->
  // meri jaan aaj bhot zyada khush kardiya>_>^ itna acha kaam karti rahiyo
  // ye interest jaga rehna chiye bss. <3 
  // sath milke badi badi cheeze banayenge :) :D ^_^ jaroor
  //arre sachme i am so happy ^_^ arrre tera itna kehne ki vjh se
  // hi lag rha h ki ho jaega.^_^ hoyega hi agar kahi phass bhi jaye to
    // kaise bhi karna hi hai. sochle ye project bhot bhot kuch sikha dega
    //  to bss karna hi haaasana saari cheeze kaise bhi. Also, I'm with you 
  //    to help and guide love you darling keep it uppest ^_^_^_^_^ 
  // bss naa itna acha bolega toh puri raat jagh lungi yeh krke tko impress
  //  krne ke liye..:P hehe nhi koi zaroorat ni ab jaldi se ambassador wala
  //   karte hain and then soja tu din mei bhi ni soyi.thk h.. 
  rootPage:any = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

