import { useState } from "react";
import * as S from "./styled";

function StepSummary() {
    const [radioSelects, setRadioSelects] = useState([
        {
            id: 2,
            title: "Advanced",
            subtitle: null,
            placeholder: null,
            errorMessage: null,
            optionFirstValue: "12",
            optionSecondValue: "120",
            icon: "./assets/images/icon-advanced.svg",
        },
    ]);
    const [checkboxSelects, setCheckboxSelects] = useState([
        {
            id: 1,
            title: "Online service",
            subtitle: "Access to multiplayer games.",
            placeholder: null,
            errorMessage: null,
            optionFirstValue: 1,
            optionSecondValue: 10,
            icon: null,
        },
        {
            id: 2,
            title: "Larger Storage",
            subtitle: "Extra 1TB of cloud save.",
            placeholder: null,
            errorMessage: null,
            optionFirstValue: 2,
            optionSecondValue: 20,
            icon: null,
        },
    ]);
    const [option, setOptions] = useState({
        optionFirst: "Monthly",
    });

    const getOption = () =>
        option.optionFirst ? option.optionFirst : option.optionSecond;

    const getOptionPrice = (item) =>
        option.optionFirst ? item.optionFirstValue : item.optionSecondValue;

    const getTotalPrice = () => {
        let total = 0;

        if (option.optionFirst) {
            total += radioSelects.reduce(
                (acc, v) => acc + Number(v.optionFirstValue),
                0
            );
            total += checkboxSelects.reduce(
                (acc, v) => acc + Number(v.optionFirstValue),
                0
            );
        } else {
            total += radioSelects.reduce(
                (acc, v) => acc + Number(v.optionSecondValue),
                0
            );
            total += checkboxSelects.reduce(
                (acc, v) => acc + Number(v.optionSecondValue),
                0
            );
        }

        return total;
    };

    return (
        <S.StepSummary>
            <S.SummarySection>
                {radioSelects.map((item) => (
                    <S.SummaryItem key={item.id} $fontBold>
                        <h4>
                            {item.title}({getOption()})
                        </h4>
                        <p>${getOptionPrice(item)}</p>
                    </S.SummaryItem>
                ))}
            </S.SummarySection>

            <S.Stroke />

            <S.SummarySection>
                {checkboxSelects.map((item) => (
                    <S.SummaryItem key={item.id}>
                        <h4>
                            {item.title}({getOption()})
                        </h4>
                        <p>${getOptionPrice(item)}</p>
                    </S.SummaryItem>
                ))}
            </S.SummarySection>

            <S.Stroke />

            <S.TotalWrapper>
                <S.TotalTitle>Total({getOption()})</S.TotalTitle>
                <S.TotalPrice>${getTotalPrice()}</S.TotalPrice>
            </S.TotalWrapper>
        </S.StepSummary>
    );
}

export { StepSummary };
