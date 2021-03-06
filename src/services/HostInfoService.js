import { ApiService } from "./ApiService";

export class HostInfoService {
  static getHostInfo(hostUrl) {
    return ApiService.get(`analyze?host=${hostUrl}`);
  }
  static getLatestSearched(page) {
    if (!page) {
      page = 1;
    }
    return ApiService.getPaged("lastSearched", page);
  }
}
