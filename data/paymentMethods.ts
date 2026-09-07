import { PaymentMethod } from "@/types/common";

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "bkash", name: "bKash", logo: "/images/payments/bkash.svg" },
  { id: "visa", name: "Visa", logo: "/images/payments/visa.svg" },
  { id: "mastercard", name: "Mastercard", logo: "/images/payments/mastercard.svg" },
  { id: "gpay", name: "Google Pay", logo: "/images/payments/gpay.svg" },
  { id: "paypal", name: "PayPal", logo: "/images/payments/paypal.svg" },
  { id: "apay", name: "Apple Pay", logo: "/images/payments/apay.svg" },
];
