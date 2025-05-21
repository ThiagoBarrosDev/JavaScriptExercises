async function formatPhoneWithCountryCode(
  country: string,
  phone: string
): Promise<string> {
  try {
    const response = await fetch(
      `https://jsonmock.hackerrank.com/api/countries?name=${encodeURIComponent(
        country
      )}`
    );
    const jsonData = await response.json();
    if (!jsonData.data || jsonData.data.length === 0) {
      return "-1";
    }
    const countryData = jsonData.data[0];
    if (!countryData.callingCodes || countryData.callingCodes.length === 0) {
      return "-1";
    }
    const callingCode =
      countryData.callingCodes[countryData.callingCodes.length - 1];
    return `+${callingCode} ${phone}`;
  } catch (error) {
    console.error(error);
    return "-1";
  }
}

// Example usage:
// formatPhoneWithCountryCode("Afghanistan", "765355443").then(result => console.log(result));
