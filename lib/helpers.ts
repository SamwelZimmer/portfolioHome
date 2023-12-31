import { DateObject } from "./types";

export function convertTimestampToDate(timestamp: string): DateObject {

    // Convert seconds to milliseconds and create a Date object
    const date = new Date(timestamp);
    
    // Extract the day, month, and year from the Date object
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // getUTCMonth() returns months from 0-11
    const year = date.getUTCFullYear();
    
    // Return the extracted date information
    return { day, month, year };
};


export function monthNumberToString(monthNumber: number): string {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Validate monthNumber is between 1 and 12
    if (monthNumber < 1 || monthNumber > 12) {
      throw new Error('Invalid month number');
    }
    
    // Return the corresponding month name
    return monthNames[monthNumber - 1];
};


export function concatenateStringToLength(str: string, length: number): string {
    if (length <= 0) {
      return '';
    }
    
    // Repeat the string until it reaches the desired length
    let result = '';
    while (result.length < length) {
      result += str;
    }
    
    // If the concatenated string is longer than the desired length, trim it
    return result.substring(0, length);
};

export const openInNewTab = (url: string): void => {
  window.open(url, '_blank');
}