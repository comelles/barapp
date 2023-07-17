/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComidaCreateFormInputValues = {
    Descripcion?: string;
    Precio?: number;
    Foto?: string;
    Nombre?: string;
};
export declare type ComidaCreateFormValidationValues = {
    Descripcion?: ValidationFunction<string>;
    Precio?: ValidationFunction<number>;
    Foto?: ValidationFunction<string>;
    Nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComidaCreateFormOverridesProps = {
    ComidaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    Precio?: PrimitiveOverrideProps<TextFieldProps>;
    Foto?: PrimitiveOverrideProps<TextFieldProps>;
    Nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComidaCreateFormProps = React.PropsWithChildren<{
    overrides?: ComidaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ComidaCreateFormInputValues) => ComidaCreateFormInputValues;
    onSuccess?: (fields: ComidaCreateFormInputValues) => void;
    onError?: (fields: ComidaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComidaCreateFormInputValues) => ComidaCreateFormInputValues;
    onValidate?: ComidaCreateFormValidationValues;
} & React.CSSProperties>;
export default function ComidaCreateForm(props: ComidaCreateFormProps): React.ReactElement;
