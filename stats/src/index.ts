import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnaliysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// 1) Create an object that satisfies the "DataReader" interface;
const csvFileReader = new CsvFileReader("football.csv");

// 2) Create an instance of MatchReader and pass in something satisfying the "DataReader" interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

// OR

const anotherSummary = Summary.winsAnalysisWithHtmlReport("Man United");
// anotherSummary.buildAndPrintReport(matchReader.matches)
