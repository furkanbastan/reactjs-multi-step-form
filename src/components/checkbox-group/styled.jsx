import styled from "styled-components";

export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
`;

export const Label = styled.label`
    display: flex;
    align-items: center;
    border-radius: var(--space-2);
    padding: var(--space-3);
    transition: border-color 250ms ease;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
        props.$isSelected ? "var(--purplish-blue)" : "var(--cool-gray)"};

    &:hover{
        border-color: var(--purplish-blue);
    }
`;

export const Input = styled.input``;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    margin-left: var(--space-2);
`;

export const Title = styled.h4`
    font-weight: var(--fw-lg);
`;

export const Subtitle = styled.span`
    font-size: var(--fs-sm);
    color: var(--cool-gray);
`;

export const Price = styled.span`
    margin-left: auto;
    color: var(--cool-gray);
    font-size: var(--fs-sm);
`;
