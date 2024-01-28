import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "../repositories/messages.repository";

@Injectable()
export class MessagesService {
	constructor(public messagesRepository: MessagesRepository) {}

	async findAll() {
		return this.messagesRepository.findAll();
	}

	async findOne(id: string) {
		return this.messagesRepository.findOne(id);
	}

	async create(content: string) {
		return this.messagesRepository.create(content);
	}
}
