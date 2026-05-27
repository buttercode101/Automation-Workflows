# Google Sheets Formulas

## Tab: Dashboard

### New leads today
`=COUNTIFS(Leads!B:B,">="&TODAY(),Leads!B:B,"<"&TODAY()+1)`

### Contact rate
`=IFERROR(COUNTIF(Leads!M:M,"CONTACTED")/COUNTA(Leads!A:A),0)`

### Hot lead rate
`=IFERROR(COUNTIF(Leads!L:L,"YES")/COUNTA(Leads!A:A),0)`

### Won rate
`=IFERROR(COUNTIF(Leads!R:R,"WON")/COUNTA(Leads!A:A),0)`

### Avg lead score
`=IFERROR(AVERAGE(Leads!K:K),0)`
