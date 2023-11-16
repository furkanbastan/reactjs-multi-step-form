import { useState } from "react";
import * as S from "./styled";
import { useStepsContext } from "@/contexts/step-context";

function CheckboxGroup() {
    const { current } = useStepsContext();
    const [selectedOption, setSelectedOption] = useState("Monthly");
    const [selectedItems, setSelectedItems] = useState([]);

    const onChangeHandle = (checked, item) => {
        checked
            ? setSelectedItems([...selectedItems, item])
            : setSelectedItems(selectedItems.filter((i) => i !== item));
    };

    return (
        <S.CheckboxGroup>
            {current.formElements.map((item) => (
                <S.Label
                    key={item.id}
                    $isSelected={selectedItems.includes(item)}
                >
                    <S.Input
                        type="checkbox"
                        onChange={(e) => onChangeHandle(e.target.checked, item)}
                    />
                    <S.TitleWrapper>
                        <S.Title>{item.title}</S.Title>
                        <S.Subtitle>{item.subtitle}</S.Subtitle>
                    </S.TitleWrapper>
                    <S.Price>
                        {current.optionFirst === selectedOption
                            ? `+$${item.optionFirstValue}/${selectedOption}`
                            : `+$${item.optionSecondValue}/${selectedOption}`}
                    </S.Price>
                </S.Label>
            ))}
        </S.CheckboxGroup>
    );
}

export { CheckboxGroup };
