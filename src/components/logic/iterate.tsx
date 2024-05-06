import React, {JSXElementConstructor} from "react";

type Filter = (obj: any) => boolean;
type ValueFunction = (obj: any) => any;

type IterateProps<T> = {
    iterable: object[],
    constructor: JSXElementConstructor<any>,
    filter?: Filter,
    onClick?: React.Dispatch<React.SetStateAction<T>>,
    onClickValue?: ValueFunction
};

export function Iterate<T>(props: IterateProps<T>) {
    if (!props.iterable) {
        return null;
    }

    return props.iterable.map(i => {
        if (props.filter && !props.filter(i)) {
            return null;
        }

        return <props.constructor {...i} key={JSON.stringify(i)}
                                  onClick={() => props.onClick && props.onClickValue
                                      ? props.onClick(props.onClickValue(i)) : null}/>
    });
}