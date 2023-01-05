import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
// const Output = require('./saveOuput.js')
// const Input = require('./saveInput.js')
import Output from './saveOuput.js';
import Input from './saveInput.js'

const defaultOptions = {
    outputStream: output,
    inputStream: input,
    question: "",
    values: [],
    defaultValue: 0,
    selected: '(x)',
    unselected: '( )',
    indentation: 0,
    cleanup: true,
    valueRenderer: (value) => value,
};

//create a prompter instance
export const prompter = (options, callback) => {
    // merge options with default options
    options = {
        ...defaultOptions,
        ...options,
    };

    // create renderer and input instances
    const output = new Output(options, options.outputStream);
    const input = new Input(options.inputStream);
    input.setDefaultValue(options.defaultValue);
    input.attachRenderer(output);

    const withArrayValues = (options) => {
        return {
            input: options.values,
            output: (id, value) => {
                return {
                    id,
                    value,
                };
            },
        };
    };

    let valueMapper = withArrayValues(options);

    // map values
    options.values = valueMapper.input;
    input.setValues(options.values);

    const withCallback = (input, valueMapper, callback) => {
        input.open();
        input.onSelect((id, value) => callback(valueMapper(id, value)));
    };
    withCallback(input, valueMapper.output, callback);
};

// module.exports = prompter;