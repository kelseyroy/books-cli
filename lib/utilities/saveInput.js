import * as readline from 'node:readline';
import { stdin as input } from 'node:process';

export default class Input {

    constructor(stream = input) {
        this.stream = stream;
        this.values = [];
        this.selectedValue = 0;
        this.onSelectListener = () => { };

        this.onKeyPress = this.onKeyPress.bind(this);
    }

    // setting available values
    setValues(values) {
        this.values = values;

        if (this.renderer) {
            this.renderer.setValues(values);
        }
    }

    //setting default value
    setDefaultValue(defaultValue) {
        this.selectedValue = defaultValue;
    }

    //attaching renderer
    attachRenderer(renderer) {
        this.renderer = renderer;
        this.renderer.setValues(this.values);
    }

    //register an onSelectListener
    onSelect(listener) {
        this.onSelectListener = listener;
    }

    //start listening for keypress events
    open() {
        // register keypress event
        readline.emitKeypressEvents(this.stream);

        // handle keypress
        this.stream.on('keypress', this.onKeyPress);

        // render the response
        if (this.renderer) {

            this.renderer.render(this.selectedValue);
        }

        // hide pressed keys and start listening on input
        this.stream.setRawMode(true);
        this.stream.resume();
    }

    //close stream
    close(cancelled = false) {
        // reset stream properties
        this.stream.setRawMode(false);
        this.stream.pause();
        // cleanup the output
        if (this.renderer) {
            this.renderer.cleanup();
        }

        // call the on select listener
        if (cancelled) {
            this.onSelectListener(null);
        } else {
            this.onSelectListener(this.selectedValue, this.values[this.selectedValue]);
        }

        this.stream.removeListener('keypress', this.onKeyPress);
    }

    //render responses
    render() {
        if (!this.renderer) {
            return;
        }

        this.renderer.render(this.selectedValue);
    }

    //handle and evaluate key presses
    onKeyPress(string, key) {
        if (key) {
            if (key.name === 'up' && this.selectedValue > 0) {
                this.selectedValue--;
                this.render();
            } else if (key.name === 'down' && this.selectedValue + 1 < this.values.length) {
                this.selectedValue++;
                this.render();
            } else if (key.name === 'return') {
                this.close();
            } else if (key.name === 'escape' || (key.name === 'c' && key.ctrl)) {
                this.close(true);
            }
        }
    }
};