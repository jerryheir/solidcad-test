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
      Logger.log(JSON.stringify(err));
      throw new BadRequestException({
        status: 'error',
        message: err,
      });
    }
  }

  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    try {
      const { email, firstname, lastname, message } = createContactDto;
      if (!email || !firstname || !lastname || !message) {
        return {
          status: 'error',
          message: 'Invalid Request: Missing fields',
        };
      }
      await this.contactService.create(createContactDto);
      return {
        status: 'success',
        message: 'Contact added successfully',
      };
    } catch (err) {
      Logger.log(JSON.stringify(err));
      throw new BadRequestException({
        status: 'error',
        message: err,
      });
    }
  }
}
