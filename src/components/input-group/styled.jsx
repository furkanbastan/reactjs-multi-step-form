import styled from "styled-components";

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    position: relative;
`;

export const Label = styled.label`
    font-size: var(--fs-sm);
`;

export const ErrorMessage = styled.span`
    font-size: var(--fs-sm);
    font-weight: var(--fw-lg);
    color: var(--strawberry-red);
    position: absolute;
    top: 0;
    right: 0;
    display: ${props => props.$hasError ? 'block' : 'none'};
`;

export const Input = styled.input`
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.$hasError ? "var(--strawberry-red)" : "var(--cool-gray)"};
    padding: var(--space-2);
    border-radius: var(--space-2);
    transition: border-color 250ms ease;

    &:hover {
        border-color: ${props => props.$hasError ? "var(--strawberry-red)" : "var(--marine-blue)"};
    }
`;