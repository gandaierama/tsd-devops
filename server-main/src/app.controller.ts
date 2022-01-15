import {Controller, Get} from '@nestjs/common';
import {HealthCheck, HealthCheckService, HttpHealthIndicator} from "@nestjs/terminus";

@Controller()
export class AppController {
    constructor(private health: HealthCheckService, private http: HttpHealthIndicator) {
    }

    @Get('health')
    @HealthCheck()
    check() {
        return this.health.check([
            () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
        ]);
    }
}
