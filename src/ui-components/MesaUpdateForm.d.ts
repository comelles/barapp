/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Mesa } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MesaUpdateFormInputValues = {
    nroMesa?: string;
};
export declare type MesaUpdateFormValidationValues = {
    nroMesa?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MesaUpdateFormOverridesProps = {
    MesaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nroMesa?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MesaUpdateFormProps = React.PropsWithChildren<{
    overrides?: MesaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mesa?: Mesa;
    onSubmit?: (fields: MesaUpdateFormInputValues) => MesaUpdateFormInputValues;
    onSuccess?: (fields: MesaUpdateFormInputValues) => void;
    onError?: (fields: MesaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MesaUpdateFormInputValues) => MesaUpdateFormInputValues;
    onValidate?: MesaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MesaUpdateForm(props: MesaUpdateFormProps): React.ReactElement;
