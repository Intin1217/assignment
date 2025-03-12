import React, { ReactNode } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  textColor?: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;

  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;

  useHover?: boolean;
  hoverBackgroundColor?: string;
  hoverScale?: number;

  useTransition?: boolean;
  transitionDuration?: number;
}
