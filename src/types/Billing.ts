import ListItem from './ListItem';

export interface BillingPaymentMethod extends ListItem {
  brand: string;
  expiringOn: Date;
  last4: string;
  type: string;
  createdOn: Date;
  isDefault: boolean;
}

export enum CCBrands {
  AMEX = 'amex',
  CB = 'cartes_bancaires',
  DINER_CLUB = 'diners_club',
  DISCOVER = 'discover',
  JCB = 'jcb',
  MASTERCARD = 'mastercard',
  VISA = 'visa',
  UNION_PAY = 'unionpay'
}