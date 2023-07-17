/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Mesa } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MesaUpdateForm(props) {
  const {
    id: idProp,
    mesa: mesaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nroMesa: "",
  };
  const [nroMesa, setNroMesa] = React.useState(initialValues.nroMesa);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mesaRecord
      ? { ...initialValues, ...mesaRecord }
      : initialValues;
    setNroMesa(cleanValues.nroMesa);
    setErrors({});
  };
  const [mesaRecord, setMesaRecord] = React.useState(mesaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Mesa, idProp)
        : mesaModelProp;
      setMesaRecord(record);
    };
    queryData();
  }, [idProp, mesaModelProp]);
  React.useEffect(resetStateValues, [mesaRecord]);
  const validations = {
    nroMesa: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nroMesa,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Mesa.copyOf(mesaRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MesaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nro mesa"
        isRequired={false}
        isReadOnly={false}
        value={nroMesa}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nroMesa: value,
            };
            const result = onChange(modelFields);
            value = result?.nroMesa ?? value;
          }
          if (errors.nroMesa?.hasError) {
            runValidationTasks("nroMesa", value);
          }
          setNroMesa(value);
        }}
        onBlur={() => runValidationTasks("nroMesa", nroMesa)}
        errorMessage={errors.nroMesa?.errorMessage}
        hasError={errors.nroMesa?.hasError}
        {...getOverrideProps(overrides, "nroMesa")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || mesaModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || mesaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
