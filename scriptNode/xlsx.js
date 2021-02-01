const xl = require("node-xlsx")
var fs = require('fs');
// const array = ["1.14用户观看记录-2021-01-29-17-37-85","1.15用户观看记录-2021-01-29-17-15-30","1.18用户观看记录-2021-01-29-17-16-25","1.19用户观看记录-2021-01-29-17-17-84","1.20用户观看记录-2021-01-29-17-17-20","1.21用户观看记录-2021-01-29-17-18-39","1.22用户观看记录-2021-01-29-17-19-44","1.25用户观看记录-2021-01-29-17-20-86","1.26用户观看记录-2021-01-29-17-21-84","1.27用户观看记录-2021-01-29-17-21-75","1.28用户观看总时长记录-2021-01-29-17-22-45","泰来1月29日用户观看总时长记录-2021-01-29-10-18-34"]
const array = ["附件2：销售人员月参会记录导入模板","1.14用户观看记录-2021-01-29-17-37-85"]
for(let i = 0; i<array.length; i++){
    const data = []
    const xlsxStr = `${array[i]}.xlsx`

    const workbook =  xl.parse(xlsxStr)
    //读取总文件
    // const sheetNames = workbook.SheetNames; // 返回 ['sheet1', ...]
    // const worksheet = workbook.Sheets[sheetNames[0]];
    // //返回json数据
    // data =xl.utils.sheet_to_json(worksheet);
    //单个表查询数据
    if(i===1){
        console.log(workbook,'workbook');
    }
}

const data1 = [
  {
    name : 'sheet1',
    data : [
      [
        'ID',
        'Name',
        'Score'
      ],
      [
        '1',
        'Michael',
        '99'
      ],
      [
        '2',
        'Jordan',
        '98'
      ]
    ]
  },
  {
    name : 'sheet2',
    data : [
      [
        'AA',
        'BB'
      ],
      [
        '23',
        '24'
      ]
    ]
  }
]
// 写xlsx
var buffer = xl.build(data1);
fs.writeFile('./resut.xlsx', buffer, function (err)
{
  if (err)
    throw err;
  console.log('Write to xls has finished');
// 读xlsx
  var obj = xl.parse("./" + "resut.xlsx");
  console.log(JSON.stringify(obj));
}
);