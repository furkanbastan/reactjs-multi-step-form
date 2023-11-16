import * as S from "./styled";
import { FORMGROUPS } from "./constant";
import {
    useStepsContext,
    useStepsDispatchContext,
} from "@/contexts/step-context";
import { useFormContext } from "react-hook-form";

function StepLayout() {
    const { current, counter, count } = useStepsContext();
    const stepsDispatch = useStepsDispatchContext();
    const methods = useFormContext();
    console.log(counter, count);
    const FormGroup = FORMGROUPS[current.formGroup];

    const onClickBackButtonHandle = () => {
        stepsDispatch({ type: "GO_BACK" });
    };

    const onClickNextButtonHandle = () => {
        stepsDispatch({ type: "NEXT_STEP" });
    };

    const onSubmitFormHandle = (data) => {
        //dispatch fonksiyonu çağrılacak
    };

    return (
        <S.StepLayout onSubmit={methods.handleSubmit(onSubmitFormHandle)}>
            <S.Header>
                <S.Title>{current.title}</S.Title>
                <S.Subtitle>{current.subtitle}</S.Subtitle>
            </S.Header>
            <S.Body>{FormGroup}</S.Body>
            <S.Footer>
                {current.hasBackButton && (
                    <S.BackButton onClick={onClickBackButtonHandle}>
                        {current.backButtonTitle}
                    </S.BackButton>
                )}
                {current.hasNextButton && (
                    <S.NextButton
                        onClick={onClickNextButtonHandle}
                        type={counter + 1 === count ? "submit" : "button"}
                    >
                        {current.nextButtonTitle}
                    </S.NextButton>
                )}
            </S.Footer>
        </S.StepLayout>
    );
}

export { StepLayout };
