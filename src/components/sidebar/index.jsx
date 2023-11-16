import { useStepsContext } from "@/contexts/step-context";
import * as S from "./styled";

function Sidebar() {
    const { current, steps } = useStepsContext();
    const sidebars = steps.map(item => item.sidebar)

    return (
        <S.Sidebar>
            {sidebars.map((item) => (
                <S.Item key={item.id}>
                    <S.ItemNumber $active={item.id === current.id}>
                        {item.stepOrder}
                    </S.ItemNumber>
                    <S.ItemBody>
                        <S.Title>{item.title}</S.Title>
                        <S.Subtitle>{item.subtitle}</S.Subtitle>
                    </S.ItemBody>
                </S.Item>
            ))}
        </S.Sidebar>
    );
}

export { Sidebar };
