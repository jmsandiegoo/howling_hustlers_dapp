// can have multiple className:boolean
// e.g. {button: true, button-primary: true}
export interface otherClassNames {
  [className: string]: boolean;
}

export interface Size {
  width: number | undefined;
  height: number | undefined;
}
