# Spreadsheet using ReactJS and Redux
BuyHatke Frontend Task #2

----------------------

* Clone the repo
* npm i
* npm start

## Explaining Functionalities

* There are 25 x 25 rows and columns in the spredsheet initially. All are prefilled for the demo purpose however you can edit these.
* Rows are ordered alphabatically and columns are ordered by numbers.
* On click for each cell, you will get the specific actions related to that cell:
  * Row Controls:
    * Move Row Up: Moves the entire row one position up.
    * Move Row Down: Moves the entire row one position down.
    * Add Row Below: Adds an empty row below current row.
    * Add Row Above: Adds an empty row above current row.
    * Remove Row: Deletes the entire selected row.
  * Colums Controls:
    * Move Coloumn Left: Moves the entire column to the left.
    * Move Coloumn Right: Moves the entire Coloumn to the right.
    * Add Coloumn Left: Adds an empty Coloumn to the left of current Coloumn.
    * Add Coloumn Right: Adds an empty Coloumn to the right of current Coloumn.
    * Remove Coloumn: Deletes the entire selected Coloumn.
* Operations: Header is where you can perform any kind of arithmetic operations(addition, substraction, power, etc). Format for the operation is : `a4=a1+a2`, here a4 is the target cell number.
* Save CSV: You can save the data of the spreadsheet as csv in the localstorage by clicking `Save` button in the header.
* Load Data: You can load the previously saved csv back onto the spreadsheet by clicking `Load` button in the header.
