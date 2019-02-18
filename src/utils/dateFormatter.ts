interface Date {
  month?: number;
  year?: number;
}

const mapDateToString = ({ month, year }: Date) =>
  month && year ? `${month.toString().padStart(2, '0')}/${year}` : 'present';

const mapDatesToString = (startDate: Date, endDate: Date) =>
  `${mapDateToString(startDate)} to ${mapDateToString(endDate)}`;

export { mapDateToString, mapDatesToString };
