import styled from "styled-components";

export const StepSummary = styled.div`
    background-color: var(--alabaster);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-4);
    border-radius: var(--space-2);
`;


export const SummarySection = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
`;

export const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    ${props => props.$fontBold && "font-weight: var(--fw-xl);"}
`;

export const Stroke = styled.div`
    border-bottom: 1px solid var(--cool-gray);
`;

export const TotalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--cool-gray);
`;

export const TotalTitle = styled.h4``;

export const TotalPrice = styled.p`
    font-weight: var(--fw-xl);
    font-size: var(--fs-xl);
    color: var(--marine-blue);
`;