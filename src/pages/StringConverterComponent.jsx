import { useState } from "react";
import Selector from "../common/Selector";
import TextArea from "../common/TextArea";

const convertToSnakeCase = (input) =>
  input
    .replace(/\s+/g, "_")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase();

const convertToCamelCase = (input) =>
  input
    .replace(/[\s_-]+./g, (match) => match.charAt(match.length - 1).toUpperCase())
    .replace(/^[A-Z]/, (match) => match.toLowerCase());

const convertToKebabCase = (input) =>
  input
    .replace(/\s+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

const convertToPascalCase = (input) => {
  const camelCase = convertToCamelCase(input);
  const firstChar = camelCase.charAt(0).toUpperCase();
  return firstChar + camelCase.slice(1);
};

const convertToUpperCase = (input) => input.toUpperCase();

const convertToScreamKebabCase = (input) => convertToKebabCase(input).toUpperCase();

const convertToConstantCase = (input) => convertToSnakeCase(input).toUpperCase();

const TransformationOption = {
  camelCase: "camelCase",
  snakeCase: "snakeCase",
  kebabCase: "kebabCase",
  pascalCase: "pascalCase",
  upperCase: "upperCase",
  screamKebab: "screamKebabCase",
  constantCase: "constantCase",
};

const options = [
  {
    label: "camelCase",
    value: TransformationOption.camelCase,
  },
  {
    label: "snake_case",
    value: TransformationOption.snakeCase,
  },
  {
    label: "kebab-case",
    value: TransformationOption.kebabCase,
  },
  {
    label: "PascalCase",
    value: TransformationOption.pascalCase,
  },
  {
    label: "UPPER CASE",
    value: TransformationOption.upperCase,
  },
  {
    label: "SCREAM-KEBAB",
    value: TransformationOption.screamKebab,
  },
  {
    label: "CONSTANTS_CASE",
    value: TransformationOption.constantCase,
  },
];

export default function StringConverterComponent() {
  const [transformationOption, setTransformationOption] = useState(options[0].value);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const transformText = (text) => {
    switch (transformationOption) {
      case TransformationOption.camelCase:
        return convertToCamelCase(text);
      case TransformationOption.snakeCase:
        return convertToSnakeCase(text);
      case TransformationOption.kebabCase:
        return convertToKebabCase(text);
      case TransformationOption.pascalCase:
        return convertToPascalCase(text);
      case TransformationOption.upperCase:
        return convertToUpperCase(text);
      case TransformationOption.screamKebab:
        return convertToScreamKebabCase(text);
      case TransformationOption.constantCase:
        return convertToConstantCase(text);
      default:
        break;
    }
    return text;
  };

  return (
    <div className="flex flex-col gap-8 m-4">
      <TextArea
        initialInput="snake_case_to_camel_case"
        onInputChange={(input) => {
          setInput(input);
          setOutput(transformText(input));
        }}
      />
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4 justify-between">
          <p className="font-bold text-xl text-white"> Output: </p>
          <Selector
            values={options}
            handleClick={(filterOption) => {
              setTransformationOption(filterOption.value);
            }}
          />
          <button
            type="button"
            className="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            onClick={async () => {
              await navigator.clipboard.writeText(output);
            }}
          >
            Copy
          </button>
        </div>
        <textarea
          readOnly
          className="px-8 py-2 block w-full rounded-lg border-0 bg-gray-700 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          style={{ height: "calc(100% - 44px)" }}
          value={output}
        />
      </div>
    </div>
  );
}