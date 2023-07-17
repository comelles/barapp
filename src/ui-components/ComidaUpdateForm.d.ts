/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comida } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComidaUpdateFormInputValues = {
    Descripcion?: string;
    Precio?: number;
    Foto?: string;
    Nombre?: string;
};
export declare type ComidaUpdateFormValidationValues = {
    Descripcion?: ValidationFunction<string>;
    Precio?: ValidationFunction<number>;
    Foto?: ValidationFunction<string>;
    Nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComidaUpdateFormOverridesProps = {
    ComidaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Descripcion?: PrimitiveOverrideProps<TextFieldProps>;
    Precio?: PrimitiveOverrideProps<TextFieldProps>;
    Foto?: PrimitiveOverrideProps<TextFieldProps>;
    Nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ComidaUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComidaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comida?: Comida;
    onSubmit?: (fields: ComidaUpdateFormInputValues) => ComidaUpdateFormInputValues;
    onSuccess?: (fields: ComidaUpdateFormInputValues) => void;
    onError?: (fields: ComidaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComidaUpdateFormInputValues) => ComidaUpdateFormInputValues;
    onValidate?: ComidaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComidaUpdateForm(props: ComidaUpdateFormProps): React.ReactElement;
