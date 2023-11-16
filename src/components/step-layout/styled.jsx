import styled from "styled-components";

export const StepLayout = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    color: var(--marine-blue);
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
`;

export const Title = styled.h2`
    font-size: var(--fs-2xl);
    font-weight: var(--fw-xl);
`;

export const Subtitle = styled.h5`
    color: var(--cool-gray);
`;

export const Body = styled.div`
    flex: 1;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
`;

export const BackButton = styled.button`
    color: var(--cool-gray);
`;

export const NextButton = styled.button`
    margin-left: auto;
    font-weight: var(--fw-lg);
    background-color: var(--marine-blue);
    color: var(--white);
    padding: var(--space-3);
    border-radius: var(--space-2);
    transition: background-color 250ms ease;

    &:hover{
        background-color: var(--purplish-blue);
    }
`;