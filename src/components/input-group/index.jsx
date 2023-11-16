import * as S from "./styled";
import { useStepsContext } from "@/contexts/step-context";
import { useFormContext } from "react-hook-form";

function InputGroup() {
    const { current } = useStepsContext();
    const methods = useFormContext();

    return (
        <S.InputGroup>
            {current.formElements.map((item) => (
                <S.Item key={item.id}>
                    <S.Label>{item.title}</S.Label>
                    <S.ErrorMessage $hasError={false}>
                        {item.errorMessage}
                    </S.ErrorMessage>
                    <S.Input $hasError={false} placeholder={item.placeholder} {...methods.register(item.name)} />
                </S.Item>
            ))}
        </S.InputGroup>
    );
}

export { InputGroup };
