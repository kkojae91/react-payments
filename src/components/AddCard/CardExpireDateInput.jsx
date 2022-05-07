import { Fragment, useContext } from "react";

import Input from "../UIComponents/Input/Input";
import InputField from "../UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../../constants/constants";
import { CardInfoContext } from "../../contexts/CardInfoContext";

export default function CardExpireDateInput() {
  const {
    state: { expireDate },
    actions: { handleExpireDateUpdate },
  } = useContext(CardInfoContext);

  const expireDateList = Object.values(expireDate);
  const expireDateLength = expireDateList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={"만료일 (MM/YY)"}
      wrapperWidth={"135px"}
      horizontalAlign={"center"}
      errorMessage={"만료일은 0~9까지 숫자로 입력해주세요."}
      isComplete={expireDateLength === CARD_INFO_RULES.EXPIRE_DATE_LENGTH}
    >
      {expireDateList.map((expireDate) => (
        <Fragment key={expireDate.keyType}>
          <Input
            name={"expireDate"}
            className={"expireDate"}
            value={expireDate.value}
            type={"text"}
            placeholder={expireDate.keyType === "month" ? "MM" : "YY"}
            width={"40px"}
            maxLength={2}
            required
            onChange={(e) => handleExpireDateUpdate(e, expireDate.keyType)}
            isComplete={expireDate.value.length === 2}
          />
          {expireDate.keyType === "month" && <p>/</p>}
        </Fragment>
      ))}
    </InputField>
  );
}