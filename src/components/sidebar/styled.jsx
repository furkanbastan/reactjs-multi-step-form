import styled from "styled-components";

export const Sidebar = styled.nav`
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
    width: 30%;
    height: 100%;
    color: var(--white);
    background-image: url('./assets/images/bg-sidebar-desktop.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: var(--space-5);
    border-radius: var(--space-2);
`;

export const Item = styled.div`
    display: flex;
    gap: var(--space-3);
`;

export const ItemNumber = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--space-8);
    height: var(--space-8);
    border: 1px solid var(--white);
    border-radius: 999px;
    ${props => props.$active && "color: var(--marine-blue);"}
    ${props => props.$active && "background-color: var(--pastel-blue);"}
`;

export const ItemBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    text-transform: uppercase;
`;

export const Title = styled.h5`
    font-size: var(--fs-xs);
    color: var(--cool-gray);
`;

export const Subtitle = styled.h2`
    font-weight: var(--fw-lg);
`;
