import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation() {
    const url = `example.com/auth/confirm?token=`;

    await this.mailerService.sendMail({
      to: "danielbatistagalvao@hotmail.com",
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: { // ✏️ filling curly brackets with content
        name: "Daniel",
        url,
      },
    });
  }
}
