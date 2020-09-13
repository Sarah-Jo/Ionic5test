import { Component } from '@angular/core';  
 import { Platform } from '@ionic/angular';  
 import { SplashScreen } from '@ionic-native/splash-screen/ngx';  
 import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { HomePage } from './home/home.page';

@Component({  
   selector: 'app-root',  
   templateUrl: 'app.component.html',  
   styleUrls: ['app.component.scss']  
 })  
 export class AppComponent {  
  rootPage = HomePage;
   navigate: any;  
   constructor(   
     private platform: Platform,  
     private splashScreen: SplashScreen,  
     private statusBar: StatusBar  
   ) {   
     this.sideMenu();  
     this.initializeApp();  
   }  
   initializeApp() {  
     this.platform.ready().then(() => {  
       this.statusBar.styleDefault();   
       this.splashScreen.hide();  
     });  
   }  
   sideMenu() {  
     this.navigate =   
     [  
         { 
          title : 'Restaurant',
          url   : '/restaurant',
          icon  : 'restaurant' 
          },   
          { 
            title : 'Shopping',
            url   : '/shopping', 
            icon  : 'cart'          
            },     
             { 
               title : 'Travel',  
               url   : '/travel',  
               icon  : 'trail-sign'  
             }, 
             {  
               title : 'Real estate',  
               url   : '/real estate',  
               icon  : 'home'   
             },   
             { 
             title : 'Podcat radio station',
            url   : '/podcat radio station',
            icon  : 'radio' 
            }, 
            { 
              title : 'Chart',  
              url   : '/chart',  
              icon  : 'bar-chart'  
            },
             { 
               title : 'Image gallery',  
               url   : '/image gallery',
               icon  : 'images'  
             },   
             {  
               title : 'Feed',  
               url   : '/feed',  
               icon  : 'newspaper'   
             },         
       { 
        title : 'Walkthrough',  
        url   : '/walkthrough',  
        icon  : 'walk'  
      },        
      { 
       title : 'Form',  
       url   : '/form',  
       icon  : 'create'  
     },       
      {  
        title : 'Masonry',
        url   : '/masonry',
        icon  : 'apps' 
        }, 
        { 
          title : 'Map',  
          url   : '/map',  
          icon  : 'map'  
        },
       { 
         title : 'SignIn',  
         url   : '/sign-in',  
         icon  : 'log-in'  
       },   
       {  
         title : 'SignUp',  
         url   : '/signup',  
         icon  : 'arrow-up'   
       },  
       { 
        title : 'Search',  
        url   : '/search',  
        icon  : 'search'  
      },
     { 
       title : 'Empty State',  
       url   : '/home',  
       icon  : 'sad'  
     },     


     { 
      title : 'SignUp',  
      url   : '/signup',  
      icon  : 'flame'  
    },
     { 
       title : 'SignIn',  
       url   : '/sign-in',  
       icon  : 'flame'  
     },   
     {  
       title : 'Forgot',  
       url   : '/forgot',  
       icon  : 'flame'  
     },    
     {  
       title : 'Profile',  
       url   : '/profile',  
       icon  : 'flame'  
     },   
     {  
       title : 'Color',  
       url   : '/color',  
       icon  : 'color-palette'  
     },    
     {  
       title : 'Animation',  
       url   : '/animation',  
       icon  : 'code-slash'  
     }, 
     {  
      title : 'Alert',  
      url   : '/alert',  
      icon  : 'code-slash'  
    }, 
     ];  
   }  
 }   
