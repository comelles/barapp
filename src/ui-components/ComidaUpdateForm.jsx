/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Comida } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ComidaUpdateForm(props) {
  const {
    id: idProp,
    comida: comidaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Descripcion: "",
    Precio: "",
    Foto: "",
    Nombre: "",
  };
  const [Descripcion, setDescripcion] = React.useState(
    initialValues.Descripcion
  );
  const [Precio, setPrecio] = React.useState(initialValues.Precio);
  const [Foto, setFoto] = React.useState(initialValues.Foto);
  const [Nombre, setNombre] = React.useState(initialValues.Nombre);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = comidaRecord
      ? { ...initialValues, ...comidaRecord }
      : initialValues;
    setDescripcion(cleanValues.Descripcion);
    setPrecio(cleanValues.Precio);
    setFoto(cleanValues.Foto);
    setNombre(cleanValues.Nombre);
    setErrors({});
  };
  const [comidaRecord, setComidaRecord] = React.useState(comidaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Comida, idProp)
        : comidaModelProp;
      setComidaRecord(record);
    };
    queryData();
  }, [idProp, comidaModelProp]);
  React.useEffect(resetStateValues, [comidaRecord]);
  const validations = {
    Descripcion: [],
    Precio: [],
    Foto: [{ type: "URL" }],
    Nombre: [],
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
          Descripcion,
          Precio,
          Foto,
          Nombre,
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
            Comida.copyOf(comidaRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ComidaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Descripcion"
        isRequired={false}
        isReadOnly={false}
        value={Descripcion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descripcion: value,
              Precio,
              Foto,
              Nombre,
            };
            const result = onChange(modelFields);
            value = result?.Descripcion ?? value;
          }
          if (errors.Descripcion?.hasError) {
            runValidationTasks("Descripcion", value);
          }
          setDescripcion(value);
        }}
        onBlur={() => runValidationTasks("Descripcion", Descripcion)}
        errorMessage={errors.Descripcion?.errorMessage}
        hasError={errors.Descripcion?.hasError}
        {...getOverrideProps(overrides, "Descripcion")}
      ></TextField>
      <TextField
        label="Precio"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Precio}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Descripcion,
              Precio: value,
              Foto,
              Nombre,
            };
            const result = onChange(modelFields);
            value = result?.Precio ?? value;
          }
          if (errors.Precio?.hasError) {
            runValidationTasks("Precio", value);
          }
          setPrecio(value);
        }}
        onBlur={() => runValidationTasks("Precio", Precio)}
        errorMessage={errors.Precio?.errorMessage}
        hasError={errors.Precio?.hasError}
        {...getOverrideProps(overrides, "Precio")}
      ></TextField>
      <TextField
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={Foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descripcion,
              Precio,
              Foto: value,
              Nombre,
            };
            const result = onChange(modelFields);
            value = result?.Foto ?? value;
          }
          if (errors.Foto?.hasError) {
            runValidationTasks("Foto", value);
          }
          setFoto(value);
        }}
        onBlur={() => runValidationTasks("Foto", Foto)}
        errorMessage={errors.Foto?.errorMessage}
        hasError={errors.Foto?.hasError}
        {...getOverrideProps(overrides, "Foto")}
      ></TextField>
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={Nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Descripcion,
              Precio,
              Foto,
              Nombre: value,
            };
            const result = onChange(modelFields);
            value = result?.Nombre ?? value;
          }
          if (errors.Nombre?.hasError) {
            runValidationTasks("Nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("Nombre", Nombre)}
        errorMessage={errors.Nombre?.errorMessage}
        hasError={errors.Nombre?.hasError}
        {...getOverrideProps(overrides, "Nombre")}
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
          isDisabled={!(idProp || comidaModelProp)}
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
              !(idProp || comidaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
