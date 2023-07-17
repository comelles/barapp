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
export declare type MesaCreateFormInputValues = {
    nroMesa?: string;
};
export declare type MesaCreateFormValidationValues = {
    nroMesa?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MesaCreateFormOverridesProps = {
    MesaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nroMesa?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MesaCreateFormProps = React.PropsWithChildren<{
    overrides?: MesaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MesaCreateFormInputValues) => MesaCreateFormInputValues;
    onSuccess?: (fields: MesaCreateFormInputValues) => void;
    onError?: (fields: MesaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MesaCreateFormInputValues) => MesaCreateFormInputValues;
    onValidate?: MesaCreateFormValidationValues;
} & React.CSSProperties>;
export default function MesaCreateForm(props: MesaCreateFormProps): React.ReactElement;
