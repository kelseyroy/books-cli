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

    //clear console/erase previous lines
    eraseLines = () => {
        const blank = '\n'.repeat(process.stdout.rows)
        console.log(blank)
        readline.cursorTo(this.stream, 0, 0)
        readline.clearScreenDown(this.stream)
    };

    //render the values
    render(selectedValue = 0) {
        if (this.initialRender) {
            // hide the cursor
            this.initialRender = false;
            this.eraseLines();
            this.hideCursor();
        } else {
            this.eraseLines()
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

    //previously cleared console
    cleanup() {
        this.showCursor();
    }
};