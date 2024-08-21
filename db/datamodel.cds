namespace ust.nidhisha.sonaji.db;

using { ust.nidhisha.sonaji.reuse } from './commons';
using { cuid, temporal, managed, Currency } from '@sap/cds/common';

context master{

    entity employees:cuid{
        nameFirst: String(40);
        nameMiddle: String(40);
        nameLast: String(40);
        nameInitials: String(40);
        Gender: reuse.Gender;
        Language: String(1);
        phoneNumber: reuse.PhoneNumber;
        Email: reuse.Email;
        loginName: String(12);
        Currency: Currency;
        salaryAmount: Decimal(10,2);
        accountNumber: String(16);
        bankId: String(8);
        bankName: String(64);
    }
}



