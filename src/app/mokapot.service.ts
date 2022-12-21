import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MokapotService {

  api_headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
  url = 'http://192.168.4.1/wifi'
  network_status_url = 'http://192.168.4.1/network'
  mac_url = 'http://192.168.4.1/sendmac'
  set_url = 'http://192.168.4.1'
  set_temp_url;
  headers;
  esp_wifi;
  esp_wifi_list;
  mokapot_mac_data;
  mokapot_mac_address;
  mokapot_ip_address: any;
  data_success: any;
  data_error: any;
  connected_network;
  ip_length;
  status_data;
  get_ip_status;
  device_status;
  device_temp;
  connect_mode: any;
  connection_status: any ="close";

  selected_device_mac_address: any;

  set_keep_time: any = '00:00';
  sceduleTime: any;
  esp_network_status: any;

  moka_mode_is: any = "Normal";
  moka_warm_set: any = "OFF";
  moka_will_start: any = "Now";
  moka_keep_time: any = "0";
  moka_mode: any = "OFF";

  moka_keep_mode: any = false;
  moka_stronger_mode: any = false;
  moka_scedule_mode: any = false;

  setWifi(ssid, pass) {
    let main = this;
    return main.http.post<any>(main.set_url + '/setwifi', { "ssid": ssid, "pass": pass }, { headers: main.headers }).pipe(
      tap((result) => {
        console.log(result);
      })
    )
  }

  setWifiStatusDone(statusDone) {
    let main = this;
    return main.http.post<any>(main.set_url + '/statusdone?statusDone=' + statusDone, null, { headers: main.headers }).pipe(
      tap((result) => {
        console.log("status done: ", result);
      })
    )
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getMacAddress() {
    let main = this;
    var newStr = '';
    var str = '';
    if (str.length > 30) {

    }
    else {
      return this.http.post(this.mac_url, null).pipe(
        tap(data => {
          main.mokapot_mac_data = JSON.stringify(data);
          str = main.mokapot_mac_data;
          newStr = str.substring(11, 29);
          main.mokapot_mac_address = newStr;
        }),
        catchError(this.handleError('get mac address'))
      )
    }
  }

  getWifiList() {
    return this.http.get(this.url).pipe(
      tap(data => {
        this.esp_wifi = data;
        this.esp_wifi_list = this.esp_wifi.list
      }),
      catchError(this.handleError('get wifi'))
    );
  }

  getWifiStatus() {
    return this.http.get(this.network_status_url).pipe(
      tap(data => {
        console.log("get wifi status", data);
        this.esp_network_status = data;
      }),
      catchError(this.handleError('get wifi status'))
    );
  }

  getStatus() {
    let main = this;
    return main.http.post<any>(main.set_temp_url + '/status', null, { headers: main.headers }).subscribe((data) => {
      console.log("cur temp data: ", data);
      main.device_status = data.status;
      main.status_data = data;
    }), (err) => {
      console.log("error", err);
    };
  }

  getStatusBasicMoka(){
    let main = this;
    return main.http.post<any>(main.set_temp_url + '/status', null, { headers: main.headers }).subscribe((data) => {
      console.log("data");
      main.device_status = data.status;
      main.status_data = data;
    }), (err) => {
      console.log("error", err);
    };
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error on:', operation);
      console.error(error);
      return of(result as T);
    };
  }
}