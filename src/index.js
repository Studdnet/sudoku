module.exports = function solveSudoku(matrix) {
    // your solution
    for (let z=0; z<matrix.length; z++) {
      for (var i=0; i<=matrix[z].length; i++){
          if (matrix[z][i]==0){
              for (var t=1; t<=9; t++) {
                  var arr1=[matrix[0][0], matrix[0][1], matrix[0][2], matrix[1][0], matrix[1][1], matrix[1][2], matrix[2][0], matrix[2][1], matrix[2][2]];
                  var arr2=[matrix[0][3], matrix[0][4], matrix[0][5], matrix[1][3], matrix[1][4], matrix[1][5], matrix[2][3], matrix[2][4], matrix[2][5]];
                  var arr3=[matrix[0][6], matrix[0][7], matrix[0][8], matrix[1][6], matrix[1][7], matrix[1][8], matrix[2][6], matrix[2][7], matrix[2][8]];

                  var arr4=[matrix[3][0], matrix[3][1], matrix[3][2], matrix[4][0], matrix[4][1], matrix[4][2], matrix[5][0], matrix[5][1], matrix[5][2]];
                  var arr5=[matrix[3][3], matrix[3][4], matrix[3][5], matrix[4][3], matrix[4][4], matrix[4][5], matrix[5][3], matrix[5][4], matrix[5][5]];
                  var arr6=[matrix[3][6], matrix[3][7], matrix[3][8], matrix[4][6], matrix[4][7], matrix[4][8], matrix[5][6], matrix[5][7], matrix[5][8]];

                  var arr7=[matrix[6][0], matrix[6][1], matrix[6][2], matrix[7][0], matrix[7][1], matrix[7][2], matrix[8][0], matrix[8][1], matrix[8][2]];
                  var arr8=[matrix[6][3], matrix[6][4], matrix[6][5], matrix[7][3], matrix[7][4], matrix[7][5], matrix[8][3], matrix[8][4], matrix[8][5]];
                  var arr9=[matrix[6][6], matrix[6][7], matrix[6][8], matrix[7][6], matrix[7][7], matrix[7][8], matrix[8][6], matrix[8][7], matrix[8][8]];
                  //document.write('<br> '+ arr1);
                  var count=0;
                  for (var k=0; k<=matrix[z].length; k++){    //проверка горизонтали
                      if (matrix[z][k]==t) {
                          count++;
                      }
                  }
                  var secC=true;                              //проверка вертикали
                  for (var p=0; p<matrix.length; p++){
                      if (t==matrix[p][i]) {
                          secC=false;
                      }
                  }
                  var resArr;
          //Первый ряд
                  if (z>=0 && z<=2 && i>=0 && i<=2) {         //проверка ячейки 1
                      var resArr1=true;                           
                      for (let x=0; x<arr1.length; x++){
                          if (t==arr1[x]) {
                              resArr1=false;
                              break;
                          }
                      }
                      resArr=resArr1;}
                  if (z>=0 && z<=2 && i>=3 && i<=5) {         //проверка ячейки 2
                      var resArr2=true;                           
                      for (let x=0; x<arr2.length; x++){
                          if (t==arr2[x]) {
                              resArr2=false;
                              break;
                          }
                      }
                      resArr=resArr2;}
                  if (z>=0 && z<=2 && i>=6 && i<=8) {         //проверка ячейки 3
                      var resArr3=true;                           
                      for (let x=0; x<arr3.length; x++){
                          if (t==arr3[x]) {
                              resArr3=false;
                              break;
                          }
                      }
                      resArr=resArr3;}
          //Второй ряд
                  if (z>=3 && z<=5 && i>=0 && i<=2) {         //проверка ячейки 4
                      var resArr4=true;                           
                      for (let x=0; x<arr4.length; x++){
                          if (t==arr4[x]) {
                              resArr4=false;
                              break;
                          }
                      }
                      resArr=resArr4;}
                  if (z>=3 && z<=5 && i>=3 && i<=5) {         //проверка ячейки 5
                      var resArr5=true;                           
                      for (let x=0; x<arr5.length; x++){
                          if (t==arr5[x]) {
                              resArr5=false;
                              break;
                          }
                      }
                      resArr=resArr5;}
                  if (z>=3 && z<=5 && i>=6 && i<=8) {         //проверка ячейки 6
                      var resArr6=true;                           
                      for (let x=0; x<arr6.length; x++){
                          if (t==arr6[x]) {
                              resArr6=false;
                              break;
                          }
                      }
                      resArr=resArr6;}
          //Третий ряд
                  if (z>=6 && z<=8 && i>=0 && i<=2) {         //проверка ячейки 7
                      var resArr7=true;                           
                      for (let x=0; x<arr7.length; x++){
                          if (t==arr7[x]) {
                              resArr7=false;
                              break;
                          }
                      }
                      resArr=resArr7;}
                  if (z>=6 && z<=8 && i>=3 && i<=5) {         //проверка ячейки 8
                      var resArr8=true;                           
                      for (let x=0; x<arr8.length; x++){
                          if (t==arr8[x]) {
                              resArr8=false;
                              break;
                          }
                      }
                      resArr=resArr8;}
                  if (z>=6 && z<=8 && i>=6 && i<=8) {         //проверка ячейки 9
                      var resArr9=true;                           
                      for (let x=0; x<arr9.length; x++){
                          if (t==arr9[x]) {
                              resArr9=false;
                              break;
                          }
                      }
                      resArr=resArr9;}

                  if (count==0 && secC==true && resArr==true){
                      matrix[z][i]=t;
                      break;
                  }
              }
          }
      }
  }
  return matrix;
}
