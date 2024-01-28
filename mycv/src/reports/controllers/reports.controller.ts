import { Controller } from "@nestjs/common";
import { ReportsService } from "../services/reports.service";

@Controller("reports")
export class ReportsController {
	constructor(public reportsService: ReportsService) {}
}
