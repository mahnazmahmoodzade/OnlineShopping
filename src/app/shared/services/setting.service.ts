export class SettingService {

  private apiPort = 64888;


  get apiBasePath(): string {
    return `${window.location.protocol}//${window.location.hostname}:${this.apiPort}/api/`;
  }

  get authBasePath(): string {
    return `${window.location.protocol}//${window.location.hostname}:${this.apiPort}/Token`;
  }
}
