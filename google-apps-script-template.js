/**
 * Speed-to-Lead helper script
 * - Creates dashboard tab
 * - Adds basic headers/labels
 * - Optional webhook helper
 */

function bootstrapDashboard() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let dashboard = ss.getSheetByName('Dashboard');
  if (!dashboard) dashboard = ss.insertSheet('Dashboard');

  dashboard.getRange('A1').setValue('Metric');
  dashboard.getRange('B1').setValue('Value');

  const rows = [
    ['New leads today', '=COUNTIFS(Leads!B:B,">="&TODAY(),Leads!B:B,"<"&TODAY()+1)'],
    ['Contact rate', '=IFERROR(COUNTIF(Leads!M:M,"CONTACTED")/COUNTA(Leads!A:A),0)'],
    ['Hot lead rate', '=IFERROR(COUNTIF(Leads!L:L,"YES")/COUNTA(Leads!A:A),0)'],
    ['Won rate', '=IFERROR(COUNTIF(Leads!R:R,"WON")/COUNTA(Leads!A:A),0)'],
    ['Avg lead score', '=IFERROR(AVERAGE(Leads!K:K),0)']
  ];

  dashboard.getRange(2, 1, rows.length, 2).setValues(rows);
}

function postToWebhook(url, payload) {
  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  return UrlFetchApp.fetch(url, options).getContentText();
}
