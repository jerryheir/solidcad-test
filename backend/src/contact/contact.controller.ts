import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Post,
} from '@nestjs/common';
import { CreateContactDto } from './contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async getContacts() {
    try {
      const result = await this.contactService.getContacts();
      return {
        status: 'success',
        message: 'Contact fetched successfully',
        data: result,
      };
    } catch (err) {
      throw new BadRequestException({
        status: 'error',
        data: err,
      });
    }
  }

  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    try {
      await this.contactService.create(createContactDto);
      return {
        status: 'success',
        message: 'Contact added successfully',
      };
    } catch (err) {
      console.log('ERROR', err);
      throw new BadRequestException({
        status: 'error',
        data: err,
      });
    }
  }
}
