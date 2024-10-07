import { forwardRef } from 'react';

type BoxProps = Partial<{
  mW: React.CSSProperties['maxWidth'];
  h: React.CSSProperties['height'];
  bgColor: React.CSSProperties['backgroundColor'];
  borderWidth: React.CSSProperties['borderWidth'];
  borderColor: React.CSSProperties['borderColor'];
  radius: React.CSSProperties['borderRadius'];
  children: React.ReactNode;
}> &
  React.HTMLAttributes<HTMLDivElement>;

type Ref = HTMLDivElement;

export const Box = forwardRef<Ref, BoxProps>(
  (props, ref) => {
    const {
      mW = '100%',
      h,
      bgColor,
      borderWidth,
      borderColor,
      radius,
      style,
      children,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        style={{
          maxWidth: mW,
          height: h,
          backgroundColor: bgColor,
          borderWidth: borderWidth,
          borderStyle: 'solid',
          borderColor: borderColor,
          borderRadius: `${radius}px`,
          ...style,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
