import styled from "styled-components";

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
`;

export const LabelGroup = styled.div`
    display: flex;
    gap: var(--space-5);
`;

export const Label = styled.label`
    border-width: 1px;
    border-style: solid;
    border-radius: var(--space-2);
    flex: 1;
    padding: var(--space-5);
    cursor: pointer;
    transition: border-color 250ms ease;
    border-color: ${props => props.$isSelected ? "var(--purplish-blue)" : "var(--cool-gray)"};
    ${props => props.$isSelected && "background-color: var(--alabaster);"}

    &:hover{
        border-color: var(--purplish-blue);
    }
`;

export const Input = styled.input`
    display: none;
`;

export const Icon = styled.img`
    width: 40px;
    margin-bottom: var(--space-6);
`;

export const Title = styled.h5`
    font-weight: var(--fw-lg);
    margin-bottom: var(--space-2);
`;

export const Subtitle = styled.h6`
    font-size: var(--fs-sm);
    color: var(--cool-gray);
`;

export const OptionButtonGroup = styled.div`
    display: flex;
    gap: var(--space-5);
`;

export const OptionButton = styled.button`
    ${props => props.$isSelected || "color: var(--cool-gray);"}
`;