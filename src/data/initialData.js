export const initialCardNumber = {
  firstCardNumber: {
    name: "firstCardNumber",
    className: "cardNumber",
    value: "",
    type: "number",
    keyType: "cardNumberInfo",
    placeholder: "1 2 3 4",
    maxLength: 4,
    index: 0,
  },
  secondCardNumber: {
    name: "secondCardNumber",
    className: "cardNumber",
    value: "",
    type: "number",
    keyType: "cardNumberInfo",
    placeholder: "5 6 7 8",
    maxLength: 4,
    index: 1,
  },
  thirdCardNumber: {
    name: "thirdCardNumber",
    className: "cardNumber",
    value: "",
    type: "password",
    keyType: "cardNumberInfo",
    placeholder: "• • • •",
    maxLength: 4,
    index: 2,
  },
  fourthCardNumber: {
    name: "fourthCardNumber",
    className: "cardNumber",
    value: "",
    type: "password",
    keyType: "cardNumberInfo",
    placeholder: "• • • •",
    maxLength: 4,
    index: 3,
  },
};

export const initialExpireDate = {
  month: {
    name: "month",
    className: "expireDate",
    value: "",
    type: "text",
    keyType: "expireDateInfo",
    placeholder: "MM",
    width: "40px",
    maxLength: 2,
    index: 0,
  },
  year: {
    name: "year",
    className: "expireDate",
    value: "",
    type: "text",
    keyType: "expireDateInfo",
    placeholder: "YY",
    width: "40px",
    maxLength: 2,
    index: 1,
  },
};

export const initialHolderName = {
  name: "holderName",
  className: "holderName",
  value: "",
  type: "text",
  keyType: "holderNameInfo",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  width: "100%",
  textAlign: "left",
  maxLength: 30,
  index: 0,
};

export const initialSecurityCode = {
  name: "securityCode",
  className: "securityCode",
  value: "",
  type: "password",
  keyType: "securityCodeInfo",
  placeholder: "• • •",
  width: "100%",
  maxLength: 3,
  index: 0,
};

export const initialPassword = {
  firstPassword: {
    name: "firstPassword",
    className: "password",
    value: "",
    type: "password",
    keyType: "passwordInfo",
    placeholder: "•",
    width: "100%",
    maxLength: 1,
    index: 0,
  },
  secondPassword: {
    name: "secondPassword",
    className: "password",
    value: "",
    type: "password",
    keyType: "passwordInfo",
    placeholder: "•",
    width: "100%",
    maxLength: 1,
    index: 1,
  },
};
