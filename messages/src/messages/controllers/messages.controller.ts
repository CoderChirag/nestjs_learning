import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	NotFoundException,
} from "@nestjs/common";
import { CreateMessageDto } from "../dtos/create-message.dto";
import { MessagesService } from "../services/messages.service";

@Controller("messages")
export class MessagesController {
	constructor(public messagesService: MessagesService) {}

	@Get()
	getMessages() {
		return this.messagesService.findAll();
	}

	@Post()
	postMessage(@Body() body: CreateMessageDto) {
		return this.messagesService.create(body.content);
	}

	@Get("/:id")
	async getMessageById(@Param("id") id: string) {
		const message = await this.messagesService.findOne(id);

		if (!message) {
			throw new NotFoundException("No message found with the given id.");
		}

		return message;
	}
}
