import { Injectable } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Socket } from 'ngx-socket-io';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  link = "https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/ScaleTrigger";
  link_cook = 'https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/CookSomething';
  link_iot = 'https://5tpxh1vxw1.execute-api.us-east-1.amazonaws.com/triggerIoT';
  link_token = 'https://api.amazon.com/auth/o2/token';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  token_headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  api_headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

  grant_type = 'authorization_code';
  client_id = 'amzn1.application-oa2-client.fc31251f56d840399f8d167aff2fd4d3';
  client_secret = 'f39a8bd2023112a86c08e4f428a14994bda85f55082cddf38ccb68e0cdbd5931';
  redirect_uri = 'https://carv.ist/mokapot/return.php';
  private userData: any;

  internet_connection;

  activemail: any;
  activeid: any;
  login_control: any;

  control_add_user: any;
  user_check: any;
  active_user: any;
  user_id;
  jsonList: any;

  select_device_type: any;

  deviceName: any;
  selectedRoom: any;

  controlCon;
  localapp_id;
  isLoading = false;

  amazon_user_info: any;
  amazon_user_id: any;
  amazon_user_name: any;
  amazon_user_mail: any;

  addUserQuery(usermail) {
    return this.http.post<any>(this.link, { "job": "add_user_query", usermail: usermail }).pipe(
      tap((result) => {
        //console.log(result) 
      }),
      catchError(this.handleError('add user query'))
    );
  }

  addAmazonQuery(usermail) {
    return this.http.post<any>(this.link, { "job": "add_amazon_user_query", usermail: usermail }).pipe(
      tap((result) => {
        console.log("addAmazonQuery: ", result)
      }),
      catchError(this.handleError('add user query'))
    );
  }

  addUserControl(usname, username, usermail, userpass, userid) {
    return this.http.post<any>(this.link, { "job": "add_user_control", usname: usname, username: username, usermail: usermail, userpass: userpass, userid: userid }).pipe(
      tap((result) => {
        this.control_add_user = result.status;
        //console.log(result)
      }),
      catchError(this.handleError('add user control'))
    );
  }

  addAmazonControl() {
    return this.http.post<any>(this.link, { "job": "add_amazon_control" }).pipe(
      tap((result) => {
        console.log(result)
      }),
      catchError(this.handleError('add user control'))
    );
  }

  addUser(usname, username, usermail, userpass, userid) {
    return this.http.post<any>(this.link, { "job": "add_user", usname: usname, username: username, usermail: usermail, userpass: userpass, userid: userid }).pipe(
      tap((result) => {
        //console.log(result) 
      }),
      catchError(this.handleError('add user'))
    );
  }

  addAmazonUser(usname, username, usermail, userpass, userid, amazonstatus) {
    return this.http.post<any>(this.link, { "job": "add_amazon_user", usname: usname, username: username, usermail: usermail, userpass: userpass, userid: userid, amazonstatus: amazonstatus }).pipe(
      tap((result) => {
        console.log(result)
      }),
      catchError(this.handleError('add amazon user'))
    );
  }

  loginUserQuery(usermail, userpass) {
    return this.http.post<any>(this.link, { "job": "login_query", usermail: usermail, userpass: userpass }, { headers: this.api_headers }).pipe(
      tap((result) => {
        console.log("result loginUserQuery", result);
      }),
      catchError(this.handleError('login query'))
    );
  }

  loginUser(usermail, userpass) {
    return this.http.post<any>(this.link, { "job": "login_user", usermail: usermail, userpass: userpass }).pipe(
      tap((result) => {
        console.log("result loginUser", result);
        if (!result.status) {
          this.user_id = result[0].id.S;
          this.user_check = result;
          console.log("user_check", this.user_check)
          this.storage.set('user', this.user_check);
        }
        else {
          this.user_check = result.status;
        }
      }),
      catchError(this.handleError('login user'))
    );
  }

  getUserId(usermail) {
    return this.http.post<any>(this.link, { "job": "get_user_id", usermail: usermail }).pipe(
      tap((result) => {
        this.user_id = result.id[0].S;
        this.getUserCheck();
        console.log("result getUserID", result);
        console.log("result", result.id[0].S);
      }),
      catchError(this.handleError('login user'))
    );
  }

  logout() {
    this.storage.set('user', '');
  }

  getDeviceCategory() {
    return this.http.post<any>(this.link, { "job": "get_device_category" }).pipe(
      tap((result) => {
        console.log("result", result);
      }),
      catchError(this.handleError('get device category'))
    )
  }

  getRecipe() {
    return this.http.post<any>(this.link, { "job": "get_recipe2" }).pipe(
      tap(data => { }),
      catchError(this.handleError('get recipe'))
    );
  }

  getRecipeQuery() {
    return this.http.post<any>(this.link, { "job": "get_recipe_query2" }).pipe(
      tap(data => {
        this.jsonList = data;
        //console.log("data", data) 
      }),
      catchError(this.handleError('get recipe query'))
    );
  }

  addUserDevices(devicetype, userid, device, newdevice, devicename, status) {
    return this.http.post<any>(this.link, { "job": "add_user_devices", devicetype: devicetype, userid: userid, device: device, newdevice: newdevice, devicename: devicename, statu: status }).pipe(
      tap((result) => {
        console.log("add devices: ", result)
      }),
      catchError(this.handleError('add user devices'))
    );
  }

  addUserNewDevices(id, devicetype, userid, device, newdevice, devicename) {
    return this.http.post<any>(this.link, { "job": "add_newmokapot_devices", id: id, device: device, devicetype: devicetype, newdevice: newdevice, userid: userid, devicename: devicename }).pipe(
      tap((result) => {
        console.log("add devices: ", result)
      }),
      catchError(this.handleError('add user devices'))
    );
  }

  updateUserDevices(id, device, devicename, devicetype, newdevice, status, userid) {
    return this.http.post<any>(this.link, { "job": "update_user_devices", id: id, device: device, devicename: devicename, devicetype: devicetype, newdevice: newdevice, status: status, userid: userid }).pipe(
      tap((result) => {
        console.log("add devices: ", result)
      }),
      catchError(this.handleError('add user devices'))
    );
  }

  getUserDevices(userid) {
    console.log(userid)
    return this.http.post<any>(this.link, { "job": "get_user_devices", userid: userid }).pipe(
      tap(data => { }),
      catchError(this.handleError('get user devices query'))
    );
  }

  getUserDevicesQuery() {
    return this.http.post<any>(this.link, { "job": "get_devices_query" }).pipe(
      tap(data => { }),
      catchError(this.handleError('get devices query'))
    );
  }

  mobileCon(localid, appid) {
    return this.http.post<any>(this.link_cook, { "job": "mobile_con", localid: localid, appid: appid },
      { headers: this.headers }).pipe(
        tap((result) => {
          console.log('result: ', result);
        })
      );
  }

  mobileControl(localid, appid) {
    return this.http.post<any>(this.link_cook, { "job": "mobile_control", localid: localid, appid: appid },
      { headers: this.headers }).pipe(
        tap((result) => {
          console.log('result: ', result.status);
          this.controlCon = result.status;
        })
      );
  }

  addCon(devicetype, userid, device, newdevice, devicename) {
    return this.http.post<any>(this.link_cook, { "job": "add_fitchef_connection", userid: userid, device: device, devicetype: devicetype, newdevice: newdevice, devicename: devicename },
      { headers: this.headers }).pipe(
        tap((result) => {
          console.log('result: ', result);
        })
      );
  }

  deviceAddTr(id, appid) {
    return this.http.post<any>(this.link_iot, { "job": "add_device_tr", id: id, appid: appid },
      { headers: this.api_headers }).pipe(
        tap((result) => {
          console.log('result: ', result);
        })
      )
  }

  shortToAccessToken(code) {
    let body = "grant_type=" + this.grant_type + "&code=" + code + "&client_id=" + this.client_id + "&client_secret=" + this.client_secret + "&redirect_uri=" + this.redirect_uri;
    return this.http.post(this.link_token, body, { headers: this.token_headers }).pipe(
      tap((res) => {

      })
    );
  }

  deleteUser(mail) {
    return this.http.post<any>(this.link, { "job": "delete_user_account", mail: mail }).pipe(
      tap((result) => {
        console.log("delete user account: ", result)
      }),
      catchError(this.handleError('delete user account'))
    );
  }

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navController: NavController,
    private socket: Socket,
    private loadingController: LoadingController
  ) {
    this.userData = new Storage({
      name: "scale_db",
      storeName: "user"
    });

    this.socket.connect();

    this.socket.on('connect', function () {
      console.log('connected');
    })
  }

  ngOnInit() {
  }

  async getLoginStatus() {
    const login_control = await this.storage.get('login');
    this.login_control = login_control
    //console.log("login_control", login_control)
  }

  async getUserCheckProfile() {

    const value_id = await this.storage.get('localid');
    this.localapp_id = value_id;
    console.log('local app id: ', this.localapp_id);
    if (this.localapp_id == '' || this.localapp_id == null || this.localapp_id == undefined) {
      this.localapp_id = uuidv4();
      console.log(this.localapp_id)
      this.storage.set('localid', this.localapp_id);
    }
    else {
      console.log("id var")
    }
    console.log('This local app id', this.localapp_id);

    const user_control = await this.storage.get('user');
    console.log("user_control:", user_control)
    if (user_control == null || user_control == '' || user_control == undefined) {
      this.navController.navigateForward('login');
    }
    else if (user_control == 'usernotfound') {
      this.navController.navigateForward('login');
      console.log("ok", this.active_user)

      this.active_user = user_control;
      console.log(this.active_user)
    }
    else {
      console.log("user found")
      this.active_user = user_control;
      console.log("active user: ", this.active_user)

      this.activemail = this.active_user[0].email.S;
      this.activeid = this.active_user[0].id.S;
      console.log("active id: ", this.activeid);

      console.log(this.activemail)
      console.log(this.activeid)

      this.getRecipe().subscribe(() => {
        this.getRecipeQuery().subscribe(() => {
          //console.log("liste", this.jsonList)
        })
      });
    }
  }

  async getUserCheck() {

    const value_id = await this.storage.get('localid');
    this.localapp_id = value_id;
    console.log('local app id: ', this.localapp_id);
    if (this.localapp_id == '' || this.localapp_id == null || this.localapp_id == undefined) {
      this.localapp_id = uuidv4();
      console.log(this.localapp_id)
      this.storage.set('localid', this.localapp_id);
    }
    else {
      console.log("id var")
    }
    console.log('This local app id', this.localapp_id);

    const user_control = await this.storage.get('user');
    console.log("user_control:", user_control)
    if (user_control == null || user_control == '' || user_control == undefined) {
      this.navController.navigateForward('device-select');
    }
    else if (user_control == 'usernotfound') {
      this.navController.navigateForward('device-select');
      console.log("ok", this.active_user)

      this.active_user = user_control;
      console.log(this.active_user)
    }
    else {
      this.navController.navigateForward('device-select');
      console.log("user found")
      this.active_user = user_control;
      console.log("active user: ", this.active_user)

      this.activemail = this.active_user[0].email.S;
      this.activeid = this.active_user[0].id.S;
      console.log("active id: ", this.activeid);

      console.log(this.activemail)
      console.log(this.activeid)

      this.getRecipe().subscribe(() => {
        this.getRecipeQuery().subscribe(() => {
          //console.log("liste", this.jsonList)
        })
      });
    }
  }

  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log(''));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log(''));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}