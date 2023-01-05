import * as readline from 'node:readline';
import { stdout as output } from 'node:process';

export default class Output {

    constructor(options, stream = output) {
        this.options = options;
        this.stream = stream;
        this.values = [];
        this.initialRender = true;
    }

    //setting available values
    setValues(values) {
        this.values = values;
    }

    //hide cursor
    hideCursor() {
        this.stream.write("\x1B[?25l")
    }

    //render the values
    render(selectedValue = 0) {
        if (this.initialRender) {
            // hide the cursor
            this.initialRender = false;
            this.hideCursor();
        } else {
            // remove previous lines and values
            this.stream.moveCursor(0, -(this.values.length - 1));
            this.stream.clearLine(0);
            this.stream.clearScreenDown();
            this.stream.cursorTo(0)
        }

        // output the current values
        this.values.forEach((value, index) => {
            const symbol = selectedValue === index ? this.options.selected : this.options.unselected;
            const indentation = ' '.repeat(this.options.indentation);
            const renderedValue = this.options.valueRenderer(value, selectedValue === index);
            const end = index !== this.values.length - 1 ? '\n' : '';
            this.stream.write(indentation + symbol + ' ' + renderedValue + end);
        });
    }

    showCursor() {
        this.stream.write("\x1B[?25h")
    }

    //clean console to write over with new values.
    cleanup() {
        this.stream.moveCursor(0, -(this.values.length - 1));
        this.stream.clearLine(0);
        this.stream.clearScreenDown();
        this.showCursor();
    }
};