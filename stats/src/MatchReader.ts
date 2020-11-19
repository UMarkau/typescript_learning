import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";

// A tupple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow = (row: string[]): MatchData => [
    dateStringToDate(row[0]),
    row[1],
    row[2],
    parseInt(row[3]),
    parseInt(row[4]),
    row[5] as MatchResult, // type assertion - 'H', 'A' or 'D'
    row[6],
  ];
}
