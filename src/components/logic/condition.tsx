import {ReactNode} from "react";

type ToggleableProps = {
    currentState: boolean,
    children: ReactNode
};

export function If(props: ToggleableProps) {
    if (props.currentState) {
        return props.children;
    }

    return null;
}