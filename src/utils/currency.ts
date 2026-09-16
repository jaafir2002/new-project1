import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string; prefix: string }> = {
  INR: { rate: 1, symbol: '₹', prefix: '₹' },
  USD: { rate: 0.012, symbol: '$', prefix: '$' },
  GBP: { rate: 0.0095, symbol: '£', prefix: '£' },
  EUR: { rate: 0.011, symbol: '€', prefix: '€' },
  AED: { rate: 0.044, symbol: 'AED', prefix: 'AED ' }
};

export function formatPrice(amountInINR: number, currency: Currency = 'INR'): string {
  const info = CURRENCY_RATES[currency] || CURRENCY_RATES.INR;
  const converted = Math.round(amountInINR * info.rate);

  if (currency === 'INR') {
    return `₹${amountInINR.toLocaleString('en-IN')}`;
  }
  return `${info.prefix}${converted.toLocaleString()}`;
}
