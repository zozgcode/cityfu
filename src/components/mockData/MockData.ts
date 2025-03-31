import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Timothy Bernando',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.00
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.00
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.00
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.00
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.00
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.00
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.00
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Hazel Boyle',
      lastName: '',
      mobileNumber: '+1-825-816-2023',
      email: 'phoebelilboyle01@gmail.com',
      createdOn: '2/27/2025', // m/d/y
      username: 'phoebelilboyle01',
      password: 'Hibeekay199'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      balance_usd: 4560000.00
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '226829',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 10, 2025',
        description: 'Transfer to Kyla Micheal',
        status: 'Success',
        amount_usd: -20000.00
      },
      {
        dateTime: 'October 28, 2024',
        description: 'Transfer to The part school of Baltimore',
        status: 'Success',
        amount_usd: -52000.00
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer from Emily Rose',
        status: 'Success',
        amount_usd: 3000.0,
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer to Starbucks',
        status: 'Success',
        amount_usd: -35.99,
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer to Michael Daniel',
        status: 'Success',
        amount_usd: -250.0,
      },
      {
        dateTime: 'October 24, 2024',
        description: 'Transfer from Olivia Marir',
        status: 'Success',
        amount_usd: 1870.0,
      },
    ]
  },
   {
    account_id: 'ACC003',
    holder: {
      firstName: 'Kijan Coryaba',
      lastName: '',
      mobileNumber: '***-***-***',
      email: 'k@gmail.com',
      createdOn: '3/31/2025', // m/d/y
      username: 'Kingskid123@',
      password: 'Promise01@90'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      balance_usd: 4650000.00
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '0317',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 31, 2025',
        description: 'Postpaid - XXXXXX2526',
        status: 'Success',
        amount_usd: 60000.00
      },
      {
        dateTime: 'March 31, 2025',
        description: 'Discover bills - XXXXXX3838',
        status: 'Success',
        amount_usd: 30000.00
      },
      {
        dateTime: 'January 10, 2025',
        description: 'Transfer to Kyler Micheal - XXXXXX9469',
        status: 'Success',
        amount_usd: -20000.00
      },
      {
        dateTime: 'October 28, 2024',
        description: 'Transfer to The part school of Baltimore - XXXXXX8468',
        status: 'Success',
        amount_usd: -52000.00
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer from Emily Rose - XXXXXX1277',
        status: 'Success',
        amount_usd: 3000.00
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Starbucks - XXXXXX4783',
        status: 'Success',
        amount_usd: -35.99
      },
      {
        dateTime: 'October 25, 2024',
        description: 'Transfer to Micheal Daniel - XXXXXX7389',
        status: 'Success',
        amount_usd: -250.00
      },
      {
        dateTime: 'October 24, 2024',
        description: 'Transfer from Olivia Marir - XXXXXX7389',
        status: 'Success',
        amount_usd: 1870.00
      },
    ]
  },
];
