import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
const keywordSearchData = require('./keywordSearchData.json');
const mock = new MockAdapter(axios)

beforeEach(() => {

})

afterEach(() => mock.reset())

export default mock