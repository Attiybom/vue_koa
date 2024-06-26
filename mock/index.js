const test = require("../mock/test");
const cascader = require("../mock/cascader");
const dialog = require("../mock/dialog");
const fileUpload = require("../mock/fileUpload");
const tabs = require("../mock/tabs");
const uploadImg = require("../mock/uploadImg");
const pageFetch = require("../mock/pageFetch");
const tableData = require("../mock/table");

const mockList = [...test, ...cascader, ...dialog, ...fileUpload, ...tabs, ...uploadImg,...pageFetch, ...tableData];

module.exports = mockList;
