import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type LegacyRef,
} from "react";
import { Box, Container, ErrorMessage } from "./styles";
import { FieldError } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  error?: FieldError;
};

export const TextInput = forwardRef(function TextInput(
  { optional, error, containerProps, onFocus, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  function handleFocus() {
    console.log("onFocus");
  }

  function handleBlur() {
    console.log("onBlur");
  }
  return (
    <Box {...containerProps}>
      <Container>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />
        {optional ? <span>Opcional</span> : null}
      </Container>
      {error?.message ? <ErrorMessage>{error.message}</ErrorMessage> : null}
    </Box>
  );
});
