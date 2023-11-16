import * as S from "./styled";
import { Sidebar } from "@/components/sidebar";
import { StepLayout } from "@/components/step-layout";
import { StepProvider, stepsReducer } from "@/contexts/step-context";
import { useReducer } from "react";
import StepsJSON from "@/mocks/steps.json";
import { useForm, FormProvider } from "react-hook-form";

const initial = {
    current: StepsJSON.steps[0],
    steps: StepsJSON.steps,
    counter: 0,
    count: StepsJSON.steps.length,
};

function MultiStepForm() {
    const [steps, stepsDispatch] = useReducer(stepsReducer, initial);
    const methods = useForm();

    return (
        <S.MultiStepForm>
            <StepProvider steps={steps} dispatch={stepsDispatch}>
                <FormProvider {...methods}>
                    <Sidebar />
                    <StepLayout />
                </FormProvider>
            </StepProvider>
        </S.MultiStepForm>
    );
}

export { MultiStepForm };
