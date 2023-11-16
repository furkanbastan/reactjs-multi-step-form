import { useState } from "react";
import * as S from "./styled";
import { useStepsContext } from "@/contexts/step-context";

function RadioGroup() {
    const {current} = useStepsContext();
    const [selected, setSelected] = useState(false);
    const [selectedOption, setSelectedOption] = useState(current.optionFirst);

    const handleOnChange = (item) => setSelected(item);

    const handleOnClick = (option) => setSelectedOption(option);

    return (
        <S.RadioGroup>
            <S.LabelGroup>
                {current.formElements.map((item) => (
                    <S.Label
                        key={item.id}
                        $isSelected={item.id === selected.id}
                    >
                        <S.Input
                            type="radio"
                            name={`step${current.steporder}`}
                            onChange={() => handleOnChange(item)}
                        />
                        <S.Icon src={item.icon} />
                        <S.Title>{item.title}</S.Title>
                        <S.Subtitle>
                            {selectedOption === current.optionFirst
                                ? `$${item.optionFirstValue}/${current.optionFirst}`
                                : `$${item.optionSecondValue}/${current.optionSecond}`}
                        </S.Subtitle>
                    </S.Label>
                ))}
            </S.LabelGroup>

            <S.OptionButtonGroup>
                <S.OptionButton
                    onClick={() => handleOnClick(current.optionFirst)}
                    $isSelected={selectedOption === current.optionFirst}
                >
                    {current.optionFirst}
                </S.OptionButton>
                <S.OptionButton
                    onClick={() => handleOnClick(current.optionSecond)}
                    $isSelected={selectedOption === current.optionSecond}
                >
                    {current.optionSecond}
                </S.OptionButton>
            </S.OptionButtonGroup>
        </S.RadioGroup>
    );
}

export { RadioGroup };
