import {UrlObject} from "url";
import React from "react";

export type Url = string | UrlObject;

export type Clickable = {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};