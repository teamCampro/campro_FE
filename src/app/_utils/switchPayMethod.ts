function switchPayMethod(value: string) {
  switch (value) {
    case 'EASY_PAYMENT':
      return '간편 결제(카카오 페이)';
    case 'CREDIT_CARD':
      return '현대 ****-****-**21 *';
    case 'NO_BANK_BOOK':
      return '무통장 입금';
  }
}

export default switchPayMethod;
