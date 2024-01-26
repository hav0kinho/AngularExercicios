import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";

@Injectable()
export class CounterService {
  inactiveCount = 0;
  activeCount = 0;

  increaseInactiveCount() {
    this.activeCount++;
    console.log(`Active to Inactive count: ${this.activeCount}`);
  }

  increaseActiveCount() {
    this.inactiveCount++;
    console.log(`Active to Inactive count: ${this.inactiveCount}`);
  }
}
