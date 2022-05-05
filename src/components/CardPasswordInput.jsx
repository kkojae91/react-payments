import Input from "./UIComponents/Input/Input";
import InputField from "./UIComponents/InputField/InputField";

import { CARD_INFO_RULES } from "../constants/constants";

export default function CardPasswordInput(props) {
  const { password, onChange } = props;
  const passwordList = Object.values(password);
  const passwordLength = passwordList.reduce(
    (sum, prev) => prev.value.length + sum,
    0
  );

  return (
    <InputField
      labelText={"카드 비밀번호 앞 두 자리"}
      wrapperWidth={"90px"}
      splitCount={2}
      errorMessage={"비밀번호는 0~9까지 숫자로 입력해주세요."}
      isComplete={passwordLength === CARD_INFO_RULES.PASSWORD_LENGTH}
    >
      {passwordList.map((password) => (
        <Input
          key={password.index}
          dataTargetGroup={password.className}
          className={password.className}
          name={password.name}
          value={password.value}
          type={password.type}
          placeholder={password.placeholder}
          width={password.width}
          maxLength={password.maxLength}
          required
          isComplete={password.length === 1}
          onChange={(e) => onChange(e, password.keyType)}
        />
      ))}
    </InputField>
  );
}
