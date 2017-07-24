import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ToastController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  links: any;
  name: string;
  user: any = {
    permissions: {
      name: null
  ***REMOVED***
***REMOVED***

  constructor(
    public navCtrl: NavController,
    public storage: StorageProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
    this.links=[
      // {name:' Picsa Manual', color:'picsa-manual', icon:'book',page:'PicsaManualPage', text:''},
      { name: 'Resources', color: 'picsa-manual', icon: 'book', page: 'ResourcesPage', text: '' },
      { name: 'Tools', color: 'picsa-view', icon: 'tablet-portrait', page: 'ToolsPage' },
      {name:' Discussions', color:'picsa-discussions', icon:'chatbubbles', page:'ForumPage'},
      // {name:' Videos', color:'picsa-videos', icon:'logo-youtube', page:VideosPage},
      {name:' Record Data', color:'picsa-record', icon:'create', page:'RecordDataPage'},
      { name: 'View Data', color: 'picsa-view', icon: 'stats', page: 'ViewDataPage' },
    ]
***REMOVED***
  ionViewDidLoad() {
    console.log('home page loaded')
    this.storage.getUser().then(
      res => {
        console.log('res',res)
        if(!res['permissions']){res['permissions']={name:''}}
        this.user = res
        this.name=this.user.permissions.name
        console.log('user', this.user)
***REMOVED***)    
***REMOVED***

  login() {
    console.log('loading login')
      let prompt = this.alertCtrl.create({
        title: 'Login',
        message: "Enter organisation access code in the box below",
        inputs: [
          {
            name: 'accessCode',
            placeholder: 'Code'
        ***REMOVED***,
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
          ***REMOVED***
        ***REMOVED***,
          {
            text: 'Save',
            handler: data => {
              this.storage.assignPermissions(data.accessCode).then((user) => {
                console.log('user', user)
                this.user = user
            ***REMOVED***  
                // this.presentToast('Successfully signed in as '+user.name)
              ).catch((err) =>{
                console.log('err',err)
            ***REMOVED***)
          ***REMOVED***
        ***REMOVED***
        ]
    ***REMOVED***);
      prompt.present();
***REMOVED***
  logout() {
    this.user.permissions = {}
***REMOVED***
  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
  ***REMOVED***);
    toast.present();
***REMOVED***
}
