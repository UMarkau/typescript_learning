import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

// 1) Create an object that satisfies the "DataReader" interface;
const csvFileReader = new CsvFileReader("football.csv");

// 2) Create an instance of MatchReader and pass in something satisfying the "DataReader" interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches);
