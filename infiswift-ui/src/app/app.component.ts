import { Component } from '@angular/core';
import { GridOptions, RowNode } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs'
import { Router } from '@angular/router';
import { RestaurantService } from './services/restaurant.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantService],
})
export class AppComponent {
  title = 'infiswift';
  menuSaveEnable:boolean = false;
  recipeSaveEnable:boolean = false;
  gridOptions: GridOptions;
  gridOptions1: GridOptions ;
  gridOptions2: GridOptions;
  loading: boolean = false;
  tabIndex!: number;
  menuTabSelected: boolean = true;
  hideIngeredients: boolean = true;
  recipeTabSelected: boolean = false;
  calTabSelected: boolean = false;
  insertRecipeList!: any[];
  updateRecipeList!: any[];
  insertMenuList!: any[];
  updateMenuList!: any[];
  numServings: number =1;
  constructor(
    private restaurantService: RestaurantService,
    public dialog: MatDialog,
    private router:Router,
  ){
    this.gridOptions = <GridOptions>{
      onGridReady:(params)=>{
        //The ag-grid is not enlarging based on the page height, 
    //so dynamically adjusting the height of the grid
        this.gridOptions.api?.setDomLayout("autoHeight");
        this.loading = true;
        // this.gridOptions"
        this.gridOptions.api?.setColumnDefs([
          {
            headerName: "Recipe Name",
            field: 'RCP_NM', 
            sortable: true,
            filter: "agCheckboxColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            minWidth:250,
            sort:'asc',
            editable:true,
            checkboxSelection:true,
            // width:"*",

          },
          {
            headerName: "Recipe Type",
            field: 'RCP_TYP',
            sortable: true,
            filter: true,
            cellStyle: {'text-align': 'left'} ,
            width:150,
            editable:true,
            cellEditorParams:{cellHeight:20,values:["Starter","Main Course", "Drinks", "Dessert"]},
            cellEditor:"agSelectCellEditor"


          },
          {
            headerName: "Price",
            field: 'PRICE',
            sortable: true,
            filter: "agNumberColumnFilter",
            cellStyle: {'text-align': 'center'} ,
            width:100,
            editable:true,

          }
        ]);
      }
    };
    this.gridOptions1 = <GridOptions>{
      onGridReady:(params)=>{
        //The ag-grid is not enlarging based on the page height, 
    //so dynamically adjusting the height of the grid
        this.gridOptions1.api?.setDomLayout("autoHeight");
        this.loading = true;
        // this.gridOptions1"
        this.gridOptions1.api?.setColumnDefs([
          {
            headerName: "Recipe Name",
            field: 'RCP_NM', 
            sortable: true,
            filter: "agNumberColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            width:250,
            sort:'asc',
            checkboxSelection:true,
            editable:true,

          },
          {
            headerName: "Ingredient Name",
            field: 'ING_NM', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            width:180,
            editable:true,

          },
          {
            headerName: "Ingredient Quanity",
            field: 'ING_QTY', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'center'} ,
            width:180,
            editable:true,

          },
          {
            headerName: "Ingredient Measure",
            field: 'ING_MSR', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            width:200,
            editable:true,
            cellEditorParams:{cellHeight:20,values:["Tablespoon","Teaspoon", "Cup", "Pound"]},
            cellEditor:"agSelectCellEditor"

          }
        ]);
      }
    };
    this.gridOptions2 = <GridOptions>{
      onGridReady:(params)=>{
        //The ag-grid is not enlarging based on the page height, 
    //so dynamically adjusting the height of the grid
        this.gridOptions2.api?.setDomLayout("autoHeight");
        this.loading = true;
        // this.gridOptions2"
        this.gridOptions2.api?.setColumnDefs([
          {
            headerName: "Recipe Name",
            field: 'RCP_NM', 
            sortable: true,
            filter: "agNumberColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            width:250,
            sort:'asc',

          },
          {
            headerName: "Ingredient Name",
            field: 'ING_NM', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            width:200,
            sort:'asc'

          },
          {
            headerName: "Ingredient Quanity",
            field: 'ING_QTY', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'center'} ,
            width:180,

          },
          {
            headerName: "Ingredient Measure",
            field: 'ING_MSR', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'left'} ,
            width:200,
            cellEditorParams:{cellHeight:20,values:["Tablespoon","Teaspoon", "Cup", "Pound"]},
            cellEditor:"agSelectCellEditor"

          },
          {
            headerName: "Ingredient Quanity (in Grams)",
            field: 'QTY_IN_GRAMS', 
            sortable: true,
            filter: "agTextColumnFilter",
            cellStyle: {'text-align': 'right'} ,
            width:250,

          },
        ]);
      }
    };
    // this.getRecipeDetails();
    const that = this;
    that.insertMenuList = [];
    that.insertRecipeList = [];
    that.updateMenuList = [];
    that.updateRecipeList = [];

  }

  ngOnInit():void{
    this.loading = true;
    this.getRecipeDetails();
    this.getMenuDetails();
  }

  getMenuDetails(){
    this.loading = true;
    this.restaurantService.getMenuDetails().subscribe((data)=>{
      this.gridOptions.api?.setRowData(data);
      this.gridOptions.api?.refreshCells();
      this.loading = false;
    });
  }

  getRecipeDetails(){
    this.loading = true;
    this.restaurantService.getRecipeDetails().subscribe((data)=>{
      this.gridOptions1.api?.setRowData(data);
      this.gridOptions1.api?.refreshCells();
      this.loading = false;
    });
  }

  refreshGrids(){
    this.getMenuDetails();
    this.getRecipeDetails();
    this.menuSaveEnable = false;
    this.recipeSaveEnable = false;
  }
  createNewRow(item:string){
    var newItem = {
      RCP_NM: item,
      RCP_TYP:"",
      PRICE:""
    };
    return newItem;
  }

  insertMenu(){
    var newItem = this.createNewRow("(New Item)");
    if(this.menuTabSelected){
      const addRow = this.gridOptions.api?.applyTransaction({add:[newItem]});
      this.gridOptions.api?.ensureIndexVisible(addRow!.add[0].rowIndex,"top");

    }
    else if(this.recipeTabSelected){
      const addRow = this.gridOptions1.api?.applyTransaction({add:[newItem]});
      this.gridOptions1.api?.ensureIndexVisible(addRow!.add[0].rowIndex,"top");

    }
  }

  save(){
    if(this.menuTabSelected){
      const that = this;
      this.gridOptions.api?.forEachNode(function(node:RowNode){
        console.log(node.data);
        if(node.data['RCP_KY']==null ||node.data['RCP_KY']=='' ){//insert
          that.insertMenuList.push({
            recipeName:node.data.RCP_NM,
            recipeType:node.data.RCP_TYP,
            price:node.data.PRICE,
          });
        }
        else if (node.data['RCP_KY']!=null){
          that.updateMenuList.push({
            recipeKey:node.data.RCP_KY,
            recipeName:node.data.RCP_NM,
            recipeType:node.data.RCP_TYP,
            price:node.data.PRICE,
          });
        } 
      });
      if(that.insertMenuList.length>=1){
        that.restaurantService.insertMenuDetails(that.insertMenuList).subscribe(
          (result)=>{
          }
        )
      }
      
      if(that.updateMenuList.length>=1){
        that.restaurantService.updateMenuDetails(that.updateMenuList).subscribe(
          (result)=>{
            //toImplement
          }
        )
      }


      that.insertMenuList = [];
      that.updateMenuList=  [];
      this.menuSaveEnable = false;
    }
    
    else if(this.recipeTabSelected){
      const that = this;
      this.gridOptions1.api?.forEachNode(function(node:RowNode){
        console.log(node.data);
        if(node.data['RCP_KY']==null ||node.data['RCP_KY']=='' ){//insert
          that.insertRecipeList.push({
            recipeName:node.data.RCP_NM,
            ingredientName:node.data.ING_NM,
            ingredientQuant:node.data.ING_QTY,
            ingredientMeasure:node.data.ING_MSR,
          });
        }
        else if (node.data['RCP_KY']!=null){
          that.updateRecipeList.push({
            recipeKey:node.data.RCP_KY,
            recipeName:node.data.RCP_NM,
            ingredientName:node.data.ING_NM,
            ingredientQuant:node.data.ING_QTY,
            ingredientMeasure:node.data.ING_MSR,
          });
        } 
      });
      if(that.insertRecipeList.length>=1){
        that.restaurantService.insertRecipeDetails(that.insertRecipeList).subscribe(
          (result)=>{
          }
        )
      }
      
      if(that.updateRecipeList.length>=1){
        that.restaurantService.updateRecipeDetails(that.updateRecipeList).subscribe(
          (result)=>{
            //toImplement
          }
        )
      }
      
      that.insertRecipeList = [];
      that.updateRecipeList=  [];
      this.recipeSaveEnable = false;
    }
    // this.refreshGrids();

  }

  delete(){
    if(this.menuTabSelected){
      const selectRows = this.gridOptions.api?.getSelectedRows();
      if(selectRows?.length==0) return 0;
      const json = [];
      for(let i=0; i<selectRows!.length; i++){
        json.push({
          recipeKey:selectRows![i].RCP_KY,
        });
        this.restaurantService.deleteMenuDetails(json).subscribe(
          (result)=>{
          if(result == "Success"){
              // succedded
          }
          else{
            //failure message
          }
        }
        )

      }
    }
    else if(this.recipeTabSelected){
      const selectRows = this.gridOptions1.api?.getSelectedRows();
      if(selectRows?.length==0) return 0;
      const json = [];
      for(let i=0; i<selectRows!.length; i++){
        json.push({
          recipeKey:selectRows![i].RCP_KY,
        });
        this.restaurantService.deleteRecipeDetails(json).subscribe(
          (result)=>{
          if(result == "Success"){
              // succedded
          }
          else{
            //failure message
          }
        }
        )

      }
    // this.refreshGrids();
    }
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent):void{
    this.tabIndex = tabChangeEvent.index;
    if(tabChangeEvent.tab.textLabel == "Menu"){
      this.menuTabSelected = true;
      this.recipeTabSelected = false;
    }
    else if(tabChangeEvent.tab.textLabel == "Recipes"){
      this.menuTabSelected = false;
      this.recipeTabSelected = true;
    }
    

  }
  onCellValueChanged(params: any){
    if(this.menuTabSelected)
      this.menuSaveEnable = true;
    else if(this.recipeTabSelected)
      this.recipeSaveEnable = true;
  }

  OpenIngredients(){
    // console.log(this.numServings);
    // this.router.navigateByUrl('/ingredients');
    this.restaurantService.getIngredientsQuant(this.numServings).subscribe((data)=>{
      this.gridOptions2.api?.setRowData(data);
      this.gridOptions2.api?.refreshCells();
    });

  }


  

}
