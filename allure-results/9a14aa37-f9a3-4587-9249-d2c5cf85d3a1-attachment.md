# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> valid Login
- Location: tests\Login.spec.ts:6:5

# Error details

```
Error: ENOENT: no such file or directory, open 'F:\PlaywrightProject\.TestData\credential.xlsx'
```

# Test source

```ts
  1  | import XLSX from 'xlsx';
  2  | 
  3  | export class ExcelUtils {
  4  | 
  5  |     static getData(filepath:string,sheetname:string,rownumber:number)
  6  |     {
> 7  |        const workbook= XLSX.readFile(filepath);
     |                             ^ Error: ENOENT: no such file or directory, open 'F:\PlaywrightProject\.TestData\credential.xlsx'
  8  |        const worksheet= workbook.Sheets[sheetname];
  9  | 
  10 |        const data:any=XLSX.utils.sheet_to_json(worksheet)//convert into json format
  11 | 
  12 |        return data[rownumber]
  13 | 
  14 | 
  15 |     }
  16 | }
```