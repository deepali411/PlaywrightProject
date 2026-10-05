import XLSX from 'xlsx';

export class ExcelUtils {

    static getData(filepath:string,sheetname:string,rownumber:number)
    {
       const workbook= XLSX.readFile(filepath);
       const worksheet= workbook.Sheets[sheetname];

       const data:any=XLSX.utils.sheet_to_json(worksheet)//convert into json format

       return data[rownumber]


    }
}