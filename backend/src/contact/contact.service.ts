import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailtrapClient } from 'mailtrap';
import { Repository } from 'typeorm';
import { CreateContactDto } from './contact.dto';
import { Contact } from './contact.entity';

const MAILTRAP_API_TOKEN = '79e82c5011365cbdcdac20fbeffb6ef9';
const SENDER_EMAIL = 'nwaezejerry@gmail.com'; // REPLACE THIS EMAIL WITH YOUR EMAIL ADDRESS.
const client = new MailtrapClient({ token: MAILTRAP_API_TOKEN });

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async create(payload: CreateContactDto) {
    client
      .send({
        from: { name: '[TEST_EMAIL]', email: SENDER_EMAIL },
        to: [{ email: payload.email }],
        subject: '[TEST_EMAIL]',
        text: `[TEST_EMAIL] \n \n ${payload.message} \n \n This is a test email.`,
      })
      .then(console.log, console.error);
    await this.contactRepository.save(payload);
    return true;
  }

  async getContacts() {
    return await this.contactRepository.find();
  }
}
